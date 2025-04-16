const projects = [
  {
    id: 16,
    name: "Foovante Globals",
    url: "https://www.foovante-global.com/",
    summary:
      "Foovante Global enables high CO₂ emission companies to offset emissions by supporting green projects and earning carbon credits.",
    images: [".././assets/img/projects/1.jpg"],
  },
  {
    id: 6,
    name: "Edesah-copy",
    url: "https://edasha-copy.vercel.app/",
    tag: "",
    summary: "",

    images: [".././assets/img/projects/2.jpg"],
  },
  {
    id: 5,
    name: "Bank-app",
    url: "https://jattoh1000.github.io/jattoh-bank-app/",
    tag: "",
    summary: "",

    images: [".././assets/img/projects/3.jpg"],
  },
];

/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// MENU SHOW
// VALIDATE IF CONSTANT EXISTS
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
// VALIDATE IF CONSTANT EXISTS
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//  ACCORDION SKILLS
const skillsContent = document.getElementsByClassName("skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }
  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

//  QUALIFICATION TABS
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

// SERVICES MODAL
const modalViews = document.querySelectorAll(".services-modal"),
  modalBtns = document.querySelectorAll(".services-button"),
  modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

let portfolioImages = document.querySelectorAll(".portfolio-img");

portfolioImages.forEach((portfolioImage) => {
  portfolioImage.addEventListener("click", () => {
    portfolioImage.classList.add(".portfolio-active");
  });
});

// TESTIMONIAL

let swiperTestimonial = new Swiper(".testimonial-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// show scroll Up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// DARK/LIGHT THEME

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// DATA AOS
// AOS.init();

// PROJECT SECTION FUNCTIONALITY
console.log(window.location.pathname);
const swiperWrapper = document.querySelector(
  ".portfolio-container.swiper-container .swiper-wrapper"
);
if (swiperWrapper) {
  projects.map((project) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList = "portfolio-content grid swiper-slide";
    swiperSlide.innerHTML = `
       <img
        src="${project.images[0]}"
        alt="classroom website"
        class="portfolio-img"
       />

       <div class="portfolio-data">
        <h3 class="portfolio-title">${project.name}</h3>
        <p class="portfolio-description">
         ${project.summary}
        </p>
        <a
        //  href="project.html"
         class="button repo button-flex button-small portfolio-button"
         id="swiper-slide-portfolio-more"
         data-id="${project.tag}"
        >
         See More
         <i class="uil uil-angle-right button-icon"></i>
        </a>
        <a
         href="${project.url}"
         class="button button-flex button-small portfolio-button"
         target="_blank"
        >
         View
         <i class="uil uil-angle-right button-icon"></i>
        </a>
       </div>
     
 `;
    swiperWrapper.appendChild(swiperSlide);
  });
}

const viewMoreBtns = document.querySelectorAll("#swiper-slide-portfolio-more");
viewMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem(
      "current-project-in-view",
      btn.getAttribute("data-id")
    );
  });
});

// PORTFOLIO SWIPER
let swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
