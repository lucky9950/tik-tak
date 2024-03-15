
  





  $(document).ready(function(){
    // Check if localStorage is supported
    function isLocalStorageSupported() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        $("body").toggleClass("dark");
        $("a, i, hr").toggleClass("text-dark");
        $("hr").toggleClass("underline1"); // Combine selectors
        // Check if body has class 'dark'
        if ($("body").hasClass("dark")) {
            $(".imgSrc").attr('src', 'images/sun.png');
            $(".logo-img").attr('src', 'images/dark-logo.png');
            console.log("Dark mode is enabled.");
            // Save dark mode to local storage if supported
            if (isLocalStorageSupported()) {
                localStorage.setItem('darkModeEnabled', 'true');
            }
        } else {
            $(".imgSrc").attr('src', 'images/moon.png');
            $(".logo-img").attr('src', 'images/Logo.svg');
            console.log("Dark mode is disabled.");
            // Save light mode preference to local storage if supported
            if (isLocalStorageSupported()) {
                localStorage.setItem('darkModeEnabled', 'false');
            }
        }
    }

    // Function to check dark mode preference from local storage
    function checkDarkModePreference() {
        if (isLocalStorageSupported()) {
            var darkModeEnabled = localStorage.getItem('darkModeEnabled');
            if (darkModeEnabled === 'true') {
                toggleDarkMode();
            }
        }
    }

    // Check dark mode preference when page is loaded
    checkDarkModePreference();

    // Toggle dark mode when button is clicked
    $("#themeToggler").on("click", toggleDarkMode);
});
