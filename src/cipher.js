window.cipher={

  
  encode: (str,offset) => {

        let enterText = '';
        let i;
          
        // Se hace un for para iterar la palabra ingresada para codificar caracter por caracter
          for(i = 0; i <= str.length; i++) {
            
            //Combierte el caracter a unicode y lo compara para evaluar si es un caracter especial
            if(str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 64) {
              
              //Si es un caracter especial lo guarda como tal en enterText
              let transfor = (str.charCodeAt(i));
              //vuelve a tranformar el caracter unicode a letra
              let workEncryp = String.fromCharCode(transfor);
              enterText +=  workEncryp;
            } else {

                //Evalua si el caracter esta dentro del alfabeto en minusculas
                if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 ) {
                  
                  //Si esta dentro del alfabeto en minusculas tranformarma el caracter en unicode y lo usa junto con la formula para el desplazamiento 
                  let transfor = ((str.charCodeAt(i) - 97 + offset) % 26) + 97;
                  //vuelve a tranformar el caracter unicode a letra
                  let workEncryp = String.fromCharCode(transfor);
                  //va almacenando el caracter en enterText una vez hecho el desplazamiento
                  enterText += workEncryp;
  
                } else {

                  //En dado caso de que no esta dentro del alfabeto en minusculas compara si se encuentra en el alfabeto en mayusculas
                  if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 ) {
  
                    //Si esta en el alfabeto en mayusculas lo transforma en caracter unicode y lo usa junto a la formula de desplazamiento 
                    let transfor = ((str.charCodeAt(i) - 65 + offset) % 26) + 65;
                    //vuelve a tranformar el caracter unicode a letra
                    let workEncryp = String.fromCharCode(transfor);
                    //almacena el caracter en enterText una vez realizado el desplazamiento
                    enterText += workEncryp;
                  }
                }
            }

            //Verifica si el caracter es un caracter especial y lo almacena como tal en enterText
            if(str.charCodeAt(i) >= 91 && str.charCodeAt(i) <= 96){

              let transfor = (str.charCodeAt(i));
              //vuelve a tranformar el caracter unicode a letra
              let workEncryp = String.fromCharCode(transfor);
              enterText +=  workEncryp;
            }

            //Verifica si el caracter es un caracter especial y lo almacena como tal en enterText
            if(str.charCodeAt(i) >= 123 && str.charCodeAt(i) <= 126){

              let transfor = (str.charCodeAt(i));
              //vuelve a tranformar el caracter unicode a letra
              let workEncryp = String.fromCharCode(transfor);
              enterText +=  workEncryp;
            }
          }
      return enterText;
    },
  
  
   decode: (decod,offset) => {
  
      let enterText2 = '';
        let i;

          //Se hace un cliclo for para ir interando la palabra (caracter por caracter) que se desea descifrar  
          for(i = 0; i < decod.length; i++) {

             //Combierte el caracter a unicode y lo compara para evaluar si es un caracter especial
            if(decod.charCodeAt(i) >= 32 && decod.charCodeAt(i) <= 64) {
              
              // si el caracter resultar ser un signo especial lo pasa tal cual y lo guarda en enterText2
              let transfor2 = (decod.charCodeAt(i));
              //vuelve a tranformar el caracter unicode a letra
              let workEncryp2 = String.fromCharCode(transfor2);
              enterText2 +=  workEncryp2;
            } else {

                //Evalua si el caracter esta dentro del alfabeto en minusculas
                if(decod.charCodeAt(i) >= 97 && decod.charCodeAt(i) <= 122) {
                     //Si esta en el alfabeto en minusculas lo transforma en caracter unicode y lo usa junto a la formula de desplazamiento
                    let transfor2 = ((decod.charCodeAt(i)- 122 - offset) % 26)+ 122;
                    //vuelve a tranformar el caracter unicode a letra
                    let workEncryp2 = String.fromCharCode(transfor2);
                    //cuando haya realizado el desplazamiento guarda el caracter en enterText2
                    enterText2 += workEncryp2;
                } else {

                    //Evalua si el caracter esta dentro del alfabeto en mayusculas
                    if(decod.charCodeAt(i) >= 65 && decod.charCodeAt(i) <= 90) {
                     //Si esta en el alfabeto en mayusculas lo transforma en caracter unicode y lo usa junto a la formula de desplazamiento
                    let transfor2 = ((decod.charCodeAt(i)- 90 - offset) % 26)+ 90;
                    //vuelve a tranformar el caracter unicode a letra
                    let workEncryp2 = String.fromCharCode(transfor2);
                    //cuando haya realizado el desplzamiento guarda el caracter en enterText2
                    enterText2 += workEncryp2;
                  }
              }
            }
            //Verifica si el caracter es un caracter especial y lo almacena como tal en enterText2
            if(decod.charCodeAt(i) >= 91 && decod.charCodeAt(i) <= 96) {
  
              let transfor2 = (decod.charCodeAt(i));
              //vuelve a tranformar el caracter unicode a letra
              let workEncryp2 = String.fromCharCode(transfor2);
              enterText2 +=  workEncryp2;
            }
             //Verifica si el caracter es un caracter especial y lo almacena como tal en enterText2
            if(decod.charCodeAt(i) >= 123 && decod.charCodeAt(i) <= 126) {
  
              let transfor2 = (decod.charCodeAt(i));
              //vuelve a tranformar el caracter unicode a letra
              let workEncryp2 = String.fromCharCode(transfor2);
              enterText2 +=  workEncryp2;
            }
          }
        return enterText2;
    }
};