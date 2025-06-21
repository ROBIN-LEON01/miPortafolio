//===========================================
//  Mostrar mensaje de bienvenida al cargar
//===========================================
window.addEventListener("DOMContentLoaded", () => {
  Swal.fire({
    title: "¡Bienvenido!",
    text: "Gracias por visitar mi portafolio.",
    icon: "success",
    confirmButtonText: "Explorar",
  });
});
//===========================================
// Cambiar modo oscuro/claro
//===========================================
function cambiarModo() {
  const body = document.body;
  const btn = document.querySelector(".mode-btn");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    btn.classList.remove("btn-outline-light");
    btn.classList.add("btn-outline-dark");
  } else {
    btn.classList.remove("btn-outline-dark");
    btn.classList.add("btn-outline-light");
  }
}
