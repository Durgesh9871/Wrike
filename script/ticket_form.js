let isEmpty = () => {
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let desc = document.getElementById("desc").value;
  let options = document.getElementById("help_options").value;

  if (email != "" && subject != "" && desc != "" && options != "") {
    document.getElementById("submit_btn").removeAttribute("disabled");
    document.getElementById("submit_btn").style.backgroundColor = "#017860";
    document.getElementById("submit_btn").style.color = "white";

    let submit_btn = document.getElementById("submit_btn");
    submit_btn.addEventListener("click", function () {
      alert("Requst Submitted");
    });
  }
};
