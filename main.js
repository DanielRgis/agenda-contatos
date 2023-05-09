const form = document.querySelector('form');
const tabelaContatos = document.querySelector('#tabela-contatos tbody');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');

const adicionarContato = (event) => {
  event.preventDefault();

  const contatosTabela = tabelaContatos.querySelectorAll('tr');
  for (const contato of contatosTabela) {
    if (contato.cells[0].textContent === inputNome.value) {
      alert('Esse contato já existe na agenda!');
      return;
    }
  }

  const novoContato = document.createElement('tr');
  const colunaNome = document.createElement('td');
  const colunaEmail = document.createElement('td');
  const colunaTelefone = document.createElement('td');
  const colunaExcluir = document.createElement('td');
  const botaoExcluir = document.createElement('button');
  
  colunaNome.textContent = inputNome.value;
  colunaEmail.innerHTML = `<a href="mailto:${inputEmail.value}">${inputEmail.value}</a>`;
  colunaTelefone.innerHTML = `<a href="https://wa.me/55${inputTelefone.value}">${inputTelefone.value}</a>`;
  botaoExcluir.textContent = 'Excluir';
  
  novoContato.appendChild(colunaNome);
  novoContato.appendChild(colunaEmail);
  novoContato.appendChild(colunaTelefone);
  colunaExcluir.appendChild(botaoExcluir);
  novoContato.appendChild(colunaExcluir);

  tabelaContatos.appendChild(novoContato);

  // Limpa os campos do formulário
  form.reset();
}

const excluirContato = (event) => {
  if (event.target.tagName === 'BUTTON') {
    const botao = event.target;
    const linha = botao.parentNode.parentNode;
    tabelaContatos.removeChild(linha);
  }
}

form.addEventListener('submit', adicionarContato);
tabelaContatos.addEventListener('click', excluirContato);