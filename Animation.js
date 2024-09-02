function startAnimation() {
    const animatedBox = document.getElementById('animatedBox');
  
    // Toggle a class to trigger the animation
    animatedBox.classList.toggle('animate');
  
    // Listen for the end of the animation and remove the class
    animatedBox.addEventListener('transitionend', () => {
      animatedBox.classList.remove('animate');
    });
  }
  