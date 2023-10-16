
let product = "";
let listaSpesa = [];
while (product !== "stop" ){
    product = prompt("Che prodotto vuoi acquistare?");
    console.log(product);
    listaSpesa.push(product);
}
listaSpesa.pop(-1);
console.log(listaSpesa);
