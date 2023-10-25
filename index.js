const addProduct = () =>{
    const productField=document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product=productField.value;
    const quantity= quantityField.value;
    console.log(product, quantity);
    
    displayProduct(product,quantity);
    productField.value ='';
    quantityField.value ='';
     
    saveProductToLocalStorage(product,quantity);



}
const displayProduct = (product,quantity) => {
    const productContainer = document.getElementById('productContainer');
    const li=document.createElement('li');
    li.innerText=`${product} : ${quantity} `;
    productContainer.appendChild(li);

    


}


const getStoredShoppingCard =  () => {
    let cart ={};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);

    }
return cart;


}
const saveProductToLocalStorage = (product, quantity) => {
     const cart = getStoredShoppingCard();
     cart[product]=quantity;
     const strinGified = JSON.stringify(cart);
     localStorage.setItem('cart',strinGified);
    // console.log(cart);


}
 const displayLocalStokrageProduct = ()=>{

    const saveCart = getStoredShoppingCard();
    console.log(saveCart);
    for(product in saveCart)
    {
        const quantity = saveCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }

 }
 displayLocalStokrageProduct();