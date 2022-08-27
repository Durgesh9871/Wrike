function signup() {
  let userLS = JSON.parse(localStorage.getItem("userData")) || [];
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    email: email,
    password: password,
  };

  if (email == "" && password == "") {
    alert("empty fields");
  } else {
    if (user.password.length < 8) {
      alert("password must be of 8 length");
    } else {
      userLS.push(user);
      localStorage.setItem("userData", JSON.stringify(userLS));
      window.location.href = "login.html";
    }
  }
}
