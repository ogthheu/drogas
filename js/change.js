const userIds = [
    '1198080282453086328'
  ];

  function updateProfileImage(userId) {
    fetch('https://api.lanyard.rest/v1/users/' + userId)

      .then(response => response.json())
      .then(data => {
          const user = data.data.discord_user;
          const profileImage = document.querySelector('.profile-pic[data-user-id="' + userId + '"]');
          const usernameElement = document.querySelector('.username[data-user-id="' + userId + '"]');
          const subnickElement = document.querySelector('.nickname[data-user-id="' + userId + '"]');
          
          profileImage.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`;
          usernameElement.textContent = user.display_name || user.username;
          subnickElement.textContent = user.username;
  
          const spotifyInfo = document.querySelector('.spotify-info[data-user-id="' + userId + '"]');
          if (data.data.listening_to_spotify) {
              const spotifyImage = document.querySelector('.spotify-image[data-user-id="' + userId + '"]');
              const spotifySong = document.querySelector('.spotify-song[data-user-id="' + userId + '"]');
              const spotifyArtist = document.querySelector('.spotify-artist[data-user-id="' + userId + '"]');
              const spotifyProgress = document.querySelector('.spotify-progress[data-user-id="' + userId + '"]');
              const spotifyTimeStart = document.querySelector('.spotify-time-start[data-user-id="' + userId + '"]');
              const spotifyTimeEnd = document.querySelector('.spotify-time-end[data-user-id="' + userId + '"]');
  
              spotifyInfo.style.display = 'flex';
              const startTime = data.data.spotify.timestamps.start;
              const endTime = data.data.spotify.timestamps.end;
              const duration = endTime - startTime;
  
              spotifyImage.src = data.data.spotify.album_art_url;
              spotifySong.textContent = data.data.spotify.song;
              spotifyArtist.textContent = data.data.spotify.artist;
  
              const updateProgress = () => {
                  const currentTime = Date.now();
                  const progress = currentTime - startTime;
                  const progressPercent = (progress / duration) * 100;
                  spotifyProgress.style.width = progressPercent + '%';
                  spotifyTimeStart.textContent = formatTime(progress);
                  spotifyTimeEnd.textContent = formatTime(duration);
              };
  
              const formatTime = (ms) => {
                  const minutes = Math.floor(ms / 60000);
                  const seconds = Math.floor((ms % 60000) / 1000);
                  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
              };
  
              updateProgress();
          } else {
              spotifyInfo.style.display = 'none';
          }
      })
      
    }
  
  userIds.forEach(id => {
      updateProfileImage(id);
      setInterval(() => {
          updateProfileImage(id);
      }, 1000);
  });
  