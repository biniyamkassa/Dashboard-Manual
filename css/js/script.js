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
    window.open(
      "https://github.com/University-of-Gondar-Ethiopia/facility-data-analysis-etl/tree/master/dhis2-health-records",
      "_blank"
    );
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

// DON'T prevent default unless you handle scroll manually

// Page navigation system
document.addEventListener("DOMContentLoaded", function () {
  // Get all page sections
  const pages = document.querySelectorAll(".content-page");
  const menuLinks = document.querySelectorAll(".sidebar-menu a");
  const sidebarHeaders = document.querySelectorAll(".menu-header");
  const faqLink = document.getElementById("faq-link");

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

      // If it's the FAQ page, scroll to top
      if (pageId === "faq-section") {
        window.scrollTo(0, 0);
      } else {
        // Scroll to the section
        targetPage.scrollIntoView({ behavior: "smooth" });
      }
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

      // Collapse other menu items when expanding this one
      document.querySelectorAll(".menu-item").forEach((item) => {
        if (item !== menuItem) {
          item.classList.remove("active");
        }
      });
    }
  }

  // Add event listeners to FAQ link in dropdown
  if (faqLink) {
    faqLink.addEventListener("click", function (e) {
      e.preventDefault();
      showPage("faq-section");

      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        document.querySelector(".sidebar").classList.remove("active");
      }
    });
  }

  // Add event listeners to menu links
  document.querySelectorAll(".sidebar-menu a").forEach((link) => {
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

  // FAQ toggle functionality
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      faqItem.classList.toggle("active");
    });
  });
});

// nav....
// Fixed Navigation System
document.addEventListener("DOMContentLoaded", function () {
  // Get all page sections
  const pages = document.querySelectorAll(".content-page");
  const sidebarLinks = document.querySelectorAll(".submenu a");
  const menuHeaders = document.querySelectorAll(".menu-header");

  // Initialize the first page
  showPage("overview");
  setActiveLink("overview");

  // Show a specific page
  function showPage(pageId) {
    // Hide all pages
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add("active");

      // Scroll to the top of the page
      window.scrollTo(0, 0);

      // Update active link
      setActiveLink(pageId);

      // Expand the parent menu item
      expandParentMenuItem(pageId);
    }
  }

  // Set active link in sidebar
  function setActiveLink(pageId) {
    // Remove active class from all links
    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to current link
    const activeLink = document.querySelector(
      `.submenu a[data-target="${pageId}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Expand parent menu item
  function expandParentMenuItem(pageId) {
    const activeLink = document.querySelector(
      `.submenu a[data-target="${pageId}"]`
    );
    if (activeLink) {
      const menuItem = activeLink.closest(".menu-item");
      if (menuItem) {
        // Collapse all menu items
        document.querySelectorAll(".menu-item").forEach((item) => {
          item.classList.remove("active");
        });

        // Expand current menu item
        menuItem.classList.add("active");
      }
    }
  }

  // Add event listeners to sidebar links
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetPage = this.getAttribute("data-target");
      showPage(targetPage);

      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        document.querySelector(".sidebar").classList.remove("active");
      }
    });
  });

  // Add event listeners to menu headers
  menuHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const menuItem = this.parentElement;
      menuItem.classList.toggle("active");

      // Collapse other menu items
      document.querySelectorAll(".menu-item").forEach((item) => {
        if (item !== menuItem) {
          item.classList.remove("active");
        }
      });
    });
  });

  // Toggle dark mode
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (themeToggle) {
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
  }

  // GitHub button action
  const githubBtn = document.getElementById("github-btn");
  if (githubBtn) {
    githubBtn.addEventListener("click", () => {
      window.open("https://github.com/apache/superset", "_blank");
    });
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      document.querySelector(".sidebar").classList.toggle("active");
    });
  }

  // Home link
  const logoLink = document.querySelector(".logo");
  if (logoLink) {
    logoLink.addEventListener("click", function (e) {
      e.preventDefault();
      showPage("overview");
    });
  }

  // FAQ link in dropdown
  const faqLink = document.getElementById("faq-link");
  if (faqLink) {
    faqLink.addEventListener("click", function (e) {
      e.preventDefault();
      showPage("faq-section");
    });
  }
});
