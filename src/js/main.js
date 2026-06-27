import "../../public/images/arcturus-logo.png";

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const header = document.getElementById("main-header");
  const headerLogo = document.getElementById("header-logo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("shadow-md", "py-1");
      headerLogo.classList.remove("h-12");
      headerLogo.classList.add("h-9");
    } else {
      header.classList.remove("shadow-md", "py-1");
      headerLogo.classList.remove("h-9");
      headerLogo.classList.add("h-12");
    }
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  const faqButtons = document.querySelectorAll(".faq-btn");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");

      if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
        answer.style.maxHeight = "0px";
        icon.style.transform = "rotate(0deg)";
        icon.innerHTML = '<i data-lucide="plus" class="w-6 h-6"></i>';
      } else {
        document.querySelectorAll(".faq-answer").forEach((el) => (el.style.maxHeight = "0px"));
        document.querySelectorAll(".faq-icon").forEach((el) => {
          el.style.transform = "rotate(0deg)";
          el.innerHTML = '<i data-lucide="plus" class="w-6 h-6"></i>';
        });

        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(45deg)";
      }
      lucide.createIcons();
    });
  });
});
