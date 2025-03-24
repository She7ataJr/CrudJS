let productName = document.getElementById('proName');
let seller = document.getElementById('seller')
let price = document.getElementById('price')
const addBtn=document.getElementById('addBtn')
// adding func
let products=[];

function add(){
    
    const item={

        name:productName.value,
        sellerName:seller.value,
        itemPrice:price.value
    }
    products.push(item)
    console.log(products);
}

function display(){
    var itemcontainer=''
    for (let i = 0; i < products.length; i++) {
        itemcontainer+=`<tr><td>${products[i].name}</td><td>${products[i].sellerName}</td><td>${products[i].itemPrice}</td></tr>`
    }
    document.getElementById('tBody').innerHTML=itemcontainer
}
addBtn.onclick = function(){
    add();
    display();
}
