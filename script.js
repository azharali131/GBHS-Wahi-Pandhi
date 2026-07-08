// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== TICKER PAUSE ON HOVER =====
const tickerWrap = document.querySelector('.ticker-wrap');
if (tickerWrap) {
  tickerWrap.addEventListener('mouseenter', () => {
    document.querySelector('.ticker-content').style.animationPlayState = 'paused';
  });
  tickerWrap.addEventListener('mouseleave', () => {
    document.querySelector('.ticker-content').style.animationPlayState = 'running';
  });
}

// ===== CONSOLE WELCOME =====
console.log('🏫 GBHS Wahi Pandhi Official Website');
console.log('📚 Developed by Sadam Rustamani');
console.log('💻 Built with ❤️ for the school community');


// ===== Result storage =====
{
  id: 1234567890,
  class: "6th",
  subject: "Math",
  examType: "Midterm",
  date: "2026-05-15",
  fileName: "result.jpg",
  fileType: "image/jpeg",
  fileData: "data:image/jpeg;base64,...",
  teacherName: "Mr. Ahmed",
  timestamp: 1234567890
}

