window.cipher = {
  createCipherWithOffset: (offset) => {
    const encodeDecode = {
      encode: (word) => {
        let formulaTransform;
        let wordTransformed = '';
        let codeToChar;
        for (let i = 0; i < word.length; i++) {
          if ((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) {
            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
              formulaTransform = (((word.charCodeAt(i) - 65 + offset) % 26) + 65);
            } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
              formulaTransform = (((word.charCodeAt(i) - 97 + offset) % 26) + 97);
            }
            codeToChar = String.fromCharCode(formulaTransform);
            wordTransformed += codeToChar;
          } else {
            wordTransformed += word[i];
          }
        }
        return wordTransformed;
      },
      decode: (word) => {
        let formulaTransform;
        let wordTransformed = '';
        let codeToChar;
        for (let i = 0; i < word.length; i++) {
          if ((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) {
            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
              formulaTransform = (((word.charCodeAt(i) - 90 - offset) % 26) + 90);
            } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
              formulaTransform = (((word.charCodeAt(i) - 122 - offset) % 26) + 122);
            }
            codeToChar = String.fromCharCode(formulaTransform);
            wordTransformed += codeToChar;
          } else {
            wordTransformed += word[i];
          }
        }
        return wordTransformed;
      }
    };
    return encodeDecode;
  }
};