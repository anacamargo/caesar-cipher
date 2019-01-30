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
    const result = decode(offset, str);
    document.getElementById("cipher").value = result;
}

function encode(offset, str) {
    let encrypted = "";
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt([i]);
        //const newCode = ((code - 32) + offset) % 95 + 32;
        const newCode = mod((code - 32) + offset, 224) + 32;
        const newLetter = String.fromCharCode(newCode);
        encrypted += newLetter;
    }
    return encrypted;
}

function decode(offset, str) {
    let decrypted = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt([i]);
        const newCode = mod((code - 32) - offset, 224) + 32;
        let newLetter = String.fromCharCode(newCode);
        decrypted += newLetter;
    }

    return decrypted;
}