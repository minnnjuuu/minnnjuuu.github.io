// Terminal typing animation
  const lines = [
    'whoami → 김민주',
    'cat interests.txt→[Dev, Web Hacking, Crypto]',
  ];
  let lineIdx = 0, charIdx = 0;
  const el = document.getElementById('typed-text');

  function type() {
    if (charIdx < lines[lineIdx].length) {
      el.textContent += lines[lineIdx][charIdx++];
      setTimeout(type, 45);
    } else {
      setTimeout(erase, 2000);
    }
  }
  function erase() {
    if (el.textContent.length > 0) {
      el.textContent = el.textContent.slice(0, -1);
      setTimeout(erase, 20);
    } else {
      lineIdx = (lineIdx + 1) % lines.length;
      charIdx = 0;
      setTimeout(type, 400);
    }
  }
  type();

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .activity-item, .award-item, .edu-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
