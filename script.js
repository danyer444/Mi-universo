/* ===============================
   CONFIGURACIÓN
================================ */
const PASSWORD = "1234"; // 🔴 cambia esta clave
const STORAGE_KEY = "mi_pagina_galeria";

/* ===============================
   ESTADO
================================ */
let admin = false;
let photos = [];

/* ===============================
   ELEMENTOS
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const loginBtn = document.getElementById("loginBtn");
  const uploadInput = document.getElementById("uploadInput");
  const uploadSection = document.getElementById("uploadSection");

  // Cargar fotos guardadas
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    photos = JSON.parse(saved);
    render();
  }

  /* ===============================
     LOGIN
  ================================ */
  loginBtn.addEventListener("click", () => {
    const pass = prompt("Contraseña del creador");
    if (pass === PASSWORD) {
      admin = true;
      uploadSection.style.display = "block";
      render();
      alert("Modo edición activado");
    } else {
      alert("Contraseña incorrecta");
    }
  });

  /* ===============================
     SUBIR FOTOS
  ================================ */
  uploadInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        photos.push(reader.result);
        save();
        render();
      };
      reader.readAsDataURL(file);
    });

    uploadInput.value = "";
  });

  /* ===============================
     GUARDAR
  ================================ */
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  }

  /* ===============================
     RENDER
  ================================ */
  function render() {
    gallery.innerHTML = "";

    if (photos.length === 0) {
      gallery.innerHTML = "<p>No hay fotos aún</p>";
      return;
    }

    photos.forEach((src, index) => {
      const box = document.createElement("div");
      box.className = "photo-box";

      const img = document.createElement("img");
      img.src = src;

      box.appendChild(img);

      if (admin) {
        const del = document.createElement("button");
        del.textContent = "✕";
        del.className = "delete-btn";
        del.onclick = () => {
          photos.splice(index, 1);
          save();
          render();
        };
        box.appendChild(del);
      }

      gallery.appendChild(box);
    });
  }
});

