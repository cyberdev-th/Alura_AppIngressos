let qtd_pista, qtd_inferior, qtd_superior;

function comprar() {
  let tipoIngresso = `qtd-${document.getElementById("tipo-ingresso").value}`;
  let quantidade = Number(document.getElementById("qtd").value);
  comprarIngresso(tipoIngresso, quantidade);
  document.getElementById("qtd").value = 0;
  atualizaEstoque();
}

function comprarIngresso(tipo, quantidade) {
  if (quantidade > Number(document.getElementById(tipo).textContent)) {
    alert(`Quantidade indisponível para o setor ${tipo.split("-")[1]}`);
  } else {
    document.getElementById(tipo).textContent = String(
      Number(document.getElementById(tipo).textContent) - quantidade
    );
  }
}

function atualizaEstoque() {
  qtd_pista = Number(document.getElementById("qtd-pista").textContent);
  if (qtd_pista === 0) {
    document.querySelector('#tipo-ingresso option[value="pista"]').textContent =
      "(ESGOTADO)Pista";
    document.querySelector(
      '#tipo-ingresso option[value="pista"]'
    ).disabled = true;
  }
  qtd_inferior = Number(document.getElementById("qtd-inferior").textContent);
  if (qtd_inferior === 0) {
    document.querySelector(
      '#tipo-ingresso option[value="inferior"]'
    ).textContent = "(ESGOTADO)Inferior";
    document.querySelector(
      '#tipo-ingresso option[value="inferior"]'
    ).disabled = true;
  }
  qtd_superior = Number(document.getElementById("qtd-superior").textContent);
  if (qtd_superior === 0) {
    document.querySelector(
      '#tipo-ingresso option[value="superior"]'
    ).textContent = "(ESGOTADO)Superior";
    document.querySelector(
      '#tipo-ingresso option[value="superior"]'
    ).disabled = true;
  }
}
