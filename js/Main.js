const localMultiplayerBtn = document.querySelector("#local-multiplayer");
const aiGame =  document.querySelector("#ai-game");

localMultiplayerBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("show-overlay");
  play("local-multiplayer");
});

aiGame.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("show-overlay");
  play("ai");
});

function toggleOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("show-overlay");
}

window.addEventListener("load", () => {
  toggleOverlay();
});
