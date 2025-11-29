
//Call event listener to load the functions on page load
document.addEventListener("DOMContentLoaded", function () {
    // Greeting function
    function showGreeting() {
        const geetingElement = document.getElementById('greeting-message');
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            geetingElement.textContent = "Good Morning!!";
        } else if (currentHour < 18) {
            geetingElement.textContent = "Good Afternoon!!";
        } else {
            geetingElement.textContent = "Good Evening!!";
        }
    }
    // call the function to make the greeting appears
    showGreeting();

    //other functions to added here
    //list of skills (items)
    let mySkills = ["HTML", "CSS", "JavaScript", "PHP"];
    const listbtn = document.getElementById("list-button");
    const skillsListElement = document.getElementById("my-list");

    listbtn.addEventListener("click", function () {
        // populate the skill array to the list element
        // delete all old data
        skillsListElement.innerHTML = '';
        // var skill = mySkills[0];
        // skillsListElement.innerHTML = '<li>' + skill + '<li>';

        for (let i = 0; i < mySkills.length; i++) {
            // Getting the list item from the array
            var skill = mySkills[i];

            //create new html element <li> element
            const li = document.createElement('li');
            li.textContent = skill;
            //li.classList.add("skills");
            // Add li to the <ul> on the html page
            skillsListElement.appendChild(li);
        }
    });

    // --- CALCULATOR ---

    //Getting the needed elements
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultElement = document.getElementById("calc-result");

    // main function for the calculator with an argument
    function calculator(operation) {
        // make sure to parse the value to a digit
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        let result;

        if (operation === '+') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 * num2;
        } else if (operation === '/') {
            if (num2 === 0) {
                result = 'Connot divide by zero!';
            } else {
                result = num1 / num2;
            }
        }

        resultElement.textContent = result;
    }

    document.getElementById("calc-add").addEventListener('click', function () {
        calculator('+');
    });

    document.getElementById("calc-subtract").addEventListener('click', function () {
        calculator('-');
    });

    document.getElementById("calc-multiply").addEventListener('click', function () {
        calculator('*');
    });

    document.getElementById("calc-divide").addEventListener('click', function () {
        calculator('/');
    });

    // --- FORM ---
    const contactForm = document.getElementById("contact-form");
    const outputElement = document.getElementById("form-output");

    contactForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const name = document.getElementById("user-name").value;
        const email = document.getElementById("user-email").value;
        const message = document.getElementById("user-message").value;

        // Data object
        const formData = {
            UserName: name,
            UserEmail: email,
            UserMessage: message
        };

        // 1st method using stringify 
        outputElement.textContent = JSON.stringify(formData);

        //2nd method using console
        console.log("UserName is: " + name + ", email is: "+ email);

        // 3rd method using alert
        //alert("UserName is: " + name + "\n Email is: "+ email);



    });
    


});