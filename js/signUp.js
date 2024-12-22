
    // Fetching country data from RestCountries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extracting the relevant data such as: (name and flag)
            const countries = data.map(country => ({
                name: country.name.common,
                flag: country.flags.svg
            }));

            /* arranging the country in alphabetical order */
            countries.sort((a, b) => a.name.localeCompare(b.name));

            // Loading the countries
            renderCountries(countries);
        })
        .catch(error => console.error('Error fetching countries:', error));

    // Function to make countries to load dynamically
    function renderCountries(countries) {
        const countryListContainer = document.querySelector('.countryList');
        let countryHTML = ''; // This is used to store the generated HTML

        countries.forEach((country) => {
            // Creating generated HTML structure for each country
            countryHTML += `
                <div class="countryContainer">
                    <div class="contryIcon">
                        <img src="${country.flag}" alt="${country.name} flag" width="48" height="32" />
                    </div>
                    <div class="countryName">
                        <p>${country.name}</p>
                    </div>
                </div>
            `;
        });

        // To Insert the generated HTML into the container
        countryListContainer.innerHTML = countryHTML;
    }


// this is used to make the DOM to be fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {

        // This is used to make Sign Up button to be interactive
        const signUp = document.getElementById("signUp");
        signUp.onclick = function () {
            window.location.href = "signUp.html"; // Redirect to signUp.html
        };
});

// this is used to make the DOM to be fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {

    // This is used to make Arrow icon to be interactive
    const backArrow = document.getElementById("backArrow");
    backArrow.onclick = function () {
        window.location.href = "signUpIn.html";
    };
});