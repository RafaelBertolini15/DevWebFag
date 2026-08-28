const valorConta = 100;
const percentualGorjeta = 15;

const valorGorjeta = calcularGorjeta(valorConta, percentualGorjeta);

const valorTotal = valorConta + valorGorjeta;

console.log("=====================================================================================================");
console.log("Valor da conta atual: R$" + valorConta);
console.log("Percentual da gorjeta definido pelo sistema: " + percentualGorjeta + "%");
console.log("Valor da gorjeta em cima do percentual da gorjeta + valor da conta: R$" + valorGorjeta);
console.log("Valor total a pagar: R$" + valorTotal);
console.log("=====================================================================================================");

function calcularGorjeta(valorConta, percentualGorjeta) {
    return valorConta * (percentualGorjeta/100);
}