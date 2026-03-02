function showPage(pageId) {

      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.add('hidden'));


      document.getElementById(pageId).classList.remove('hidden');


      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => link.classList.remove('active'));


      document.getElementById('nav-' + pageId).classList.add('active');

      closeMobileMenu();
    }




    window.onload = () => showPage('profile');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    function closeMobileMenu() {
      if (!mainNav || !menuToggle) {
        return;
      }
      mainNav.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }

    function toggleMobileMenu() {
      if (!mainNav || !menuToggle) {
        return;
      }
      const isOpen = mainNav.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMobileMenu);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });

    let currentIndex = 0;
    const slide = document.getElementById('slide');
    const cards = document.querySelectorAll('.project-card');

    function updateSlide() {
      const offset = -currentIndex * 100;
      slide.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlide();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlide();
    }