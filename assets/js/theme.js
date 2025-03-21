$(function () {
    // Function to set the theme by updating the "skins" stylesheet link.
    function setTheme(theme) {
        $("link[href*='skins']").attr("href", "assets/css/main/skins/" + theme + "_color.css");
    }

    // Set the default theme (red) on page load.
    setTheme('default');

    // Handle clicks on theme color options.
    $('.list-color li span').on('click', function () {
        var theme = $(this).data('color');
        // Update active class for visual feedback.
        $('.list-color li span').removeClass('active');
        $(this).addClass('active');
        // Change the theme.
        setTheme(theme);
    });

    // Optional: Handle the menu style change if needed.
    $('.list-change-menu li span').on('click', function () {
        var menuStyle = $(this).text().trim().toLowerCase(); // either 'overlay' or 'right'
        $('.list-change-menu li span').removeClass('active');
        $(this).addClass('active');
        // Update body class for our menu style logic.
        if (menuStyle === 'overlay') {
            $('body').removeClass('menu-right').addClass('menu-overlay');
        } else if (menuStyle === 'right') {
            $('body').removeClass('menu-overlay').addClass('menu-right');
        }
    });
});