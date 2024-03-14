
  

  $(document).ready(function(){
              // Function to toggle dark mode
    function toggleDarkMode() {
      $("body").toggleClass("dark");
      $("a").toggleClass("text-dark");
      $("i").toggleClass("text-dark");
      $("hr").toggleClass("underline1");
      // Check if body has class 'dark'
      if ($("body").hasClass("dark")) {
        $(".imgSrc").attr('src', 'images/sun.png');
        $(".logo-img").attr('src', 'images/dark-logo.png');
        console.log("Dark mode is enabled.");
                        // Save dark mode to local storage
        localStorage.setItem('darkModeEnabled', 'true');
      } else {
        $(".imgSrc").attr('src', 'images/moon.png');
        $(".logo-img").attr('src', 'images/Logo.svg');
        console.log("Dark mode is disabled.");
                           // Save light mode preference to local storage
        localStorage.setItem('darkModeEnabled', 'false');
      }
    }
  
    // Function to check dark mode preference from local storage
    function checkDarkModePreference() {
      var darkModeEnabled = localStorage.getItem('darkModeEnabled');
      if (darkModeEnabled === 'true') {
        toggleDarkMode();
      }
    }
  
    // Check dark mode preference when page is loaded
    checkDarkModePreference();
  
    // Toggle dark mode when button is clicked
    $("#themeToggler").on("click", toggleDarkMode);
  });
  

