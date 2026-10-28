const botaoCurtir = document.getElementById("botao-curtir");
const botaoZerar = document.getElementById("botao-zerar");
const textoCurtidas = document.getElementById("curtidas");
const textoMensagem = document.getElementById("mensagem");

let curtidas = 0;

function atualizarTela() {
  textoCurtidas.textContent = curtidas;
  if (curtidas >= 10) {
    textoMensagem.textContent = "🔥 Seu post viralizou!";
  } else {
    textoMensagem.textoContent = "";
  }
}

botaoCurtir.addEventListener("click", function () {
  curtidas = curtidas + 1000000000;
  atualizarTela();
});

botaoZerar.addEventListener("click", function () {
  curtidas = 0;
  atualizarTela();
});
