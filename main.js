// Get the header element
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow", "bg-white");
    const logoText = document.querySelector(".logo span");
    const logoIcon = document.querySelector(".logo i");
    const navLinks = document.querySelectorAll(".navbar a");
    const menuIcon = document.getElementById("menu-icon");

    logoText.classList.remove("text-white");
    logoText.classList.add("text-black");

    logoIcon.classList.remove("text-white");
    logoIcon.classList.add("text-black");

    menuIcon.classList.remove("text-white");
    menuIcon.classList.add("text-black");

    navLinks.forEach((link) => {
      link.classList.remove("text-main");
      link.classList.add("text-black");
    });
  } else {
    // Remove classes if the user scrolls back to the top
    header.classList.remove("shadow", "bg-white");

    // Optional: Reset text and icon colors
    const logoText = document.querySelector(".logo span");
    const logoIcon = document.querySelector(".logo i");
    const navLinks = document.querySelectorAll(".navbar a");
    const menuIcon = document.getElementById("menu-icon");

    logoText.classList.remove("text-black");
    logoText.classList.add("text-white");

    logoIcon.classList.remove("text-black");
    logoIcon.classList.add("text-main");

    menuIcon.classList.remove("text-black");
    menuIcon.classList.add("text-white");

    navLinks.forEach((link) => {
      link.classList.remove("text-black");
      link.classList.add("text-main");
    });
  }
});
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileSidebar = document.getElementById("mobile-sidebar");

// Open sidebar
menuIcon.addEventListener("click", () => {
  mobileSidebar.classList.remove("translate-x-full");
  mobileSidebar.classList.add("translate-x-0");
});

// Close sidebar
closeIcon.addEventListener("click", () => {
  mobileSidebar.classList.remove("translate-x-0");
  mobileSidebar.classList.add("translate-x-full");
});
