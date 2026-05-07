document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const openBtn = document.getElementById("openBtn");

  const bgMusic = document.getElementById("bgMusic");

  const musicToggle = document.getElementById("musicToggle");

  let isPlaying = false;

  // mở thiệp
  openBtn.addEventListener("click", () => {
    // fade intro
    intro.classList.add("fade-out");

    // phát nhạc
    bgMusic.volume = 0.7;

    bgMusic.play();

    isPlaying = true;

    // unlock scroll
    document.body.style.overflow = "auto";

    // remove intro
    setTimeout(() => {
      intro.style.display = "none";
    }, 1200);
  });

  // toggle music
  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      bgMusic.pause();
      musicToggle.innerHTML = "🔇";
      isPlaying = false;
    } else {
      bgMusic.play();
      musicToggle.innerHTML = "🔊";
      isPlaying = true;
    }
  });

  // khóa scroll lúc intro hiện
  document.body.style.overflow = "hidden";
});
