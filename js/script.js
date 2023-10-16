let product = " ";
let listaSpesa = [];

while (product !== "stop" ){
    product = prompt("Che prodotto vuoi acquistare?");
    if (product !== "stop" && product !== " "){
        listaSpesa.push(product);
    }
}
console.log(listaSpesa);

const wrapper = document.getElementById("wrapper");
for (let i = 0; i < listaSpesa.length; i++){
    const listEl = document.createElement("li");
    listEl.innerHTML = listaSpesa[i];
    wrapper.appendChild(listEl);
};


