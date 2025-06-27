// Page navigation system
document.addEventListener("DOMContentLoaded", function () {
  // Get all page sections
  const pages = document.querySelectorAll(".content-page");
  const menuLinks = document.querySelectorAll(".submenu a");
  const sidebarHeaders = document.querySelectorAll(".menu-header");

  // Function to show a specific page
  function showPage(pageId) {
    // Hide all pages
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add("active");
    }

    // Update active menu links
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + pageId) {
        link.classList.add("active");
      }
    });

    // Expand the parent menu item
    const activeLink = document.querySelector(`.submenu a[href="#${pageId}"]`);
    if (activeLink) {
      const menuItem = activeLink.closest(".menu-item");
      menuItem.classList.add("active");

      // Collapse other menu items
      document.querySelectorAll(".menu-item").forEach((item) => {
        if (item !== menuItem) {
          item.classList.remove("active");
        }
      });
    }
  }

  // Add event listeners to menu links
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const pageId = this.getAttribute("href").substring(1);
      showPage(pageId);

      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        document.querySelector(".sidebar").classList.remove("active");
      }
    });
  });

  // Add event listeners to sidebar headers
  sidebarHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const menuItem = this.parentElement;
      menuItem.classList.toggle("active");

      // Collapse other menu items when expanding this one
      if (menuItem.classList.contains("active")) {
        document.querySelectorAll(".menu-item").forEach((item) => {
          if (item !== menuItem) {
            item.classList.remove("active");
          }
        });
      }
    });
  });

  // Toggle dark mode
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Toggle icon
    const icon = themeToggle.querySelector("i");
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }

    // Save preference to localStorage
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });

  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    themeToggle.querySelector("i").classList.remove("fa-moon");
    themeToggle.querySelector("i").classList.add("fa-sun");
  }

  // GitHub button action
  document.getElementById("github-btn").addEventListener("click", () => {
    window.open("https://github.com/apache/superset", "_blank");
  });

  // Mobile menu toggle
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
  });

  // Home link
  document.querySelector(".logo").addEventListener("click", function (e) {
    e.preventDefault();
    showPage("home");
  });

  // Initialize with the home page
  showPage("home");
});

// ||||||||||||||||||||||||||||||||||||||||/|
