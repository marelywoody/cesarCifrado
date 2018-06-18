//Guardamos en variables lo que se introduzca en los input text
let str1 = document.getElementById('str');
let decod1 = document.getElementById('decod');
let offset1 = document.getElementById('offset');

//cuando demos clic al boton de encriptar se mandaran la informacion obtenida a cipher.encode y este hara el desplazamiento
//retornando la palabra encriptada
const encode1 = () => {
  
      let str = str1.value;
      let offset = parseInt(offset1.value);
      document.getElementById('decod').value=cipher.encode(str,offset);
};

//Cuando se de clic al boton de descencriptar se mandara la informacion obtenida a cipher.decode y este hara el desplazamiento para la descencriptacion
//retornando la palabra descencriptada
const decode1 = () => {

      let decod=decod1.value;
      let offset = parseInt(offset1.value);
      document.getElementById('str').value = cipher.decode(decod,offset);
};

//cuando se de clic al boton de borrar se borrara todo el contenido de los input text
const borrar = () => {

      document.getElementById('decod').value = ' ';
      document.getElementById('offset').value = 0;
      document.getElementById('str').value = ' ';

};