let isEmpty = () => {
  let email = document.getElementById("email").value;
  email.innerText = "";
  let subject = document.getElementById("subject").value;
  subject.innerText = "";
  let desc = document.getElementById("desc").value;
  desc.innerText = "";

  let options = document.getElementById("help_options").value;
  options.innerText = "";

  if (email != "" && subject != "" && desc != "" && options != "") {
    document.getElementById("submit_btn").removeAttribute("disabled");
    document.getElementById("submit_btn").style.backgroundColor = "#017860";
    document.getElementById("submit_btn").style.color = "white";
    let submit_btn = document.getElementById("submit_btn");
    submit_btn.addEventListener("click", function () {
      alert("Submitted");
    });
  }
};
