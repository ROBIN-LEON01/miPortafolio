   
   // Mostrar animaciones cuando carga la página
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.fade-in').forEach(el => {
        setTimeout(() => el.classList.add('show'), 300);
      });

      // Mensaje de bienvenida
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Gracias por visitar mi portafolio.',
        icon: 'info',
        confirmButtonText: 'Continuar'
      });
    });

    function mostrarSweet() {
      Swal.fire({
        title: '¡Hola!',
        text: 'Esta es una alerta interactiva con SweetAlert2.',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
    }

    function mostrarToastr() {
      toastr.info('Aquí puedes ver mis proyectos destacados.', 'Proyectos');
    }

    function toggleModo() {
      document.body.classList.toggle('light-mode');
      toastr.success('Modo cambiado correctamente');
    }
