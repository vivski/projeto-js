// 1. Contar quantos itens existem no array

const itens = [ "sapato", "camisa", "calça" ];

let contador = 0;
for (let i = 0; i < itens.length; i++) {
  contador++;
}

console.log(contador); // 3
// 2. Criar um objeto com a quantidade de vezes que aparece cada número

const numeros = [1, 2, 2, 3, 3, 3];
const contagem = {};

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  contagem[numero] = (contagem[numero] || 0) + 1;
}

console.log(contagem); // { '1': 1, '2': 2, '3': 3 }
// 3. Contar categorias de produtos

const produtos = [
  { nome: "camisa", categoria: "roupas" },
  { nome: "calça", categoria: "roupas" },
  { nome: "tv", categoria: "eletronicos" }
];

const resultado = {};

for (let i = 0; i < produtos.length; i++) {
  const categoria = produtos[i].categoria;
  resultado[categoria] = (resultado[categoria] || 0) + 1;
}

console.log(resultado); // { roupas: 2, eletronicos: 1 }
// 4. Filtrar apenas itens de uma categoria e contar

const produtos = [
  { nome: "camisa", categoria: "roupas" },
  { nome: "tv", categoria: "eletronicos" },
  { nome: "calça", categoria: "roupas" }
];

let roupas = 0;

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].categoria === "roupas") {
    roupas++;
  }
}

console.log({ roupas }); // { roupas: 2 }
// 5. Contar categorias mesmo com nomes repetidos

const lista = [
  { nome: "camisa", categoria: "roupas" },
  { nome: "camisa", categoria: "roupas" },
  { nome: "camisa", categoria: "roupas" },
  { nome: "fone", categoria: "eletronicos" }
];

const categorias = {};

for (let i = 0; i < lista.length; i++) {
  const cat = lista[i].categoria;
  categorias[cat] = (categorias[cat] || 0) + 1;
}

console.log(categorias); // { roupas: 3, eletronicos: 1 }
// 6. Criar objeto com contagem de letras de um array de strings

const palavras = ["a", "b", "a", "c", "b", "a"];
const contagem = {};

for (let i = 0; i < palavras.length; i++) {
  const letra = palavras[i];
  contagem[letra] = (contagem[letra] || 0) + 1;
}

console.log(contagem); // { a: 3, b: 2, c: 1 }
// 7. Contar quantos produtos têm preço acima de 100 por categoria

const produtos = [
  { nome: "camisa", categoria: "roupas", preco: 80 },
  { nome: "calça", categoria: "roupas", preco: 120 },
  { nome: "tv", categoria: "eletronicos", preco: 150 }
];

const resultado = {};

for (let i = 0; i < produtos.length; i++) {
  const p = produtos[i];
  if (p.preco > 100) {
    resultado[p.categoria] = (resultado[p.categoria] || 0) + 1;
  }
}

console.log(resultado); // { roupas: 1, eletronicos: 1 }
// 8. Agrupar nomes por categoria
// mk
const produtos = [
  { nome: "camisa", categoria: "roupas" },
  { nome: "calça", categoria: "roupas" },
  { nome: "tv", categoria: "eletronicos" }
];

const agrupados = {};

for (let i = 0; i < produtos.length; i++) {
  const { categoria, nome } = produtos[i];
  if (!agrupados[categoria]) {
    agrupados[categoria] = [];
  }
  agrupados[categoria].push(nome);
}

console.log(agrupados);
// { roupas: ['camisa', 'calça'], eletronicos: ['tv'] }
// 9. Somar os preços por categoria

const produtos = [
  { nome: "camisa", categoria: "roupas", preco: 50 },
  { nome: "calça", categoria: "roupas", preco: 80 },
  { nome: "tv", categoria: "eletronicos", preco: 500 }
];

const somaPorCategoria = {};

for (let i = 0; i < produtos.length; i++) {
  const { categoria, preco } = produtos[i];
  somaPorCategoria[categoria] = (somaPorCategoria[categoria] || 0) + preco;
}

// console.log(somaPorCategoria); // { roupas: 130, eletronicos: 500 }
// 10. Agrupar e calcular média de preço por categoria

const produtos = [
  { nome: "camisa", categoria: "roupas", preco: 50 },
  { nome: "calça", categoria: "roupas", preco: 100 },
  { nome: "tv", categoria: "eletronicos", preco: 500 },
  { nome: "notebook", categoria: "eletronicos", preco: 1500 }
];

const soma = {};
const contagem = {};

for (let i = 0; i < produtos.length; i++) {
  const { categoria, preco } = produtos[i];
  soma[categoria] = (soma[categoria] || 0) + preco;
  contagem[categoria] = (contagem[categoria] || 0) + 1;
}

const media = {};
for (const categoria in soma) {
  media[categoria] = soma[categoria] / contagem[categoria];
}

console.log(media); 
// { roupas: 75, eletronicos: 1000 }