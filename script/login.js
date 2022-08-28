let userLS = JSON.parse(localStorage.getItem("userData")) || [];
console.log(userLS.email);

function login() {
  let email = document.getElementById("email").value;
  userLS.forEach(function (elem) {
    if (elem.email === email) {
      alert("Successfully logged in");
      window.location.href = "index.html";
      return;
    } else {
      alert("User Does not exist !");
      return;
    }
  });
}
