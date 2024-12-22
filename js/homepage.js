
// Getting the current page's file name, then split is used to extract the path into an array, then pop is used to removes and returns the last element from the array.
const currentPage = window.location.pathname.split("/").pop();

// Redirecting logic based on the current page by using switch statement
switch (currentPage) {
    case "index.html": // if the Initial page is this then......
        setTimeout(function() {
            window.location.href = "splash.html";
        }, 1800); // Redirect to splash page after 1.8 seconds
        break;

    case "splash.html": // if the Initial page is this then......
        setTimeout(function() {
            window.location.href = "privacy-terms.html";
        }, 500); // Redirect to privacy-terms page after 0.5 seconds
        break;
}