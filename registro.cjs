async function registrarUsuario(event) {
  event.preventDefault();
  
  const email = document.getElementById('correo').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    if (data.success) {
      alert('Registro exitoso');
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
  }
}
