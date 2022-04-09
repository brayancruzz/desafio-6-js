let button = document.getElementById('btn-add');
let father = document.getElementById('products-list');

button.addEventListener("click", ()=>{

    products.push({'id' : products.length, 'name' : document.getElementById('input-name').value, 'price' : Number(document.getElementById('input-price').value)})

    for (const list of products){
        let container = document.createElement('div');
        container.innerHTML = `<h4> ${list.name} </h4>
                               <h4> ${list.price} </h4>`;
    
        father.appendChild(container);
    }

})    

const products = []