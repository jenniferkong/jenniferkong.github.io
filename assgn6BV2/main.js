function bun(flavor, glaze, quantity, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.quantity = quantity;
    this.price = price;
}
var newItemQuantity = 0;


//updatesSubTotal
function displaySubtotal() {
    for (i = 1; i < 5; i++ ){
        //checks if radio that is selected
        var x = document.getElementById(i.toString()).checked;
        if (x === true){
            var subtotal = document.getElementById(i).value
            document.getElementById("updatedTotal").innerHTML = "$" + subtotal;
            return subtotal
            break;
        }
    }

}
//update cart value in banner, actually find value
var displayValue = parseInt(localStorage.getItem("amount"),10);
displayCartInHTML();
//show amount of items in cart
function displayItemsInCart(){
    for (i = 1; i < 5; i++ ){
        //checks if radio that is selected
        var x = document.getElementById(i.toString()).checked;
        if (x == true){
            if (i == "1") {
                displayValue+=1;
            }
            else if (i== "2") {
                displayValue+=3;
            }
            else if (i== "3") {
                displayValue+=6;
            }
            else if (i== "4") {
                displayValue+=9;
            }
        console.log(displayValue, "displayValue");
        }
    }
    return displayValue;
}

// stores cart value & changing amount in cart to quantity from displayItemsInCart();
//updates value
function displayCartInHTML() {
    var quantity = displayItemsInCart();
    // returning variable named quantity from displayItemsInCart(), which is the displayValue
    if (quantity > 0){
        //if quantity is more than 0, i want to update it
        var x = document.getElementById("amtInCart");
        // changing the html doc x to quantity
        var storeCart = localStorage.setItem("amount",quantity);
        //storing my stuff so i can refresh and keep my content
        var quantity2 = localStorage.getItem("amount");
        // console.log("amount", amount)
        //retreiving my content to be assigned as quantity2
        quantity = quantity2;
        // referring to my html doc and naming the default 0 as x
        x.innerHTML = quantity;
        //assigning quantity to quantity2
        console.log(quantity2, "quantity2");

        return quantity2;
    }
}

// for 6b
//missing local storage

var cart = [];
function addObjectToCartAndLocalStorage(){
    var storeItemIntoCart = localStorage.setItem("bun", (newObject()));
    var store2 = localStorage.getItem("bun");
    return storeItemIntoCart;

    cart.push(newObject());
}


function newObject(){
    var newFlavor = document.getElementById("flavor").textContent;
    var newGlaze = customizeGlazeToObject();
    var newQuantity = customizeQuantityToObject();
    var newPrice = customizePriceToObject();
    var newBun = new bun (newFlavor, newGlaze, newQuantity, newPrice);

    return newBun;

}
//gathers all necessary information
function customizeQuantityToObject(){
    var quantityOfBuns = 0;
    for (i = 1; i < 5; i++ ){
        //checks if radio that is selected
        var x = document.getElementById(i.toString()).checked;
        if (x == true){
            if (i == "1") {
                quantityOfBuns=1;
            }
            else if (i== "2") {
                quantityOfBuns=3;
            }
            else if (i== "3") {
                quantityOfBuns=6;
            }
            else if (i== "4") {
                quantityOfBuns=9;
            }
        }
    }
    console.log (quantityOfBuns, "quantityOfBuns")
    return quantityOfBuns;
}

function customizePriceToObject(){
    var quantityOfBunsforPrice = customizeQuantityToObject();
    console.log ("quantityOfBunsforPrice", quantityOfBunsforPrice)
    var priceOfBuns = 0;
    if (quantityOfBunsforPrice == "1") {
        priceOfBuns = "1.35"
    }
    else if (quantityOfBunsforPrice == "3") {
         priceOfBuns = "5.00"
    }
    else if (quantityOfBunsforPrice == "6") {
        priceOfBuns = "9.00"
    }
    else if (quantityOfBunsforPrice == "9") {
        priceOfBuns = "15.00"
    }
    console.log("priceOfBuns", priceOfBuns)
    return priceOfBuns;
}

function customizeGlazeToObject(){
    var glazeOfBuns = 0;
    for (i = 5; i < 11; i++ ){
        //checks if radio that is selected
        var x = document.getElementById(i.toString()).checked;
        if (x == true){
            if (i == "5") {
                glazeOfBuns="Original";
            }
            else if (i== "6") {
                glazeOfBuns="Gluten Free Original";
            }
            else if (i== "7") {
                glazeOfBuns="Blackberry";
            }
            else if (i== "8") {
                glazeOfBuns="Walnut";
            }
           else if (i== "9") {
                glazeOfBuns="Pumpkin Spice";
            }
            else if (i== "10") {
                glazeOfBuns="Chocolate Pecan";
            }
        }
    }
    console.log(glazeOfBuns, "glazeOfBuns")
    return glazeOfBuns;
}


// function addItemToCartPrice(){
//     console.log("add to addItemToCartPrice is running");
//     var quantityDiv = document.getElementByID("quantity");
//     var inputs = quantityDiv.getElementsByTagName("input");
//     for (var quantitySelection=0; quantitySelection<inputs.length; i++) {
//         if (inputs[quantitySelection].checked) {
//             //constantly updating text
//             document.getElementById("updatedTotal").innerHTML = newItemPrice;
//             var newItemPrice = inputs[quantitySelection].value;
//             console.log(newItemPrice);
//             return newItemPrice;
//         }
//     }
// }

// function addItemToCartGlaze(){
//     console.log("add to addItemToCartGlaze is running");
//     var glazeDiv = document.getElementByID("glaze");
//     var inputs = glazeDiv.getElementsByTagName("input");
//     for (var glazeSelection=0; glazeSelection<inputs.length; i++) {
//         if (inputs[glazeSelection].checked) {
//             return newItemGlaze = inputs[glazeSelection].value;
//         }
//     }
// }


//for loop into flavor div https://stackoverflow.com/questions/844869/iterating-through-all-the-div-tags-on-a-page
//how to specify div to loop through specific ids in quantity?
// function displayPriceinCart(){
//     var ids = document.getElementsByTagName("id");
//     for(var i = 0; i < ids.length; i++){
//         if (ids[i].checked) {
//             var updatedTotalValue= ids[i].value;
//             return document.getElementByID("updatedTotal").innerHTML = "$" + updatedTotalValue;
//             }
//     }
// }
// function storeCart(quantity) {
//     console.log("storeCart works");
//     var storeCart = localStorage.setItem("amount",quantity);
//     console.log("storeCart", quantity);
//     return storeCart;
// }

//uncomment this to clear !!
// function clearCart(quantity){
//     localStorage.setItem("amount",0);
//     displayValue=0;
//     displayCartInHTML();
// }

console.log("javascript is reading")
console.log("cart",cart)