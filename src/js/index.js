const offst = document.getElementById('offset');
const wordDecodEncod = document.getElementById('word');
const encodDecod = document.getElementById('encodDecod');
const encod = document.getElementById('encod');
const decod = document.getElementById('decod');
const delet = document.getElementById('delete');
let offset;
let word;

offst.addEventListener('keyup', event => {
  if (offst.value !== '') {
    if (window.event.keyCode === 13) {
      wordDecodEncod.focus();
    }
  }
});

encod.addEventListener('click', event => {
  offset = parseInt(offst.value);
  word = wordDecodEncod.value;
  if (offst.value !== '' && word !== '') {
    encodDecod.value = cipher.createCipherWithOffset(offset).encode(word);
    offst.value = '';
    wordDecodEncod.value = '';
    offst.placeholder = 'Ingrese un número';
    wordDecodEncod.placeholder = 'Palabra a cifrar o descifrar';
  } else {
    alert('Te falto llenar un campo');
  }
});

decod.addEventListener('click', event => {
  offset = parseInt(offst.value);
  word = wordDecodEncod.value;
  if (offst.value !== '' && word !== '') {
    encodDecod.value = cipher.createCipherWithOffset(offset).decode(word);
    offst.value = '';
    wordDecodEncod.value = '';
    offset.placeholder = 'Ingrese un número';
    wordDecodEncod.placeholder = 'Palabra a cifrar o descifrar';
  } else {
    alert('Te falto llenar un campo');
  }
});

delet.addEventListener('click', event => {
  encodDecod.value = '';
});