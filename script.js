document.addEventListener("DOMContentLoaded", () => {
  // Elementos principales
  const start = document.getElementById("start");
  const startBtn = document.getElementById("startBtn");
  const scene = document.getElementById("scene");

  // Verificación básica (evita pantalla negra silenciosa)
  if (!start || !startBtn || !scene) {
    console.error("Error: faltan elementos en el HTML");
    return;
  }

  // Acción al tocar el corazón
  startBtn.addEventListener("click", () => {
    start.classList.add("hidden");
    scene.classList.remove("hidden");
  });
});
