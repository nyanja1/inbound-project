document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const navLinks = document.querySelectorAll("nav a");

  function loadPage(page) {
    fetch(`pages/${page}.html`)
      .then((response) => response.text())
      .then((html) => {
        mainContent.innerHTML = html;
        updateActiveLink();
      })
      .catch((error) => {
        mainContent.innerHTML = "<h1>Error loading page</h1>";
        console.error("Error loading page:", error);
      });
  }

  function updateActiveLink() {
    const hash = window.location.hash.substring(1);
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(hash)) {
        link.classList.add("active");
      }
    });
  }

  function handleNavigation() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      loadPage(hash);
    } else {
      loadPage("home");
    }
  }

  window.addEventListener("hashchange", handleNavigation);
  handleNavigation(); // Load the initial page based on URL hash
});
