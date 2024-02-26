/* Exercício 1
function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

//Exercício 2 
let ingredientes = [
    "agua",
    "farinha",
    "ovo",
    "corante",
    "sal"
];

ingredientes.pop();

console.log(ingredientes);
console.log(`Total de ingredientes: ${ingredientes.length}`);

//Exercício 3
// 1
let carros = ["BMW", "Ferrari", "Mercedees"];
let x = 1;
console.log("1."+ carros[x]);
// 2
carros[1] = "Audi"
console.log(`2. Lista com Audi: ${carros}`);
console.log(carros);
//3
carros.push("Volvo");
console.log("3. Lista com Volvo:");
console.log(carros);
// 4 
console.log("4. Itens no array:");
console.log(carros.length);

// Exercício 4
// 1. Faça um loop que mostre todas as frutas
let frutas = ["Maça", "Uva", "Banana"];

for (let n = 0; n < frutas.length; n++) {
    console.log(frutas[n]);
}

// 2. Conte de 1 até 100 através de um While
let i = 1
while (i <= 100) {
    console.log(i)
    i++;
}*/

const input = document.querySelector("input");
const lista = document.querySelector("ul");

function handleKeyUp(e) {
    if (e.key === "Enter") {
        const newLi = document.createElement("li");
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);
        input.value = "";
    } 
}

input.addEventListener("keyup", handleKeyUp);




