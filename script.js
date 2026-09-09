document.addEventListener("DOMContentLoaded", () => {
  // 1. Lucide İkonlarını Başlat
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Navbar Scroll Efekti (Sayfa kaydırıldıkça arka plan koyulaşır)
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 3. İstatistik Sayı Sayma Animasyonu (150+ Lisanslı Sporcu / 10+ Antrenör)
  const animateStats = () => {
    const stats = document.querySelectorAll(".stat-number");
    const targets = [150, 10]; // Hedef değerler

    stats.forEach((stat, index) => {
      const target = targets[index] || parseInt(stat.innerText) || 100;
      let count = 0;
      const duration = 2000; // 2 saniye
      const increment = Math.ceil(target / (duration / 16));

      const updateCounter = () => {
        count += increment;
        if (count >= target) {
          stat.innerText = target;
        } else {
          stat.innerText = count;
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  };

  animateStats();
});