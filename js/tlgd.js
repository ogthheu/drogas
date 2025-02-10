function removeOverlay() {
    var overlay = document.querySelector('.black-overlay');
    Musica();
    overlay.style.transition = 'opacity 1s';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 1000);
  }
  
  function Musica() {
    const audio = document.getElementById('audio');
    audio.muted = false;
    audio.volume = 0.3;
    audio.play();
  }
  
  function getKey(e) {
    var n = e.keyCode;
    console.log(n);
    if (16 != n && 17 != n || (mode = 2), 1 == mode) {
      if (123 == n) return false;
    } else {
      if (73 == n || 74 == n || 85 == n) return false;
      if (123 == n) return false;
    }
  }
  
  var rev = "fwd";
  function titlebar(t) {
    var e = "nao fumo prensado", i = t, r = (e = "" + e).length;
    if ("fwd" == rev) {
      if (i < r) {
        i += 1;
        scroll = e.substr(0, i);
        document.title = scroll;
        timer = window.setTimeout("titlebar(" + i + ")", 145);
      } else {
        rev = "bwd";
        timer = window.setTimeout("titlebar(" + i + ")", 145);
      }
    } else if (i > 0) {
      var a = r - (i -= 1);
      scrol = e.substr(a, r);
      document.title = scrol;
      timer = window.setTimeout("titlebar(" + i + ")", 145);
    } else {
      rev = "fwd";
      timer = window.setTimeout("titlebar(" + i + ")", 145);
    }
  }
  titlebar(0);
  
  let mode = 1;
  document.oncontextmenu = new Function("return false;");
  
  document.querySelector('.profile-container').onmousemove = e => {
    for (const profile of document.querySelectorAll('.profile')) {
      const rect = profile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("audio");
    var muteButton = document.getElementById("muteButton");
    var muteIcon = document.getElementById("muteIcon");
    var unmuteIcon = document.getElementById("unmuteIcon");
  
    if (!audio.muted) {
      muteIcon.style.display = "none";
      unmuteIcon.style.display = "inline-block";
    }
  
    muteButton.addEventListener("click", function () {
      if (audio.muted) {
        audio.muted = false;
        muteIcon.style.display = "none";
        unmuteIcon.style.display = "inline-block";
      } else {
        audio.muted = true;
        muteIcon.style.display = "inline-block";
        unmuteIcon.style.display = "none";
      }
    });
  });
  