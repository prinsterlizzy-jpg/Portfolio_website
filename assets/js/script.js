let titles = [
    "Python Developer",
    "Data Analyst",
    "Cloud Computing Enthusiast",
    "Full Stack Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let letter = "";

function typeEffect() {
    if (index === titles.length) {
        index = 0;
    }

    currentText = titles[index];
    letter = currentText.slice(0, ++charIndex);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        charIndex = 0;
        index++;
        setTimeout(typeEffect, 1500);
    } else {
        setTimeout(typeEffect, 120);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* =====================
   HERO TEXT TYPING ANIMATION
===================== 

typeEffect();

/* =====================
   SMOOTH SCROLL
===================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
closeBtn.addEventListener('click', () => {
  dialog.classList.add('closing');
  dialog.style.animation = 'dialogOut 0.25s ease';

  setTimeout(() => {
    dialog.close();
    dialog.classList.remove('closing');
    dialog.style.animation = '';
  }, 250);
});
