function mostrarNome() {

    var nome = document.getElementById('nome').value;
    var nascimento = document.getElementById('nascimento').value;
    ano = new Date().getFullYear();
    realidade = ano - nascimento
    document.getElementById('resultado').textContent = "Olá, " + nome + " você tem " + realidade  +" anos!";
    
}