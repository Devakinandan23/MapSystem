const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');
});

document.getElementById('loginButton').addEventListener('click', function() {
    // Redirect to the new page
    
    window.location.href = 'Navigate/navigate.html';
  });
  