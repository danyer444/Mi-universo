const startBtn = document.getElementById("startBtn");
const start = document.getElementById("start");
const scene = document.getElementById("scene");
const orbit = document.getElementById("orbit");

startBtn.onclick = () => {
  start.classList.add("hidden");
  scene.classList.remove("hidden");
  loadData();
};

function loadData() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      data.texts.forEach((text, i) => {
        const el = document.createElement("div");
        el.className = "orbit-item";
        el.innerText = text;
        el.style.top = `${50 + Math.sin(i) * 120}%`;
        el.style.left = `${50 + Math.cos(i) * 120}%`;
        orbit.appendChild(el);
      });
    });
}
