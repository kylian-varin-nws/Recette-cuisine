// Fonction de validation de formulaire
document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    // Si tout est bon, message de succès
    alert("Formulaire soumis avec succès !");
  });

  // Fonction pour basculer entre Connexion et Inscription
  function switchToSignUp() {
    document.querySelector('h2').textContent = "Inscription";
    document.querySelector('p').textContent = "Créez un compte pour commencer.";
    
    document.querySelector('.form-switch p').innerHTML = 'Vous avez déjà un compte ? <a href="#" onclick="switchToLogin()">Connectez-vous ici</a>';
  }

  function switchToLogin() {
    document.querySelector('h2').textContent = "Connexion";
    document.querySelector('p').textContent = "Accédez à votre compte.";
    
    document.querySelector('.form-switch p').innerHTML = 'Vous n\'avez pas de compte ? <a href="#" onclick="switchToSignUp()">Inscrivez-vous ici</a>';
  }

  // Fonction pour fermer la page et revenir à l'accueil
  function closePage() {
    window.location.href = '/';  
    // Remplace '/' par l'URL de la page d'accueil si nécessaire
}