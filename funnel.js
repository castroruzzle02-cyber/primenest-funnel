/* =========================================================
   PRIMENEST REALTY
   FUNNEL JAVASCRIPT
   GOOGLE SHEETS CONNECTED
   JSONP VERSION
========================================================= */


/* =========================================================
   GOOGLE APPS SCRIPT WEB APP URL
========================================================= */

const API_URL =
    "https://script.google.com/macros/s/AKfycbwtwMHoNsyFgc4nEiYjwj1vznhEjR2Zph6QKCZ0XsT9uzMrHD1fr0kfvdi1Rz2ou_wU/exec";


/* =========================================================
   FUNNEL STATE
========================================================= */

const funnelData = {

    purpose: "",

    location: "",

    budget: "",

    timeline: "",

    name: "",

    email: "",

    phone: ""

};


/* =========================================================
   CURRENT STEP
========================================================= */

let currentStep = 1;

const totalSteps = 5;


/* =========================================================
   ELEMENTS
========================================================= */

const startFunnelButton =
    document.getElementById(
        "startFunnelButton"
    );


const beginQuestionsButton =
    document.getElementById(
        "beginQuestionsButton"
    );


const finalCtaButton =
    document.getElementById(
        "finalCtaButton"
    );


const funnelSection =
    document.getElementById(
        "funnel"
    );


const funnelSteps =
    document.querySelectorAll(
        ".funnel-step"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const progressLabel =
    document.getElementById(
        "progressLabel"
    );


const progressPercent =
    document.getElementById(
        "progressPercent"
    );


const locationInput =
    document.getElementById(
        "locationInput"
    );


const locationNextButton =
    document.getElementById(
        "locationNextButton"
    );


const submitLeadButton =
    document.getElementById(
        "submitLeadButton"
    );


const funnelSuccess =
    document.getElementById(
        "funnelSuccess"
    );


if (
    consultationButton
) {

    consultationButton.addEventListener(

        "click",

        function() {

            window.open(
                "https://calendly.com/honor-enlu/30min",
                "_blank"
            );

        }

    );

}


const laterButton =
    document.getElementById(
        "laterButton"
    );


const nameInput =
    document.getElementById(
        "nameInput"
    );


const emailInput =
    document.getElementById(
        "emailInput"
    );


const phoneInput =
    document.getElementById(
        "phoneInput"
    );


/* =========================================================
   SCROLL TO FUNNEL
========================================================= */

function scrollToFunnel() {

    if (!funnelSection) {

        return;

    }


    funnelSection.scrollIntoView({

        behavior:
            "smooth",

        block:
            "start"

    });

}


/* =========================================================
   SHOW STEP
========================================================= */

function showStep(
    stepNumber
) {

    if (
        stepNumber < 1 ||
        stepNumber > totalSteps
    ) {

        return;

    }


    currentStep =
        stepNumber;


    funnelSteps.forEach(
        function(step) {

            const stepValue =
                Number(
                    step.dataset.step
                );


            step.classList.toggle(

                "active",

                stepValue ===
                currentStep

            );

        }
    );


    updateProgress();


    scrollToFunnel();

}


/* =========================================================
   UPDATE PROGRESS
========================================================= */

function updateProgress() {

    const percentage =
        currentStep * 20;


    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

    }


    if (progressLabel) {

        progressLabel.textContent =
            "Step " +
            currentStep +
            " of " +
            totalSteps;

    }


    if (progressPercent) {

        progressPercent.textContent =
            percentage +
            "%";

    }

}


/* =========================================================
   START FUNNEL
========================================================= */

function startFunnel() {

    showStep(1);

}


/* =========================================================
   HERO CTA
========================================================= */

if (
    startFunnelButton
) {

    startFunnelButton.addEventListener(

        "click",

        function() {

            startFunnel();

        }

    );

}


/* =========================================================
   QUALIFICATION CTA
========================================================= */

if (
    beginQuestionsButton
) {

    beginQuestionsButton.addEventListener(

        "click",

        function() {

            startFunnel();

        }

    );

}


/* =========================================================
   FINAL CTA
========================================================= */

if (
    finalCtaButton
) {

    finalCtaButton.addEventListener(

        "click",

        function() {

            startFunnel();

        }

    );

}


/* =========================================================
   PURPOSE OPTIONS
========================================================= */

const purposeOptions =
    document.querySelectorAll(
        ".funnel-option"
    );


purposeOptions.forEach(

    function(button) {

        button.addEventListener(

            "click",

            function() {

                const purpose =
                    button.dataset.purpose;


                funnelData.purpose =
                    purpose || "";


                purposeOptions.forEach(

                    function(option) {

                        option.style.borderColor =
                            "";

                        option.style.background =
                            "";

                    }

                );


                button.style.borderColor =
                    "var(--blue)";


                button.style.background =
                    "var(--blue-light)";


                setTimeout(

                    function() {

                        showStep(2);

                    },

                    180

                );

            }

        );

    }

);


/* =========================================================
   LOCATION
========================================================= */

if (
    locationNextButton
) {

    locationNextButton.addEventListener(

        "click",

        function() {

            const location =
                locationInput
                    ? locationInput.value.trim()
                    : "";


            if (!location) {

                showInputError(

                    locationInput,

                    "Please enter your preferred location."

                );

                return;

            }


            funnelData.location =
                location;


            showStep(3);

        }

    );

}


/* =========================================================
   LOCATION ENTER KEY
========================================================= */

if (
    locationInput
) {

    locationInput.addEventListener(

        "keydown",

        function(event) {

            if (
                event.key ===
                "Enter"
            ) {

                event.preventDefault();


                if (
                    locationNextButton
                ) {

                    locationNextButton.click();

                }

            }

        }

    );

}


/* =========================================================
   BUDGET OPTIONS
========================================================= */

const budgetOptions =
    document.querySelectorAll(
        ".budget-option"
    );


budgetOptions.forEach(

    function(button) {

        button.addEventListener(

            "click",

            function() {

                const budget =
                    button.dataset.budget;


                funnelData.budget =
                    budget || "";


                budgetOptions.forEach(

                    function(option) {

                        option.style.borderColor =
                            "";

                        option.style.background =
                            "";

                    }

                );


                button.style.borderColor =
                    "var(--blue)";


                button.style.background =
                    "var(--blue-light)";


                setTimeout(

                    function() {

                        showStep(4);

                    },

                    180

                );

            }

        );

    }

);


/* =========================================================
   TIMELINE OPTIONS
========================================================= */

const timelineOptions =
    document.querySelectorAll(
        ".timeline-option"
    );


timelineOptions.forEach(

    function(button) {

        button.addEventListener(

            "click",

            function() {

                const timeline =
                    button.dataset.timeline;


                funnelData.timeline =
                    timeline || "";


                timelineOptions.forEach(

                    function(option) {

                        option.style.borderColor =
                            "";

                        option.style.background =
                            "";

                    }

                );


                button.style.borderColor =
                    "var(--blue)";


                button.style.background =
                    "var(--blue-light)";


                setTimeout(

                    function() {

                        showStep(5);

                    },

                    180

                );

            }

        );

    }

);


/* =========================================================
   INPUT ERROR
========================================================= */

function showInputError(
    input,
    message
) {

    if (!input) {

        return;

    }


    input.focus();


    input.style.borderColor =
        "#e34b4b";


    input.setAttribute(
        "aria-invalid",
        "true"
    );


    const previous =
        input.parentElement
            ? input.parentElement
                .querySelector(
                    ".input-error"
                )
            : null;


    if (previous) {

        previous.remove();

    }


    const error =
        document.createElement(
            "small"
        );


    error.className =
        "input-error";


    error.textContent =
        message;


    error.style.display =
        "block";


    error.style.marginTop =
        "7px";


    error.style.color =
        "#e34b4b";


    error.style.fontSize =
        "11px";


    if (
        input.parentElement
    ) {

        input.parentElement.appendChild(
            error
        );

    }

}


/* =========================================================
   CLEAR INPUT ERROR
========================================================= */

function clearInputError(
    input
) {

    if (!input) {

        return;

    }


    input.style.borderColor =
        "";


    input.removeAttribute(
        "aria-invalid"
    );


    const error =
        input.parentElement
            ? input.parentElement
                .querySelector(
                    ".input-error"
                )
            : null;


    if (error) {

        error.remove();

    }

}


/* =========================================================
   INPUT LISTENERS
========================================================= */

[
    locationInput,
    nameInput,
    emailInput,
    phoneInput

].forEach(

    function(input) {

        if (!input) {

            return;

        }


        input.addEventListener(

            "input",

            function() {

                clearInputError(
                    input
                );

            }

        );

    }

);


/* =========================================================
   VALIDATE CONTACT FORM
========================================================= */

function validateContactForm() {

    const name =
        nameInput
            ? nameInput.value.trim()
            : "";


    const email =
        emailInput
            ? emailInput.value.trim()
            : "";


    const phone =
        phoneInput
            ? phoneInput.value.trim()
            : "";


    if (!name) {

        showInputError(

            nameInput,

            "Please enter your full name."

        );

        return false;

    }


    if (!email) {

        showInputError(

            emailInput,

            "Please enter your email address."

        );

        return false;

    }


    if (
        !isValidEmail(
            email
        )
    ) {

        showInputError(

            emailInput,

            "Please enter a valid email address."

        );

        return false;

    }


    if (!phone) {

        showInputError(

            phoneInput,

            "Please enter your mobile number."

        );

        return false;

    }


    if (
        phone.length < 7
    ) {

        showInputError(

            phoneInput,

            "Please enter a valid mobile number."

        );

        return false;

    }


    funnelData.name =
        name;


    funnelData.email =
        email;


    funnelData.phone =
        phone;


    return true;

}


/* =========================================================
   EMAIL VALIDATION
========================================================= */

function isValidEmail(
    email
) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return pattern.test(
        email
    );

}


/* =========================================================
   SUBMIT TO GOOGLE SHEETS
   JSONP
========================================================= */

function submitLeadToGoogleSheets() {

    return new Promise(

        function(
            resolve,
            reject
        ) {

            const callbackName =
                "primeNestLeadCallback_" +
                Date.now();


            const script =
                document.createElement(
                    "script"
                );


            const params =
                new URLSearchParams({

                    action:
                        "submitLead",

                    callback:
                        callbackName,

                    name:
                        funnelData.name,

                    email:
                        funnelData.email,

                    phone:
                        funnelData.phone,

                    purpose:
                        funnelData.purpose,

                    location:
                        funnelData.location,

                    budget:
                        funnelData.budget,

                    property:
                        "",

                    timeline:
                        funnelData.timeline

                });


            const timeout =
                setTimeout(

                    function() {

                        cleanup();


                        reject(

                            new Error(
                                "Request timed out."
                            )

                        );

                    },

                    15000

                );


            function cleanup() {

                clearTimeout(
                    timeout
                );


                if (
                    script.parentNode
                ) {

                    script.parentNode.removeChild(
                        script
                    );

                }


                try {

                    delete window[
                        callbackName
                    ];

                }

                catch (error) {

                    window[
                        callbackName
                    ] = undefined;

                }

            }


            window[
                callbackName
            ] = function(result) {

                cleanup();


                if (
                    result &&
                    result.success === true
                ) {

                    resolve(
                        result
                    );

                    return;

                }


                reject(

                    new Error(

                        result &&
                        result.message

                            ? result.message

                            : "Unable to save lead."

                    )

                );

            };


            script.src =
                API_URL +
                "?" +
                params.toString();


            script.onerror =
                function() {

                    cleanup();


                    reject(

                        new Error(

                            "Unable to connect to PrimeNest server."

                        )

                    );

                };


            document.body.appendChild(
                script
            );

        }

    );

}


/* =========================================================
   SUBMIT BUTTON
========================================================= */

if (
    submitLeadButton
) {

    submitLeadButton.addEventListener(

        "click",

        async function() {

            if (
                !validateContactForm()
            ) {

                return;

            }


            submitLeadButton.disabled =
                true;


            submitLeadButton.textContent =
                "Submitting...";

try {

    await submitLeadToGoogleSheets();

    window.location.href = "thank-you.html";

}

            catch (error) {

                console.error(

                    "Lead submission error:",

                    error

                );


                submitLeadButton.disabled =
                    false;


                submitLeadButton.textContent =
                    "Show Me My Matches →";


                alert(

                    "We couldn't submit your request right now. Please try again."

                );

            }

        }

    );

}


/* =========================================================
   SHOW SUCCESS
========================================================= */

function showSuccess() {

    funnelSteps.forEach(

        function(step) {

            step.classList.remove(
                "active"
            );

        }

    );


    if (
        funnelSuccess
    ) {

        funnelSuccess.classList.add(
            "active"
        );

    }


    if (
        progressBar
    ) {

        progressBar.style.width =
            "100%";

    }


    if (
        progressLabel
    ) {

        progressLabel.textContent =
            "Complete";

    }


    if (
        progressPercent
    ) {

        progressPercent.textContent =
            "100%";

    }


    if (
        submitLeadButton
    ) {

        submitLeadButton.disabled =
            false;


        submitLeadButton.textContent =
            "Show Me My Matches →";

    }


    scrollToFunnel();

}


/* =========================================================
   CONSULTATION BUTTON
========================================================= */

if (
    consultationButton
) {

    consultationButton.addEventListener(

        "click",

        function() {

            alert(

                "Consultation booking will be connected here."

            );

        }

    );

}


/* =========================================================
   I'LL DO THIS LATER
========================================================= */

if (
    laterButton
) {

    laterButton.addEventListener(

        "click",

        function() {

            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        }

    );

}


/* =========================================================
   INITIALIZE
========================================================= */

showStep(1);
