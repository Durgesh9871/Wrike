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
// let plans_tab = document.getElementById("plans_tab");

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
  let translatePos = 0;
  slider.style.transform = `translateX(${translatePos}vw)`;
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
      console.log(el);
      button.addEventListener("click", () => {
        displayPop(el.title);
      });
    } else {
      button.addEventListener("click", () => {
        displayPop();
      });
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
  //click functionallity;
  let right_arrow = document.getElementById("right_arrow");
  right_arrow.addEventListener("click", () => {
    translatePos -= 24;
    console.log("translatePos:", translatePos);
    slider.style.transform = `translateX(${translatePos}vw)`;
    if (translatePos === -24) {
      right_arrow.style.display = "none";
      left_arrow.style.display = "block";
    }
  });

  let left_arrow = document.getElementById("left_arrow");
  left_arrow.addEventListener("click", () => {
    translatePos += 24;
    console.log("translatePos:", translatePos);
    slider.style.transform = `translateX(${translatePos}vw)`;
    if (translatePos === 0) {
      left_arrow.style.display = "none";
      right_arrow.style.display = "block";
    }
  });
}

//plan feature;
// let plans_tab = document.getElementById("plans_tab");
planFeature();
function planFeature() {
  let feature_info = [
    {
      title: "Professional",
      subtitle: "Everything in Free plan plus:",
      features: [
        "Shareable dashboards",
        "Interactive Gantt charts",
        "Productivity integrations (MS Project, Excel, RSS)",
        "1 to 2 GB storage per user",
      ],
      button: "Try for free",
    },
    {
      title: "Business",
      subtitle: "Everything in Professional plan plus:",
      features: [
        "Custom fields",
        "Custom workflows",
        "Project Blueprints",
        "Custom Item Types",
        "Branded workspace",
        "Automation Engine (200 actions/user/month)",
        "Project and task approvals, guest approvals",
        "Real-time reports and report templates",
        "Request forms and calendars",
        "Personal and Account-wide Work Schedules",
        "Resource management",
        "Time tracking and timesheets",
        "Workload charts",
        "Effort and time allocation",
        "Extension for Adobe Creative Cloud",
        "File and video proofing (30+ file formats)",
        "User groups & permissions",
        "Salesforce integration",
        "Salesforce integration",
        "5 GB storage per user",
      ],
      button: "Try for free",
    },
    {
      title: "Enterprise",
      subtitle: "Everything in Business plan plus:",
      features: [
        "Single Sign-On (SSO)",
        "Two-Factor Authentication (2FA)",
        "Password policies",
        "Custom access roles",
        "Customizable User Types",
        "Admin permissions",
        "User audit reports",
        "Automation Engine (1000 actions/user/month)",
        "10 GB storage per user",
      ],
      button: "Try for free",
    },
    {
      title: "Pinnacle",
      subtitle: "Everything in Enterprise plan plus:",
      features: [
        "Locked Spaces",
        "Advanced reporting and BI",
        "Team utilization and performance dashboard",
        "Job roles",
        "Budgeting and billable hours",
        "Bookings (project-level effort & time planning)",
        "SharePoint and HTML5 proofing and approvals",
        "Digital asset management integrations",
        "Automation Engine (1500 actions/user/month)",
        "15 GB storage per user",
      ],
      button: "Try for free",
    },
  ];

  let feature_container = document.createElement("div");
  feature_container.classList.add("feature_container");

  let button = document.createElement("button");
  button.classList.add("feature_button");
  button.innerText = "Compare Plan Features";
  let arrow = document.createElement("span");
  arrow.setAttribute("class", "fa-solid fa-caret-up");
  button.append(arrow);
  document.querySelector(".plans_tab").append(button);
  button.addEventListener("click", () => {
    featurePlans(arrow, feature_container);
  });

  feature_info.forEach((el) => {
    let div_plans = document.createElement("div");
    div_plans.setAttribute("class", "plan_cards");
    let title = document.createElement("h4");
    let subtitle = document.createElement("p");
    let button = document.createElement("button");

    title.innerText = el.title;
    subtitle.innerText = el.subtitle;
    button.innerText = el.button;
    button.classList.add("try_free");
    div_plans.append(title, subtitle);

    el.features.forEach((item) => {
      let feature = document.createElement("p");
      feature.innerText = item;
      feature.classList.add("plan_features");
      div_plans.append(feature);
    });

    div_plans.append(button);
    feature_container.append(div_plans);
    document.querySelector(".plans_tab").append(feature_container);
  });

  let plans_banner = document.createElement("div");
  let h6 = document.createElement("h6");
  let a = document.createElement("a");
  let a_icon = document.createElement("span");

  h6.innerText = "Compare features across our plans";
  a.innerText = "Take a closer look ";
  a_icon.classList.add("fa-solid", "fa-arrow-up-right-from-square");
  plans_banner.classList.add("plans_banner");

  plans_banner.append(h6, a, a_icon);
  document.querySelector(".plans_tab").append(plans_banner);
}

//popup section email
// displayPop();
function displayPop(type) {
  let container = document.getElementById("popup_email");
  container.innerHTML = null;
  let popupBox = document.createElement("div");
  let closeBox = document.createElement("div");
  let close = document.createElement("span");
  let title = document.createElement("h4");
  let input = document.createElement("input");
  let button = document.createElement("button");
  let subtitle = "";
  close.innerText = "+";
  if (type) {
    title.innerText = `Start ${type} Trail`;
    subtitle = document.createElement("p");
    subtitle.innerText = "Free 14-day trial, Easy setup, Cancel any time";
  } else {
    title.innerText = "Get Your Free Account";
  }
  input.placeholder = "Enter Your Business Email";
  button.innerText = "Sign up now";

  popupBox.classList.add("popup_box");

  close.addEventListener("click", () => {
    removePop(container, popupBox);
  });

  closeBox.append(close);
  popupBox.append(closeBox, title, subtitle, input, button);
  container.append(popupBox);

  container.classList.add("show_popup");
  popupBox.classList.add("show_popup");
}

//add popup
function removePop(container, popupBox) {
  container.classList.remove("show_popup");
  popupBox.classList.remove("show_popup");
}

//function for feature plans;
let plansClicked = false;
function featurePlans(arrow, feature_container) {
  if (plansClicked) {
    arrow.style.transform = "rotate(0deg)";
    feature_container.classList.remove("hide_feature");
    plansClicked = false;
  } else {
    arrow.style.transform = "rotate(180deg)";
    plansClicked = true;
    feature_container.classList.add("hide_feature");
  }
}
