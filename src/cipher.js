document.querySelector('#btn-cipher').addEventListener('click', () => buttonSelect('cipher'));
document.querySelector('#btn-decipher').addEventListener('click', () => buttonSelect('decipher'));

function hasOffset() {
  const offset = parseInt(document.getElementById('offset').value);
  if (isNaN(offset)) {
    document.getElementById('offset').value = '';
    document.getElementById('offset').placeholder = 'Por favor digite um número';
    document.getElementById('offset').focus();
    return false;
  }
  return offset;
}

function buttonSelect(btnClicked) {
  const offset = hasOffset();
  const str = document.getElementById(btnClicked).value;
  document.getElementById(btnClicked).value = '';

  if (btnClicked === 'cipher') {
    const result = encode(offset, str);
    document.getElementById('decipher').value = result;
  } else {
    const result = encode(-offset, str);
    document.getElementById('cipher').value = result;
  }
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function encode(offset, str) {
  let encrypted = '';

  for (let indice = 0; indice < str.length; indice++) {
    const code = str.charCodeAt([indice]);
    const newCode = mod((code - 32) + offset, 224) + 32;
    const newLetter = String.fromCharCode(newCode);
    encrypted += newLetter;
  }
  return encrypted;
}