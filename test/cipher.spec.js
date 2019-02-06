describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.createCipherWithOffset().encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset().encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () =>{
      assert.equal(cipher.createCipherWithOffset(33).encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () =>{
      assert.equal(cipher.createCipherWithOffset(33).encode("abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "#/0:{}" para "#/0:{}" con offest 33', () =>{
      assert.equal(cipher.createCipherWithOffset(33).encode("#/0:{}"),"#/0:{}");
    });
  });

  describe('cipher.createCipherWithOffset().decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset().decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () =>{
      assert.equal(cipher.createCipherWithOffset(33).decode("HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () =>{
      assert.equal(cipher.createCipherWithOffset(33).decode("hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "#/0:{}" para "#/0:{}" con offest 33', () =>{
      assert.equal(cipher.createCipherWithOffset(33).decode("#/0:{}"),"#/0:{}");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');
      
  });

});
