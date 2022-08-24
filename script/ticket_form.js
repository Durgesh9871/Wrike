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
  }
};
