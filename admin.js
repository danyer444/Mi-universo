const PASSWORD = "1234";

function login() {
  if (document.getElementById("pass").value === PASSWORD) {
    document.getElementById("panel").style.display = "block";
  }
}

function save() {
  alert("Aquí se conectaría con backend real (Firebase)");
}
