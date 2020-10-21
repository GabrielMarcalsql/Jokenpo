var jogadorNome
var jogadorEscolha = 0
var jogadorPontos = 0
var computadorEscolha
var computadorPontos = 0

function sorteio(min, max) {
  return Math.floor(Math.random()* (max-min + 1)) + min
}

function somarPontoJogador() {
    jogadorPontos++
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos
}

function somarPontoComputador() {
     computadorPontos++
     document.getElementById('computador-pontos').innerHTML = computadorPontos
}


function mensagem(texto) {
  document.getElementById('mensagem').innerHTML = texto
}

function definirNomeJogador(nome) {
  document.getElementById('jogador-nome').innerHTML = nome
}

//Calculo de quem ganhou a rodada, 0 empate, 1 jogador, 2 computador
function calcularEscolha(jogador, computador) {
  if(jogador == computador){
    return 0
  }
  else if(jogador == 1 && computador == 2){
    return 2
  }
  else if(jogador == 1 && computador == 3){
    return 1
  }
  else if(jogador == 2 && computador == 1){
    return 1
  }
  else if(jogador == 2 && computador == 3){
    return 2
  }
  else if(jogador == 3 && computador == 1){
    return 2
  }
  else if(jogador == 3 && computador == 2){
    return 1
  }
  
  
  
}

// Adiciona a classe selecionado.
function selecionar(tipo, escolha) {
  document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

// Remove a classe selecionado.
function deselecionar(tipo, escolha) {
  document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

//Jogada do usuario, segue o rumo de 1 pedra, 2 papel, 3 tesoura
function jogar(escolha) {
  jogadorEscolha = escolha
  selecionar('jogador', jogadorEscolha);
  
  computadorEscolha = sorteio(1, 3)
  selecionar('computador', computadorEscolha);
  
  var ganhador = calcularEscolha(jogadorEscolha,  computadorEscolha)
  
  if(ganhador == 0){
    mensagem('Empate, ninguem soma pontos!')
  }
  else if(ganhador == 1){
    mensagem('Ponto para '+ jogadorNome+'!')
    somarPontoJogador()
  }
  else if(ganhador == 2){
    mensagem('Ponto para a máquina!')
    somarPontoComputador()
  }
  setTimeout(function() {
    deselecionar('jogador', jogadorEscolha);
    deselecionar('computador', computadorEscolha);
    mensagem(jogadorNome + ' escolha uma opção...');
  }, 3500);
}

document.getElementById('jogador-escolha-1').onclick = function(){
  jogar(1)
}

document.getElementById('jogador-escolha-2').onclick = function(){
  jogar(2)
}

document.getElementById('jogador-escolha-3').onclick = function(){
  jogar(3)
}


 jogadorNome = prompt("Digite seu nome: ")

 definirNomeJogador(jogadorNome)
 document.getElementById('mensagem').innerHTML = 'Seja bem-vindo '+ jogadorNome +' vamos começar? Escolha uma das opções acima...'



