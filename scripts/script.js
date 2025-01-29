document.addEventListener("DOMContentLoaded", () => {
    const passwordLengthInput = document.querySelector(".passLenght input");
    const uppercaseCheckbox = document.querySelector(".upper input");
    const symbolsCheckbox = document.querySelector(".symb input");
    const numbersCheckbox = document.querySelector(".numbers input");
    const generateBtn = document.querySelector(".generateBtn");
    const readyPassDiv = document.querySelector(".readyPass");

    function generatePassword(length = 12, options = { numbers: true, symbols: true, uppercase: true }) {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    
        let allChars = lowercaseChars;
        if (options.uppercase) allChars += uppercaseChars;
        if (options.numbers) allChars += numberChars;
        if (options.symbols) allChars += symbolChars;
    
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        return password;
    }

    generateBtn.addEventListener("click", () => {
        const length = parseInt(passwordLengthInput.value) || 12;
        const options = {
            uppercase: uppercaseCheckbox.checked,
            symbols: symbolsCheckbox.checked,
            numbers: numbersCheckbox.checked
        };

        const newPassword = generatePassword(length, options);
        readyPassDiv.textContent = newPassword;
        readyPassDiv.style.backgroundColor = "#D3D3D3";
        readyPassDiv.style.padding = "10px";
        readyPassDiv.style.borderRadius = "10px";
        readyPassDiv.style.textAlign = "center";
        readyPassDiv.style.fontSize = "20px";
        readyPassDiv.style.fontWeight = "bold";
    });
});
