// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById("NavMenu");
  navMenu.classList.toggle("active");
}

// Sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add mobile sidebar toggle button
function addMobileSidebarButton() {
  if (window.innerWidth <= 768) {
    const logoSection = document.getElementById("LogoSection");
    let sidebarBtn = document.querySelector(".mobile-sidebar-btn");

    if (!sidebarBtn) {
      sidebarBtn = document.createElement("button");
      sidebarBtn.className = "mobile-sidebar-btn";
      sidebarBtn.innerHTML = '<i class="fas fa-bars"></i>';
      sidebarBtn.style.cssText = `
                        background: none;
                        border: none;
                        font-size: 1.2rem;
                        color: #2c5aa0;
                        cursor: pointer;
                        margin-left: 1rem;
                    `;
      sidebarBtn.onclick = toggleSidebar;
      logoSection.appendChild(sidebarBtn);
    }
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  const navMenu = document.getElementById("NavMenu");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

  if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Handle responsive behavior
window.addEventListener("resize", function () {
  const navMenu = document.getElementById("NavMenu");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  addMobileSidebarButton();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add hover effects to service items
document.querySelectorAll(".service-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Initialize
addMobileSidebarButton();

// Add active state to sidebar links
// document.querySelectorAll("aside a").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     document
//       .querySelectorAll("aside a")
//       .forEach((l) => l.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

// Search functionality
document
  .querySelector("#SearchSection button")
  .addEventListener("click", function () {
    const searchTerm = document.querySelector("#SearchSection input").value;
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
    }
  });

document
  .querySelector("#SearchSection input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.querySelector("#SearchSection button").click();
    }
  });