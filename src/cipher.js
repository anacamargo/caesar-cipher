// O módulo no javaScriptv funciona como o resto da divisão e não como módulo.
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers

function mod(n, m) {
    return ((n % m) + m) % m;
}

function cipherClick() {
    const offset = parseInt(document.getElementById("offset").value);
    if (isNaN(offset)) {
        return message = document.getElementById("offset").value = "Por favor digite um número";
    }
    const str = document.getElementById("cipher").value;
    document.getElementById("cipher").value = "";
    const result = encode(offset, str);
    document.getElementById("decipher").value = result;
}

function decipherClick() {
    const offset = parseInt(document.getElementById("offset").value);
    if (isNaN(offset)) {
        return message = document.getElementById("offset").value = "Por favor digite um número";
    }
    const str = document.getElementById("decipher").value;
    document.getElementById("decipher").value = "";
    const result = decode(offset, str);
    document.getElementById("cipher").value = result;
}

function encode(offset, str) {
    let encrypted = "";
    let newCode;
    let newLetter;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt([i]);
        console.log(code);
        if (code >= 65 && code <= 90) {
            newCode = mod((code - 65) + offset, 25) + 65;
            newLetter = String.fromCharCode(newCode);
        } else if (code >= 97 && code <= 122) {
            newCode = mod((code - 97) + offset, 25) + 97;
            newLetter = String.fromCharCode(newCode);
        } else newLetter = String.fromCharCode(code);
        encrypted += newLetter;
    }
    return encrypted;
}

function decode(offset, str) {
    let decrypted = "";
    let newCode;
    let newLetter;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt([i]);
        console.log(code);
        if (code >= 65 && code <= 90) {
            newCode = mod((code - 65) - offset, 25) + 65;
            newLetter = String.fromCharCode(newCode);
        } else if (code >= 97 && code <= 122) {
            newCode = mod((code - 97) - offset, 25) + 97;
            newLetter = String.fromCharCode(newCode);
        } else newLetter = String.fromCharCode(code);
        decrypted += newLetter;
    }
    return decrypted;
}