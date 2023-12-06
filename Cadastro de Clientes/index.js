document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
  
    console.log('Nome: ' + nome);
    console.log('E-mail: ' + email);
    console.log('Telefone: ' + telefone);
  
    document.getElementById('cadastroForm').reset();
  });
  