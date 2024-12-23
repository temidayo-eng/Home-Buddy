document.addEventListener("DOMContentLoaded", () => {
    const privacyPolicyCheckbox = document.getElementById("privacyPolicy");
    const termsOfUseCheckbox = document.getElementById("termsOfUse");
    const continueButton = document.getElementById("continueButton");

    // Check if truly the values have been stored in localStorage and then update the checkboxes
    if (localStorage.getItem("privacyPolicyChecked") === "true") {
        privacyPolicyCheckbox.checked = true;
    }
    if (localStorage.getItem("termsOfUseChecked") === "true") {
        termsOfUseCheckbox.checked = true;
    }

    function toggleContinueButton() {
        // To enable or disable the button based on checkbox state whether been checked or not
        continueButton.disabled = !(privacyPolicyCheckbox.checked && termsOfUseCheckbox.checked);
    }

    continueButton.onclick = function () {
        // To check if both checkboxes are checked
        if (privacyPolicyCheckbox.checked && termsOfUseCheckbox.checked) {
            window.location.href = "signUpIn.html"; // Redirect to the desired page
        } else {

            /* then if not then it will show an alert message */
            alert("You must agree to the Privacy Policy and Terms of Use before continuing.");
            return false; /* To prevents any further action */
        }
    };

    // No attach the events listeners to the checkboxes to activate the button state and save to localStorage
    privacyPolicyCheckbox.onchange = () => {
        localStorage.setItem("privacyPolicyChecked", privacyPolicyCheckbox.checked);
        toggleContinueButton();
    };
    termsOfUseCheckbox.onchange = () => {
        localStorage.setItem("termsOfUseChecked", termsOfUseCheckbox.checked);
        toggleContinueButton();
    };

    // Make button state or action to be initialized on page load
    toggleContinueButton();
});
