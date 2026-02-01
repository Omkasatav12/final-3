let screens = document.querySelectorAll(".screen");
let current = 0;
let musicStarted = false;

function nextScreen() {
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    if (music) {
      music.volume = 0.35;
      music.play().catch(() => {});
    }
    musicStarted = true;
  }

  if (current >= screens.length - 1) return;

  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", nextScreen);
});
