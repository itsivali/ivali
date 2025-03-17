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

    $.each(skills, function(language, targetPercent) {
        var delay = 600;
        setTimeout(function() {
            // Animate the progress bar dynamically, updating its text so the percentage appears on top
            $('#progress-' + language).animate(
                { 'width': targetPercent },
                {
                    duration: 600,
                    step: function(now) {
                        $(this).text(Math.floor(now) + "%");
                    },
                    complete: function() {
                        $(this).text(targetPercent);
                    }
                }
            );
        }, delay * multiply);
        multiply++;
    });
}

if ($(window).scrollTop() >= $("#about").offset().top - 200) {
    skillsProgress();
}

$(window).on("scroll", function() {
    if ($(window).scrollTop() >= $("#about").offset().top - 200) {
        skillsProgress();
    }
});