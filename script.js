function showPage(pageId) {

      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.add('hidden'));


      document.getElementById(pageId).classList.remove('hidden');


      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => link.classList.remove('active'));


      document.getElementById('nav-' + pageId).classList.add('active');
    }




    window.onload = () => showPage('profile');
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