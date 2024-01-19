let senha = document.getElementById("senha");

function gerarSenha() {
    //caracteristicas da senha
    let caracteres = "0123456789abcdfghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let senha = "";
    let tamanhoSenha = 10;

    //randomizar a senha
    for (let i = 0; i < tamanhoSenha; i++) {
      let ramdomN = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.substring(ramdomN, ramdomN + 1);
    }

    //valor do input
    document.getElementById("senha").value = senha; 
}

function copiarSenha() {
    let copiarTexto = document.getElementById("senha");
    copiarTexto.select();
  }




//function gerarSenha() {
//    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
//    var senha = '';
//    for (var i = 0; i < tamanho; i++) {
//        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
 //   }
//    document.getElementById("resultSenha").value = senha;

//}



