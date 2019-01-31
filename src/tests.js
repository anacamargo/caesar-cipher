function testEncodeLetterAlphabet() {
   const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   const strEncode = encode(2, str);
   const alphabetEncode = "CDEFGHIJKLMNOPQRSTUVWXYZABcdefghijklmnopqrstuvwxyzab";
   let result = [];
   for (i = 0; i < alphabetEncode.length; i++) {
      if ((strEncode[i]) === alphabetEncode[i]) {
         result.push(`${strEncode[i]} - OK`);
      } else result.push(`${strEncode[i]} Não funcionou!`);
   }
   return result;
}

function testDecodeLetterAlphabet() {
   const str = "CDEFGHIJKLMNOPQRSTUVWXYZABcdefghijklmnopqrstuvwxyzab";
   const strDecode = decode(2, str);
   const alphabetDecode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   let result = [];
   for (i = 0; i < alphabetDecode.length; i++) {
      if ((strDecode[i]) === alphabetDecode[i]) {
         result.push(`${strDecode[i]} - OK`);
      } else result.push(`${strDecode[i]} Não funcionou!`);
   }
   return result;
}

function testOffset() {
   const result = [];
   const keys = [-1, 0, 1, 10, 26, 100, 1000, 10000];
   const str = 'zZzzz';
   for (i = 0; i < keys.length; i++) {
      let strEncode = encode(keys[i], str);
      let strDecode = decode(keys[i], strEncode);
      if (str === strDecode) {
         result.push(`${str} = ${strDecode}`)
      } else result.push(`não funcionou`);
   }
   return result;
}

console.log(testEncodeLetterAlphabet());
console.log(testDecodeLetterAlphabet());
console.log(testOffset());

