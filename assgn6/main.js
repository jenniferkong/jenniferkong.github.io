function bun(flavor, glaze, quantity, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.quantity = quantity;
    this.price = price;
}

var cart = [];
var newItemQuantity = 0;

document.getElementById("1").addEventListener("click", displayItemsInCart ;
function addToCart(){
    var newFlavor = document.getElementById("flavor");
    var newGlaze = addItemToCartGlaze();
    var newQuantity = addItemToCartQuantity();
    var newPrice =  addItemToCartPrice();
    console.log(cart.push(bun(newFlavor, newGlaze, newQuantity, newPrice)))
    return cart.push(bun(newFlavor, newGlaze, newQuantity, newPrice));

}
function addItemToCartQuantity(){
    var quantityDiv = document.getElementByID("quantity");
    var inputs = quantityDiv.getElementsByTagName("input");
    for (var quantitySelection=0; quantitySelection<inputs.length; i++) {
        if (inputs[quantitySelection].checked) {
            var newItemQuantity = inputs[quantitySelection].id;
            return newItemQuantity;

        }
    }
}

function addItemToCartPrice(){
    var quantityDiv = document.getElementByID("quantity");
    var inputs = quantityDiv.getElementsByTagName("input");
    for (var quantitySelection=0; quantitySelection<inputs.length; i++) {
        if (inputs[quantitySelection].checked) {
            //constantly updating text
            document.getElementById("updatedTotal").innerHTML = newItemPrice;
            var newItemPrice = inputs[quantitySelection].value;
            console.log(newItemPrice);
            return newItemPrice;
        }
    }
}

function addItemToCartGlaze(){
    var glazeDiv = document.getElementByID("glaze");
    var inputs = glazeDiv.getElementsByTagName("input");
    for (var glazeSelection=0; glazeSelection<inputs.length; i++) {
        if (inputs[glazeSelection].checked) {
            return newItemGlaze = inputs[glazeSelection].value;
        }
    }
}


//for loop into flavor div https://stackoverflow.com/questions/844869/iterating-through-all-the-div-tags-on-a-page
//how to specify div to loop through specific ids in quantity?
function displayPriceinCart(){
    var ids = document.getElementsByTagName("id");
    for(var i = 0; i < ids.length; i++){
        if (ids[i].checked) {
            var updatedTotalValue= ids[i].value;
            return document.getElementByID("updatedTotal").innerHTML = "$" + updatedTotalValue;
            }
    }
}

//show amount of items in cart
function displayItemsInCart(){
    var displayValue = 0;
    for (var i = 0; i <cart.length; i++) {
        displayValue += cart[i].quantity;
    }
    return displayValue
}



//things i'm missing
// value is not updating
//onclick
//local storage

//onload
console.log("hey")
console.log(cart)