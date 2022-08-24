//creating buttons;
let button_tab = document.getElementById("tabs");
let tab_section = document.querySelectorAll(".all_tab");
// console.log("tab_section:", tab_section[0]);
buttons();
function buttons() {
  button_tab.innerHTML = null;
  let button_value = [
    "Plans",
    "Marketing and creative teams",
    "Services delivery teams",
  ];
  let button_class = ["plans", "marketing", "services"];
  for (let i = 0; i < button_value.length; i++) {
    let button = document.createElement("button");
    button.innerText = button_value[i];
    button.addEventListener("click", () => {
      active_btn(i, button_class, button_value.length);
    });
    button_tab.append(button);
  }
  document
    .querySelectorAll("#tabs>button")[0]
    .setAttribute("class", "active_btn ");
}

//active button & active tab
function active_btn(num, cls, length) {
  let btn = document.querySelectorAll("#tabs>button");
  for (let i = 0; i < length; i++) {
    if (num === i) {
      btn[i].setAttribute("class", `active_btn tab_${cls[num]}`);
      tab_section[i].classList.add("active_tab");
    } else {
      btn[i].removeAttribute("class");
      tab_section[i].classList.remove("active_tab");
    }
  }
}

//plans tab function;
let plans_tab = document.getElementById("plans_tab");

plansTab();
function plansTab() {
  let plans_tamplate = [
    {
      title: "Free",
      subtitle: "For teams getting started ",
      description: "Centralized task management",
      price: "0",
      button: "Sign up now",
    },
    {
      title: "Professional",
      subtitle: "For fast growing teams",
      description: "Project planning and team collaboration",
      price: "9.80",
      button: "Try for free",
    },
    {
      popular: "MOST POPULAR",
      title: "Business",
      subtitle: "For all teams across an organization",
      description: "Customized platform for any team or use case",
      price: "24.80",
      button: "Try for free",
    },
    {
      title: "Enterprise",
      subtitle: "For large teams ",
      description: "Enterprise-grade security and scalability",
      contact: "Contact us",
      button: "Try for free",
    },
    {
      title: "Pinnacle",
      subtitle: "For teams with complex work needs",
      description: "Advanced tools and analytics for complex work",
      contact: "Contact us",
      button: "Try for free",
    },
  ];

  let slider = document.createElement("div");
  slider.style.transform = "translateX(0vw)";
  //   -24 vw change the slider by one
  slider.classList.add("plan_slider");
  plans_tamplate.forEach((el) => {
    let div_plans = document.createElement("div");
    div_plans.setAttribute("class", "plan_cards");
    let title = document.createElement("h4");
    title.innerText = el.title;
    let subtitle = document.createElement("p");
    subtitle.innerText = el.subtitle;
    let description = document.createElement("p");
    description.innerText = el.description;
    let button = document.createElement("button");
    button.innerText = el.button;

    if (el.button === "Try for free") {
      button.setAttribute("class", "try_free");
    }

    if (el.popular) {
      let popular = document.createElement("div");
      popular.innerText = "MOST POPULAR";
      div_plans.append(popular);
    }

    div_plans.append(title, subtitle, description);

    if (el.price) {
      let price = document.createElement("span");
      let duration = document.createElement("span");
      price.innerText = `$${el.price}`;
      duration.innerText = `user/
      month`;
      div_plans.append(price, duration);
    }

    if (el.contact) {
      let contact = document.createElement("button");
      contact.innerText = el.contact;
      div_plans.append(contact);
    }
    div_plans.append(button);
    slider.append(div_plans);
  });
  document.querySelector(".plans_tab").append(slider);
}
