function testEncodeLetterAlphabet() {
   const key = 2;
   const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   const strEncode = encode(key, str);
   const alphabetEncode = "CDEFGHIJKLMNOPQRSTUVWXYZABcdefghijklmnopqrstuvwxyzab";
   let result = [];
   for (i = 0; i < alphabetEncode.length; i++) {
      if ((strEncode[i]) === alphabetEncode[i]) {
         result.push({plain:str[i], key, encoded :strEncode[i], expected : alphabetEncode[i], status : "OK" });
      } else result.push({plain:str[i], key, encoded :strEncode[i], expected : alphabetEncode[i], status : "FAILED"});
   }
   return result;
}

function testDecodeLetterAlphabet() {
   const key = 2;
   const str = "CDEFGHIJKLMNOPQRSTUVWXYZABcdefghijklmnopqrstuvwxyzab";
   const strDecode = decode(key, str);
   const alphabetDecode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   let result = [];
   for (i = 0; i < alphabetDecode.length; i++) {
      if ((strDecode[i]) === alphabetDecode[i]) {
         result.push({encoded:str[i], key, decoded :strDecode[i], expected : alphabetDecode[i], status : "OK" });
      } else result.push({encoded:str[i], key, decoded :strDecode[i], expected : alphabetDecode[i], status : "FAILED"});
   }
   return result;
}

function testOffset() {
   const result = [];
   const keys = [-1, 0, 1, 2.1, 10, 26, 100, 1000, 10000, "a"];
   const str = 'zZzzz';

   for (i = 0; i < keys.length; i++) {
      let strEncode = encode(parseInt(keys[i]), str);
      let strDecode = decode(parseInt(keys[i]), strEncode);
      if (str === strDecode) {
         result.push({plain : str, encoded:strEncode, decoded :strDecode, key : keys[i], status : "OK" });
      } else result.push({plain : str, encoded:strEncode, decoded :strDecode, key : keys[i], status : "FAILED" });
   }
   return result;
}

console.log(testEncodeLetterAlphabet());
console.log(testDecodeLetterAlphabet());
console.log(testOffset());

