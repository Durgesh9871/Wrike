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
      // console.log(el);
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
      popular.style.fontSize = "12px";
      popular.style.color = "grey";
      popular.style.fontWeight = "bold";
      div_plans.append(popular);
    }

    div_plans.append(title, subtitle, description);

    if (el.price) {
      let price_duration = document.createElement("div");
      let price = document.createElement("span");
      let duration = document.createElement("span");
      price.innerText = `$${el.price}`;
      duration.innerText = `user/
      month`;
      price.classList.add("price_dollar");
      price_duration.append(price, duration);
      price_duration.style.display = "flex";
      price_duration.style.gap = "10px";
      div_plans.append(price_duration);
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
    // console.log("translatePos:", translatePos);
    slider.style.transform = `translateX(${translatePos}vw)`;
    if (translatePos === -24) {
      right_arrow.style.display = "none";
      left_arrow.style.display = "block";
    }
  });

  let left_arrow = document.getElementById("left_arrow");
  left_arrow.addEventListener("click", () => {
    translatePos += 24;
    // console.log("translatePos:", translatePos);
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
    button.addEventListener("click", () => {
      displayPop(el.title);
    });
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

//marketing tab
marketingTab();
function marketingTab() {
  for (let i = 0; i < 2; i++) {
    let commonTabBox = document.createElement("div");
    let title = document.createElement("h4");
    let subtitle = document.createElement("p");
    let caption = document.createElement("p");
    let contact = document.createElement("button");
    let trybtn = document.createElement("button");
    trybtn.classList.add("try_free");
    commonTabBox.classList.add("commonTab_box");

    if (i === 0) {
      title.innerText = "Wrike for Marketing Teams";
      subtitle.innerText =
        "Powerful features custom-built for marketing and creative teams";
      caption.innerText =
        "Create high-quality, consistent brand experiences globally, at speed and scale.";

      contact.innerText = "Contact us";
      trybtn.innerText = "Try for free";

      commonTabBox.append(title, subtitle, caption, contact, trybtn);

      document.querySelector(".marketing_tab").append(commonTabBox);
    } else {
      title.innerText = "Wrike for Professional Services Teams";
      subtitle.innerText =
        "Powerful features custom-built for professional services teams";
      caption.innerText =
        "Stay on top of project delivery and turn billable time into revenue — fast.";

      contact.innerText = "Contact us";
      trybtn.innerText = "Try for free";

      commonTabBox.append(title, subtitle, caption, contact, trybtn);

      document.querySelector(".service_tab").append(commonTabBox);
    }
  }
}

//partner brands logo
partnerBrands();
function partnerBrands() {
  logo_link = [
    "https://web-static.wrike.com/content/uploads/2020/06/rebrand-logoroll_logo_google.svg?av=9b17bb4669ab35947f32929ac955bee2",
    "https://web-static.wrike.com/content/uploads/2022/01/1440_logoroll_logo_syneos-1.svg?av=8245084e9f842e96e559e9a271044a88",
    "https://web-static.wrike.com/content/uploads/2021/06/1440_logoroll_logo_lyft.svg?av=ff9ed8ad750c611fdf2e4594f05fa81b",
    "https://web-static.wrike.com/content/uploads/2020/06/rebrand-logoroll_logo_Siemens.svg?av=e6aa94b50a6f43398434a97bbb106da8",
    "https://web-static.wrike.com/content/uploads/2021/11/1440_logoroll_logo_nickelodeon.svg?av=a803611b33407188a89c536bc33e127f",
    "https://web-static.wrike.com/content/uploads/2020/06/rebrand-logoroll_logo_Oglivy.svg?av=4eb15c17d1375900a7678e6cfcf07be9",
    "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_snowflake.svg?av=7b1861c194a9ba9e67b2ff4a808b1db2",
  ];

  let logoDiv = document.createElement("div");
  logo_link.forEach((el) => {
    let image = document.createElement("img");
    image.src = el;
    logoDiv.append(image);
  });
  let text = document.createElement("div");
  text.innerText = "TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE";
  document.querySelector(".brand_logo").append(logoDiv, text);
}

//addon feature;
addOnFeature();
function addOnFeature() {
  let card_content = [
    {
      logo: "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_wrike-share.svg?av=58a3e7c51a1bcf7c50ee06223e32fe70",
      hover_logo:
        "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_wrike-share_inverse-1.svg?av=4c673fb2fec17b0103966d1144219365",
      card_name: "Wrike Integrate",
      text: "Create custom integrations and automations with 400+ cloud and on-premises applications.",
      link: "Learn more",
    },
    {
      logo: "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_two-way-sync.svg?av=823a9aebb7f1c14018fa6a7ae64fbed9",
      hover_logo:
        "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_two-way-sync_inverse.svg?av=3a118860b6be6ede7d061349ac2b1be8",
      card_name: "Wrike Integrate",
      text: "Create custom integrations and automations with 400+ cloud and on-premises applications.",
      link: "Learn more",
    },
    {
      logo: "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_lock.svg?av=e7277b0efdceebeafa444ac4e18ba90b",
      hover_logo:
        "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_lock_inverse.svg?av=e01395afa436ed913962b30e883e8647",
      card_name: "Wrike Integrate",
      text: "Create custom integrations and automations with 400+ cloud and on-premises applications.",
      link: "Learn more",
    },
    {
      logo: "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_manage-anything.svg?av=f29d1101c7c7bbeda975dc65bd0733c8",
      hover_logo:
        "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_manage-anything_inverse.svg?av=6ea4e5fd5077aaa5eba0ff2bd3ece847",
      card_name: "Wrike Integrate",
      text: "Create custom integrations and automations with 400+ cloud and on-premises applications.",
      link: "Learn more",
    },
  ];

  let addOnContainer = document.querySelector("#add_on_feature");
  let heading = document.createElement("h2");
  let subtitle = document.createElement("p");
  let gridBox = document.createElement("div");
  heading.classList.add("header_title", "sub__title");
  subtitle.classList.add("header_subtitle", "sub__title");

  heading.innerText = "Add-on Features";
  subtitle.innerText =
    "An add-on is a set of premium features that you can add to your Wrike account for an additional fee. Enhance your plan to unlock more value for your team.";

  card_content.forEach((el) => {
    let cardDiv = document.createElement("div");
    let logoDiv = document.createElement("div");
    let infoDiv = document.createElement("div");
    let logo = document.createElement("img");
    let hover_logo = document.createElement("img");
    let card = document.createElement("h5");
    card.classList.add("name_card");
    let text = document.createElement("p");
    text.classList.add("card_text");
    let link = document.createElement("p");

    logo.src = el.logo;
    hover_logo.src = el.hover_logo;
    card.innerText = el.card_name;
    text.innerText = el.text;
    link.innerText = el.link;

    hover_logo.classList.add("hover_effect");
    cardDiv.classList.add("hover_effect");

    logoDiv.append(logo, hover_logo);
    infoDiv.append(card, text, link);
    cardDiv.append(logoDiv, infoDiv);
    gridBox.append(cardDiv);
  });

  addOnContainer.append(heading, subtitle, gridBox);
}

//client success
clientSection();
function clientSection() {
  let box_content = [
    {
      logo: "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_setting-gear.svg?av=0b708e74d43343f50156c3802e7b9f9a",
      title: "Professional Services",
      description:
        "Wrike offers a selection of professional services packages to successfully onboard your team. Our consulting team will make sure you get the most out of your collaborative work management solution.",
    },
    {
      logo: "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_collaboration.svg?av=8877e644b7c007a6e5e88d14673777b4",
      title: "Customer Success Partnership",
      description:
        "Your dedicated advocate and trusted partner provides you with best practices and advice tailored to your goals and business objectives, ensuring your success with Wrike.",
    },
    {
      logo: "https://web-static.wrike.com/content/uploads/2020/06/rebrand-icon_headphones.svg?av=fad9a561b19dd84be9eb855047ffcaa6",
      title: "Global Support",
      description:
        "Wrike provides support through the Help Center, email, chat, and phone to address your questions and concerns. Get the support you need during your business hours, in your own language, the way you want.",
    },
  ];

  let heading = document.createElement("h2");
  let subtitle = document.createElement("p");
  let boxContainer = document.createElement("div");
  heading.classList.add("header_title", "sub__title");
  subtitle.classList.add("header_subtitle", "sub__title");
  boxContainer.classList.add("client_card_container");

  heading.innerText = "Client Success with Wrike";
  subtitle.innerText =
    "Optimize Wrike to achieve your goals with expert consulting, training, and support.";

  box_content.forEach((el) => {
    let box = document.createElement("div");
    let logo = document.createElement("img");
    logo.src = el.logo;
    let title = document.createElement("h5");
    title.classList.add("name_card");
    title.innerText = el.title;
    let description = document.createElement("p");
    description.classList.add("card_text");
    description.innerText = el.description;

    box.append(logo, title, description);
    boxContainer.append(box);
  });
  let button = document.createElement("button");
  button.innerText = "Contact us for pricing";

  document
    .querySelector("#client")
    .append(heading, subtitle, boxContainer, button);
}

//faq section
faq();
function faq() {
  let faq_data = [
    {
      title: "1. What are the different types of licenses?",
      text: "Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.<br><br> Within these, there are full and guest licenses. A full license (regular users and external users) gives you access to every feature within your plan but external users are limited to certain access rights. However, a guest license (collaborators) only gives you some basic functions.",
    },
    {
      title: "2. What happens when my trial has expired? ",
      text: "Your account will be blocked until you choose what you’d like to do with it. From here, you can either downgrade it to the free version or reach out to your Wrike representative. They will be able to discuss the next steps for choosing a plan and whether a trial extension is possible.",
    },
    {
      title: "3. How do I purchase a subscription?",
      text: "If you are a first-time user, just enter your business email at the top of the page to get your 14-day free trial. You can give us a call to get set up or wait for one of our representatives to get in touch to find the right solution for your team.  If you already have a trial, you can purchase online for up to 15 users for Professional and Business plans with no add-ons in the Account section of your workspace. For a larger number of users, you’ll need to contact your Wrike representative.  Wrike is sold in groups of users. For accounts of up to 30 seats, subscription is sold in groups of 5. For accounts of 30 to 100 seats, subscription is sold in groups of 10. For accounts above 100 seats, subscription is sold in groups of 25. Wrike Business and above is only available as an annual subscription.",
    },
    {
      title: "4. Can I pay in my local currency and what kind of taxes apply?",
      text: "All our prices are listed in US dollars, but your bank will be able to convert this to your local currency upon purchase. You will also receive your invoice in US dollars. In regards to tax implications, all of our prices do not include applicable state/local taxes and you (the client) will be responsible for them. If you have any questions, please speak to your sales representative and we’ll be happy to help.",
    },
    {
      title: "5. Where will my data be hosted?",
      text: "Your data will be automatically stored in our two data centers in San Jose, California. You may also request your data to be stored in our European data center in Amsterdam, the Netherlands. To request this, just contact your Wrike representative or our support team.",
    },
    {
      title:
        "6. Does Wrike have an on-premise solution or is it just cloud-based?",
      text: "Wrike is entirely cloud-based, meaning there is no need for site visits and our software can be used instantly by remote workers.",
    },
    {
      title: "7. What does Wrike do to ensure GDPR compliance?",
      text: "Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.Within these, there are full and guest licenses. A full license (regular users and external users) gives you access to every feature within your plan but external users are limited to certain access rights. However, a guest license (collaborators) only gives you some basic functions.",
    },
    {
      title:
        "8. What are the differences between Wrike Professional, Wrike for Professional Services, and a Professional Services deployment add-on?",
      text: "Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options. Within these, there are full and guest licenses. A full license (regular users and external users) gives you access to every feature within your plan but external users are limited to certain access rights. However, a guest license (collaborators) only gives you some basic functions.",
    },
    {
      title:
        "9. From what team size do you recommend adding a Professional Services deployment to my solution?",
      text: "Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.Within these, there are full and guest licenses. A full license (regular users and external users) gives you access to every feature within your plan but external users are limited to certain access rights. However, a guest license (collaborators) only gives you some basic functions.",
    },
  ];

  let faq_container = document.getElementById("faq");
  let heading = document.createElement("h2");
  heading.innerText = "FAQ";
  heading.classList.add("header_title", "sub__title");

  faq_container.append(heading);

  faq_data.forEach((el) => {
    let boxes = document.createElement("div");
    let button = document.createElement("button");
    let arrow = document.createElement("span");
    let text = document.createElement("p");

    text.classList.add("collapse_text");
    boxes.classList.add("collapse_text");
    button.classList.add("collapse_text");

    boxes.addEventListener("click", () => {
      faqCollapse(arrow, text, boxes, button);
    });
    boxes.classList.add("faq_boxes");
    button.innerText = el.title;
    text.innerText = el.text;
    arrow.setAttribute("class", "fa-solid fa-caret-up");
    button.append(arrow);
    boxes.append(button, text);
    faq_container.append(boxes);
  });
}

//faq collapse function

// let statusCollapse = false;
function faqCollapse(arrow, text, boxes, button) {
  // console.log(text.classList.value);
  if (text.classList.value === "") {
    arrow.style.transform = "rotate(0deg)";
    text.classList.add("collapse_text");
    // statusCollapse = false;
    boxes.classList.add("collapse_text");
    button.classList.add("collapse_text");
  } else {
    arrow.style.transform = "rotate(180deg)";
    // statusCollapse = true;
    text.classList.remove("collapse_text");
    boxes.classList.remove("collapse_text");
    button.classList.remove("collapse_text");
  }
}
