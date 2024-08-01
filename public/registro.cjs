 // Función que se llama al enviar el formulario
  function registrarUsuario(event) {
    event.preventDefault(); // Previene la recarga de la página
  
    // Obtener los valores del formulario
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
  
    // Enviar los datos al servidor usando fetch
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correo, password })
    })
    .then(response => response.json())
    .then(data => {
      // Manejo de la respuesta del servidor
      if (data.success) {
        alert('Usuario registrado con éxito');
        // Aquí puedes limpiar los campos del formulario o realizar otras acciones
      } else {
        alert('Error al registrar el usuario: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al registrar el usuario. Inténtalo de nuevo más tarde.');
    });
  }
