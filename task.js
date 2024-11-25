function rotateText(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;
  
    function changeCase() {
      cases[activeIndex].classList.remove('rotator__case_active');
      activeIndex = (activeIndex + 1) % cases.length;
      cases[activeIndex].classList.add('rotator__case_active');
  
      // Apply data-color
      const color = cases[activeIndex].dataset.color;
      cases[activeIndex].style.color = color;
    }
  
    const speed = parseInt(cases[activeIndex].dataset.speed, 10) || 1000; // Default speed is 1000ms
    setInterval(changeCase, speed);
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
    rotators.forEach(rotateText);
  });