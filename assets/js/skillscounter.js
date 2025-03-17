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
  
    $.each(skills, function(language, targetPercent) {
      setTimeout(function() {
        $('#progress-' + language).animate(
          { 'width': targetPercent },
          {
            duration: 1000, // 1 second animation
            step: function(now) {
              $(this).css({ 'font-weight': 'bold', 'color': 'yellow' });
              $(this).text(Math.floor(now) + "%");
            },
            complete: function() {
              $(this).css({ 'font-weight': 'bold', 'color': 'yellow' });
              $(this).text(targetPercent);
            }
          }
        );
      }, delay * multiply);
      multiply++;
    });
}