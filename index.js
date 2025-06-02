const jogadores = [];

function buscarJogador(nome) {
  for (var i = 0; i < jogadores.length; i++) {
    if (jogadores[i].nome === nome) {
      return jogadores[i];
    }
  }
  return null;
}

function adicionarJogador(nome) {
  if (buscarJogador(nome)) {
    console.log("Jogador já existe.");
  } else {
    jogadores.push({ nome: nome, vitorias: 0, empates: 0, derrotas: 0, partidas: 0 });
    console.log("Jogador adicionado:", nome);
  }
}

function registrarPartida(nome1, escolha1, nome2, escolha2) {
  var opcoesValidas = ['pedra', 'papel', 'tesoura'];

  if (!opcoesValidas.includes(escolha1) || !opcoesValidas.includes(escolha2)) {
    console.log("Escolha inválida.");
    return;
  }

  var jogador1 = buscarJogador(nome1);
  var jogador2 = buscarJogador(nome2);

  if (!jogador1 || !jogador2) {
    console.log("Jogador não encontrado.");
    return;
  }

  jogador1.partidas++;
  jogador2.partidas++;

  if (escolha1 === escolha2) {
    jogador1.empates++;
    jogador2.empates++;
    console.log("Empate!");
  } else if (
    (escolha1 === 'pedra' && escolha2 === 'tesoura') ||
    (escolha1 === 'papel' && escolha2 === 'pedra') ||
    (escolha1 === 'tesoura' && escolha2 === 'papel')
  ) {
    jogador1.vitorias++;
    jogador2.derrotas++;
    console.log(nome1 + " venceu!");
  } else {
    jogador2.vitorias++;
    jogador1.derrotas++;
    console.log(nome2 + " venceu!");
  }
}

function mostrarRanking() {
  var listaRanking = [];

  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.pontos = jogador.vitorias * 3 + jogador.empates;
    listaRanking.push(jogador);
  }

  listaRanking.sort(function (a, b) {
    return b.pontos - a.pontos;
  });

  for (var i = 0; i < listaRanking.length; i++) {
    var jogador = listaRanking[i];
    console.log((i + 1) + ". " + jogador.nome + " - " + jogador.pontos + " pts");
  }
}

function mostrarHistorico() {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    console.log(jogador.nome + ": " + jogador.partidas + " partidas");
  }
}

function menu() {
  while (true) {
    console.log("\n1 - Adicionar jogador");
    console.log("2 - Registrar partida");
    console.log("3 - Ver ranking");
    console.log("4 - Ver histórico");
    console.log("5 - Sair");

    var opcao = prompt("Digite a opção:");
    
    if (opcao === "1") {
      var nome = prompt("Nome do jogador:");
      adicionarJogador(nome);
    } else if (opcao === "2") {
      var nome1 = prompt("Jogador 1:");
      var escolha1 = prompt("Escolha de " + nome1 + " (pedra/papel/tesoura):").toLowerCase();
      var nome2 = prompt("Jogador 2:");
      var escolha2 = prompt("Escolha de " + nome2 + " (pedra/papel/tesoura):").toLowerCase();
      registrarPartida(nome1, escolha1, nome2, escolha2);
    } else if (opcao === "3") {
      mostrarRanking();
    } else if (opcao === "4") {
      mostrarHistorico();
    } else if (opcao === "5") {
      console.log("Saindo...");
      break;
    } else {
      console.log("Opção inválida.");
    }
  }
}

// menu();
