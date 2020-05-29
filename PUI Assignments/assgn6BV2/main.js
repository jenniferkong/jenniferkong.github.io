function bun(flavor, glaze, quantity, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.quantity = quantity;
    this.price = price;
    //this.ID = ID;
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

var cart = [];
matchCartArraytoCartDisplay();


//update cart value in banner, actually find value
var tmp = localStorage.getItem("amount");
var displayValue = tmp==null? 0:(parseInt(tmp,10));


//show amount of items in cart
function displayItemsInCart(){
    var checkRadio = document.getElementsByTagName("input")
    if (checkRadio.type == "radio") {
        for (i = 1; i < 5; i++ ){
            //checks if radio that is selected
            var x = document.getElementById(i.toString()).checked;
            if (x == true) {
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
        // console.log(x,"x");
        // changing the html doc x to quantity
        var storeCart = localStorage.setItem("amount",quantity);
        //storing my stuff so i can refresh and keep my content
        var quantity2 = localStorage.getItem("amount");
        //retreiving my content to be assigned as quantity2
        quantity = quantity2;
        // referring to my html doc and naming the default 0 as x
        x.innerHTML = quantity;
        //assigning quantity to quantity2
        // console.log(quantity2, "quantity2");
        return quantity2;
    }
}

// for 6b
//local storage
function addObjectToCartAndLocalStorage(){
    console.log (cart, "cart in addObjectToCartAndLocalStorage");
    // cart.push(newObject());
    // var storeItemIntoCart = localStorage.setItem("bun", JSON.stringify(cart));
    // var store2 = JSON.parse(localStorage.getItem(storeItemIntoCart));
    // storeItemIntoCart = store2
    var bunget = localStorage.getItem("bun");
    console.log("hello");
    var retrieveLS = bunget==null? []:(JSON.parse(bunget));
    cart.push(newObject());
    console.log(retrieveLS);
    retrieveLS = retrieveLS.push(cart);
    var setLS = localStorage.setItem("bun", JSON.stringify(retrieveLS));
    var storeItemIntoCart = setLS;


//get local storage first
//push to cart
//modify local storage with updated cart
//return modified local storage
    return storeItemIntoCart;
}

//creates a new object
function newObject(){
    var newFlavor = document.getElementById("flavor").textContent;
    var newGlaze = customizeGlazeToObject();
    var newQuantity = customizeQuantityToObject();
    var newPrice = customizePriceToObject();
    //var newID = customizeIDToObject();
    var newBun = new bun (newFlavor, newGlaze, newQuantity, newPrice);
    return newBun;
}

//gathers all necessary information///////
// function customizeIDToObject() {
//     var cartLength = cart.length;
//     var newID = 0;
//     newID = cartLength+1;
//     return newID;
// }

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
    // console.log (quantityOfBuns, "quantityOfBuns")
    return quantityOfBuns;
}

function customizePriceToObject(){
    var quantityOfBunsforPrice = customizeQuantityToObject();
    // console.log ("quantityOfBunsforPrice", quantityOfBunsforPrice)
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
    // console.log("priceOfBuns", priceOfBuns)
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
    // console.log(glazeOfBuns, "glazeOfBuns")
    return glazeOfBuns;
}

//dynamically updates html with amount in cart
function matchCartArraytoCartDisplay(){
    for (var item =0; item<cart.length; item++) {
        //add html
        $('.order').append("\
            <div id='item'>\
                <h3></h3>\
                <p></p>\
            </div>\
            <div>\
                <p></p>\
                <p id='editor'> x </p>\
                <p id='editor'> Edit </p>\
                <p>\
            </div>");
        }
}

//remove item in cart
function removeItemFromCart(){

}
console.log("javascript is reading")
console.log("cart",cart)