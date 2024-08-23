//Exercício de Transformação Simples
const numeros = [1, 2, 3, 4, 5];
const multiplicadosPorTres = numeros.map(numero => numero * 3);
console.log(multiplicadosPorTres);

//Exercício de Conversão de Tipos
const numeros2 = [1, 2, 3, 4, 5];
const numerosComoStrings = numeros.map(numero => numero.toString());
console.log(numerosComoStrings);

//Exercício de Manipulação de Strings
const frutas = ["maçã", "banana", "laranja"];
const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas); 

//Exercício de Extração de Propriedades
const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Charlie", idade: 35 }
];
const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes); 

//Exercício de Cálculo Composto
const numeros3 = [1, 2, 3, 4, 5];
const quadrados = numeros.map(numero => numero ** 2);
console.log(quadrados); 

//Exercício de Mutabilidade
//Parte 1
let meuArray = [1, 2, 3];
meuArray[0] = 4;
console.log(meuArray); 
//Parte 2
let minhaString = "Olá";
minhaString[0] = "o"; 
console.log(minhaString);

//Exercício de Persistência
localStorage.setItem("nome", "Alice");
const nome = localStorage.getItem("nome");
console.log(nome); 

//Exercício de Tipos de Dados
let primitivo = "Olá";

let referencia = { saudacao: "Olá" };

console.log(primitivo); 
console.log(referencia.saudacao); 

// Exercício de Estrutura de Dados
let arraySimples = [1, 2, 3];
console.log(arraySimples); // [1, 2, 3]

let arrayMulti = [[1, 2], [3, 4]];
console.log(arrayMulti); // [[1, 2], [3, 4]]