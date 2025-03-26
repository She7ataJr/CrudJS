let productName = document.getElementById('proName');
let seller = document.getElementById('seller')
let price = document.getElementById('price')
const addBtn=document.getElementById('addBtn')
const delBtn=document.getElementById('delBtn')
const searchInput=document.getElementsByClassName('search-text')
// adding func
let products=[];

if( localStorage.getItem('myItems')!= null){
    products = JSON.parse(localStorage.getItem('myItems'))
    display();
}else{
    products=[];
}
function add(){
    
    const item={

        name:productName.value,
        sellerName:seller.value,
        itemPrice:price.value
    }
    products.push(item)
    localStorage.setItem("myItems",JSON.stringify(products))
    clearForm()
    console.log(products);
}

function display(){
    var itemcontainer=''
    for (let i = 0; i < products.length; i++) {
        itemcontainer+=`<tr><td>${products[i].name}</td>
        <td>${products[i].sellerName}</td>
        <td>${products[i].itemPrice}</td>
        <td> <button type="button" onclick="deleteItem(${i})" class="btn btn-outline-danger">Delete</button></td>
        <td> <button type="button" class="btn btn-outline-warning">Update</button></td>
        </tr>`
    }
    document.getElementById('tBody').innerHTML=itemcontainer
}
addBtn.onclick = function(){
    add();
    display();
}

function clearForm(){
    // first idea
    // productName.value=''
    // seller.value=''
    // price.value=''
    // enhanced idea 
    let inputs = document.getElementsByClassName('form-control')
    for (i=0; i<inputs.length; i++){
        inputs[i].value=''
    }
}
// Local storage 
function deleteItem(index){
    products.splice(index,1)
    console.log(products);
    
    display()
}

function search(searchtxt){

    var itemcontainer=''
    for (let i = 0; i < products.length; i++) {
        if(products[i].name.toLowerCase().includes(searchtxt.toLowerCase())){
            itemcontainer+=`<tr><td>${products[i].name}</td>
            <td>${products[i].sellerName}</td>
            <td>${products[i].itemPrice}</td>
            <td> <button type="button" onclick="deleteItem(${i})" class="btn btn-outline-danger">Delete</button></td>
            <td> <button type="button" class="btn btn-outline-warning">Update</button></td>
            </tr>`
        }
       
    }
    document.getElementById('tBody').innerHTML=itemcontainer

}