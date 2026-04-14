// =========================
// FOOTER YEAR UPDATE
// =========================

// Select the footer paragraph
const footer = document.querySelector("footer p");

// Get current year
const year = new Date().getFullYear();

// Insert year into footer
footer.textContent = `© ${year} Fratellituti`;


// =========================
// PROJECT CLICK EFFECTS
// =========================

// Select all project elements
const projects = document.querySelectorAll(".project");

// Add click event to each project
projects.forEach(project => {

  project.addEventListener("click", () => {

    // Show alert message
    alert("This project is coming soon 🚀");

    // Toggle active class (for styling/animation)
    project.classList.toggle("active");

  });

});


// =========================
// TYPING EFFECT (HERO TEXT)
// =========================

// Text to display
const text = "Hi, I'm Tafadzwa";

// Select element where text appears
const typingElement = document.getElementById("typing");

// Start index
let index = 0;

// Function to type text letter by letter
function type() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;

    // Speed of typing (100ms)
    setTimeout(type, 100);
  }
}

// Start typing effect
type();


// =========================
// THEME TOGGLE (DARK MODE)
// =========================

// Select theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// When clicked → toggle dark mode
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};


// =========================
// MOBILE NAVBAR TOGGLE
// =========================

// Select menu button and nav links
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

// Toggle menu visibility on click
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// =========================
// SCROLL ANIMATION (FADE IN)
// =========================

// Select all elements with "hidden" class
const hiddenElements = document.querySelectorAll(".hidden");

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // When element enters screen
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
});

// Apply observer to each hidden element
hiddenElements.forEach(el => observer.observe(el));

// =========================
// SELECT ALL SECTIONS
// =========================
const sections = document.querySelectorAll("section");

// Select all navbar links
const navLinks = document.querySelectorAll(".nav-links a");


// =========================
// RUN CODE WHEN USER SCROLLS
// =========================
window.addEventListener("scroll", () => {

  let current = ""; // Will store current section ID

  // Loop through each section
  sections.forEach(section => {

    // Get distance from top of page
    const sectionTop = section.offsetTop - 100;

    // If user has scrolled past this section
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id"); // Save section ID
    }
  });

  // Loop through nav links
  navLinks.forEach(link => {

    link.classList.remove("active"); // Remove active class first

    // If link matches current section
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active"); // Highlight it
    }
  });

});

// =========================

// =========================
// CONTACT FORM (NETLIFY - NO RELOAD)
// =========================

// Select form and status message
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

// Run when form is submitted
form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // Show sending message
    status.textContent = "Sending...";

    // Collect form data
    const formData = new FormData(form);

    // Send data to Netlify
    fetch("/", {
        method: "POST",
        body: formData
    })
    .then(() => {
        // Success message
        status.textContent = "Message sent successfully ✅";

        // Clear form
        form.reset();
    })
    .catch(() => {
        // Error message
        status.textContent = "Failed to send message ❌";
    });
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

