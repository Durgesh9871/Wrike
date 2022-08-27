let userLS = JSON.parse(localStorage.getItem("userData")) || [];
console.log(userLS.email);

function login() {
  let email = document.getElementById("email").value;
  userLS.forEach(function (elem) {
    if (elem.email === email) {
      window.location.href = "index.html";
    } else {
      alert("User Does not exist !");
      window.location.href = "signup.html";
    }
  });
}
