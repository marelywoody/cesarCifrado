window.cipher={

  encode: (str,offset) => {

      console.log("str", str, "offset", offset);
        let enterText = '';
        let i;
  
          for(i = 0; i <= str.length; i++) {
  
            if(str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 64) {
  
              let transfor = (str.charCodeAt(i));
              let workEncryp = String.fromCharCode(transfor);
              enterText +=  workEncryp;
            } else {
  
                if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 ) {
  
                  let transfor = ((str.charCodeAt(i) - 97 + offset) % 26) + 97;
                  let workEncryp = String.fromCharCode(transfor);
                   enterText += workEncryp;
  
                } else {
  
                  if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 ) {
  
                    let transfor = ((str.charCodeAt(i) - 65 + offset) % 26) + 65;
                    let workEncryp = String.fromCharCode(transfor);
                    enterText += workEncryp;
                  }
                }
            }
            if(str.charCodeAt(i) >= 91 && str.charCodeAt(i) <= 96){

              let transfor = (str.charCodeAt(i));
              let workEncryp = String.fromCharCode(transfor);
              enterText +=  workEncryp;
            }
            if(str.charCodeAt(i) >= 123 && str.charCodeAt(i) <= 126){

              let transfor = (str.charCodeAt(i));
              let workEncryp = String.fromCharCode(transfor);
              enterText +=  workEncryp;
            }
          }
      return enterText;
    },
  
  
   decode: (decod,offset) => {
  
      let enterText2 = '';
        let i;
  
          for(i = 0; i < decod.length; i++) {
  
            if(decod.charCodeAt(i) >= 32 && decod.charCodeAt(i) <= 64) {
  
              let transfor2 = (decod.charCodeAt(i));
              let workEncryp2 = String.fromCharCode(transfor2);
              enterText2 +=  workEncryp2;
            } else {
                if(decod.charCodeAt(i) >= 97 && decod.charCodeAt(i) <= 122) {
  
                    let transfor2 = ((decod.charCodeAt(i)- 122 - offset) % 26)+ 122;
                    let workEncryp2 = String.fromCharCode(transfor2);
                     enterText2 += workEncryp2;
                } else {
  
                    if(decod.charCodeAt(i) >= 65 && decod.charCodeAt(i) <= 90) {
  
                    let transfor2 = ((decod.charCodeAt(i)- 90 - offset) % 26)+ 90;
                    let workEncryp2 = String.fromCharCode(transfor2);
                    enterText2 += workEncryp2;
                  }
              }
            }
            if(decod.charCodeAt(i) >= 91 && decod.charCodeAt(i) <= 96) {
  
              let transfor2 = (decod.charCodeAt(i));
              let workEncryp2 = String.fromCharCode(transfor2);
              enterText2 +=  workEncryp2;
            }
            if(decod.charCodeAt(i) >= 123 && decod.charCodeAt(i) <= 126) {
  
              let transfor2 = (decod.charCodeAt(i));
              let workEncryp2 = String.fromCharCode(transfor2);
              enterText2 +=  workEncryp2;
            }
          }
        return enterText2;
    }
};