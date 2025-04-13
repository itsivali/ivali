function skillsProgress() {
  var skills = {
    "terraform": "85%",
    "python": "90%",
    "go": "80%",
    "docker": "75%",
    "kubernetes": "70%",
    "flutter": "80%"
  };

  var multiply = 2;
  var delay = 600;

  $.each(skills, function (language, targetPercent) {
    setTimeout(function () {
      $('#progress-' + language).animate(
        { 'width': targetPercent },
        {
          duration: 400,// 400 miliseconds
          step: function (now) {
            $(this).text(Math.floor(now) + "%");
          },
          complete: function () {
            $(this).text(targetPercent);
          }
        }
      );
    }, delay * multiply);
    multiply++;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const skillsSection = document.querySelector('#about');
  const progressBars = document.querySelectorAll('.progressbar');

  // Function to reset animations
  function resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = null;
  }

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll
  function handleScroll() {
    if (isInViewport(skillsSection)) {
      progressBars.forEach(bar => {
        resetAnimation(bar);
        bar.style.animationPlayState = 'running';
      });
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  // Initial check
  handleScroll();
});