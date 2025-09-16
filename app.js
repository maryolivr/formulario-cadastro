document.getElementById('btn-exibir').addEventListener('click', exibirDados);

function exibirDados() {
    
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;

    if (nome === '' || sobrenome === '' || email === '') {
        alert('Opa! Parece que você esqueceu de preencher todos os campos.');
        return;
    }

    let areaDeExibicao = document.getElementById('area-de-exibicao');

    let mensagemFinal = `
       <h3>Dados Cadastrados com Sucesso!</h3>
       <p><strong>Nome Completo:</strong> ${nome} ${sobrenome}</p>
        <p><strong>E-mail para contato:</strong> ${email}</p>`;

    areaDeExibicao.innerHTML = mensagemFinal;
}