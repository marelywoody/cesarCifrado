let str1 = document.getElementById('str');
let decod1 = document.getElementById('decod');
let offset1 = document.getElementById('offset');

const encode1 = () => {
  
      let str = str1.value;
      let offset = parseInt(offset1.value);
      document.getElementById('decod').value=cipher.encode(str,offset);
};

const decode1 = () => {

      let decod=decod1.value;
      let offset = parseInt(offset1.value);
      document.getElementById('str').value = cipher.decode(decod,offset);
};

const borrar = () => {

      document.getElementById('decod').value = ' ';
      document.getElementById('offset').value = 0;
      document.getElementById('str').value = ' ';

};