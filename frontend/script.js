const lengthInput = document.getElementById("passwordLength");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const passwordResult = document.getElementById("passwordResult");
const message = document.getElementById("message");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const allCharacters = lowercase + uppercase + numbers + symbols;
const defaultText = "Your password will appear here";

function getRandomCharacter(characters) {
    const index = Math.floor(Math.random() * characters.length);
    return characters[index];
}

function generatePassword(length) {
    let password = "";

    for (let i = 0; i < length; i += 1) {
        password += getRandomCharacter(allCharacters);
    }

    return password;
}

generateButton.addEventListener("click", () => {
    const length = Number(lengthInput.value);

    if (!Number.isInteger(length) || length < 1) {
        message.textContent = "Please enter a password length of at least 1.";
        return;
    }

    if (length > 64) {
        message.textContent = "Please choose a length of 64 or less.";
        return;
    }

    passwordResult.textContent = generatePassword(length);
    message.textContent = "Password generated successfully.";
});

copyButton.addEventListener("click", async () => {
    const password = passwordResult.textContent;

    if (!password || password === defaultText) {
        message.textContent = "Generate a password first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(password);
        message.textContent = "Password copied to clipboard.";
    } catch (error) {
        message.textContent = "Copy failed. Select the password and copy it manually.";
    }
});
