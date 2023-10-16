const wrapper = document.getElementById("wrapper");
let product = "";
let listaSpesa = [];
while (product !== "stop" ){
    product = prompt("Che prodotto vuoi acquistare?");
    console.log(product);
    listaSpesa.push(product);
}
listaSpesa.pop(-1);
console.log(listaSpesa);
wrapper.innerHTML = `
    <div class = "container m-3"> 
        ${listaSpesa}
    </div>
    `;

