document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const mobileLinks = document.querySelectorAll("#mobile-sidebar a");
  
    // Navbar scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("bg-dark-navy", "shadow-md", "backdrop-blur-md");
      } else {
        navbar.classList.remove("bg-dark-navy", "shadow-md", "backdrop-blur-md");
      }
    });

    // Mobile menu functionality
    function openSidebar() {
      // Show overlay first
      sidebarOverlay.classList.remove("hidden");
      // Force a reflow
      sidebarOverlay.offsetHeight;
      // Add transition class
      sidebarOverlay.classList.add("transition-all", "duration-300", "ease-in-out");
      // Remove translate class from sidebar
      mobileSidebar.classList.remove("translate-x-full");
      // Add transition class to sidebar
      mobileSidebar.classList.add("transition-all", "duration-300", "ease-in-out");
      document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
      // Add translate class to sidebar
      mobileSidebar.classList.add("translate-x-full");
      // Hide overlay after animation
      setTimeout(() => {
        sidebarOverlay.classList.add("hidden");
      }, 300);
      document.body.style.overflow = "auto";
    }

    menuButton.addEventListener("click", openSidebar);
    closeButton.addEventListener("click", closeSidebar);
    sidebarOverlay.addEventListener("click", closeSidebar);

    // Close sidebar when clicking on a link
    mobileLinks.forEach(link => {
      link.addEventListener("click", closeSidebar);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const jobPanels = document.querySelectorAll(".job-panel");

    // Set initial state
    jobPanels[0].style.opacity = '1';
    jobPanels[0].style.pointerEvents = 'auto';

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => {
                btn.classList.remove("text-green", "bg-light-navy", "border-green");
                btn.classList.add("text-slate", "border-lightest-navy");
            });

            button.classList.remove("text-slate", "border-lightest-navy");
            button.classList.add("text-green", "bg-light-navy", "border-green");

            jobPanels.forEach((panel) => {
                panel.style.opacity = '0';
                panel.style.pointerEvents = 'none';
                panel.style.transition = 'opacity 0.3s ease-in-out';
            });

            if (jobPanels[index]) {
                jobPanels[index].style.opacity = '1';
                jobPanels[index].style.pointerEvents = 'auto';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // See More button functionality
    const seeMoreBtn = document.getElementById('see-more-btn');
    const moreProjects = document.getElementById('more-projects');
    if (seeMoreBtn && moreProjects) {
        seeMoreBtn.addEventListener('click', function() {
            moreProjects.classList.toggle('hidden');
            this.textContent = moreProjects.classList.contains('hidden') ? 'See More' : 'See Less';
        });
    }
});