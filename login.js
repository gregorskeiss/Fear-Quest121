function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  if (user == "keiss" && pass == "keiss123") {
    alert('Jūs esat veiksmīgi pieslēgušies!');
  } else {
    alert('Nepareizs lietotājvārds vai parole.');
  }
}
