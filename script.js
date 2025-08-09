let userInput = document.getElementById("date");
let result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);

    if (userInput.value === "") {
        result.innerHTML = "Please select your date of birth.";
        return;
    }

    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}
