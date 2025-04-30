function login(){
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  if(user=="keiss" && pass=="keiss123"){
    alert('Correct');
  }else{
    alert('Incorrect');
  }
}
