document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Aquí podrías agregar la lógica para enviar el formulario a un servidor

    alert('Mensaje enviado correctamente!'); // Mensaje de éxito
    this.reset(); // Limpia el formulario
});
