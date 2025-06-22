//===========================================
//  Mostrar mensaje de bienvenida al cargar
//===========================================
// window.addEventListener("DOMContentLoaded", () => {
//   Swal.fire({
//     title: "¡Bienvenido!",
//     text: "Gracias por visitar mi portafolio.",
//     icon: "success",
//     confirmButtonText: "Explorar",
//   });
// });
const mensajes = {
  es: {
    titulo: "¡Bienvenido!",
    texto: "Gracias por visitar mi portafolio.",
    boton: "Explorar",
  },
  en: {
    titulo: "Welcome!",
    texto: "Thanks for visiting my portfolio.",
    boton: "Explore",
  },
};

function mostrarAlerta(idioma) {
  Swal.fire({
    title: mensajes[idioma].titulo,
    text: mensajes[idioma].texto,
    icon: "success",
    confirmButtonText: mensajes[idioma].boton,
  });
}

window.addEventListener("DOMContentLoaded", () => {
  mostrarAlerta("es"); // idioma por defecto
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

//===========================================
//            btn de idiomas
//===========================================
const textosAlerta = {
  es: {
    titulo: "¡Bienvenido!",
    mensaje: "Gracias por visitar mi portafolio.",
    boton: "Explorar",
  },
  en: {
    titulo: "Welcome!",
    mensaje: "Thanks for visiting my portfolio.",
    boton: "Explore",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  cambiarIdioma(idiomaGuardado);
});
