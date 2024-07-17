document.addEventListener('DOMContentLoaded', (event) => {
  const loginContainer = document.getElementById('loginContainer');
  const signupContainer = document.getElementById('signupContainer');
  const showSignupButton = document.getElementById('showSignup');
  const showLoginButton = document.getElementById('showLogin');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  showSignupButton.addEventListener('click', (e) => {
      e.preventDefault();
      loginContainer.classList.add('hidden');
      signupContainer.classList.remove('hidden');
  });

  showLoginButton.addEventListener('click', (e) => {
      e.preventDefault();
      signupContainer.classList.add('hidden');
      loginContainer.classList.remove('hidden');
  });

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log('Tentative de connexion avec:', { email, password });
      // Ici, vous pouvez ajouter la logique pour envoyer ces données à votre serveur
      alert('Tentative de connexion. En situation réelle, ces données seraient envoyées à un serveur pour authentification.');
  });

  signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
      
      if (password !== confirmPassword) {
          alert('Les mots de passe ne correspondent pas.');
          return;
      }
      
      console.log('Tentative d\'inscription avec:', { name, email, password });
      // Ici, vous pouvez ajouter la logique pour envoyer ces données à votre serveur
      alert('Tentative d\'inscription. En situation réelle, ces données seraient envoyées à un serveur pour créer un nouveau compte.');
  });
});