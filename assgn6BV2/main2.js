///globals//
var newItemQuantity = 0;
var cart = [];
var cartTotal = 0;
var storeItemIntoCart = null;
cart = JSON.parse(localStorage.getItem("bun"));
matchCartArraytoCartDisplay();
findTotalPrice();
updateCartPageTotal();
//update cart value in banner, actually find value
var tmp = localStorage.getItem("amount");
var displayValue = tmp==null? 0:(parseInt(tmp,10));

//Model raw data////////////////////////////////////////
function bun(flavor, glaze, quantity, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.quantity = quantity;
    this.price = price;
    //this.ID = ID;
}
//totals price on cart page
function findTotalPrice(){
    var bun = JSON.parse(localStorage.getItem("bun"));
    for (var item = 0; item <cart.length; item++){
        cartTotal+=parseFloat(bun[item].price);
    }
    //https://stackoverflow.com/questions/9453421/how-to-round-float-numbers-in-javascript
    cartTotal = (cartTotal).toFixed(2);
    return cartTotal
}
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



///view - ui displays///////////////////////////////////////
//updates cart page total
function updateCartPageTotal(){
    document.getElementById("totalText").innerHTML= "Total  $" + cartTotal;
}
//updatesSubTotal
function displaySubtotal() {
    for (i = 1; i < 5; i++ ){
        //checks if radio that is selected
        var x = document.getElementById(i.toString()).checked;
        if (x === true){
            var subtotal = document.getElementById(i).value
            document.getElementById("updatedTotal").innerHTML = "$ " + subtotal;
            return subtotal
            break;
        }
    }
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

function matchCartArraytoCartDisplay(){
}

///controller - user actions/events///////////////////////////////////////

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

//local storage
function addObjectToCartAndLocalStorage(){
    if (typeof localStorage.getItem("bun") !== "string") {
        cart= JSON.parse(localStorage.getItem("bun"));
        console.log("test")
    }
    if (cart === null || cart.length === 0 ) {
        //place object into array
        cart = [];
        cart.push(newObject());
        console.log (JSON.stringify(cart), "cart if");
        //set bun to things in cart and places it in LS
        storeItemIntoCart = localStorage.setItem("bun", JSON.stringify(cart));
        //puts it back into jumbles for LS + stores local storage
    }
    else {
        //pull info from storage
        var unjumbledStorage = JSON.parse(localStorage.getItem("bun"));
        //modify info from storage
        unjumbledStorage = cart.push(newObject());
        storeItemIntoCart = localStorage.setItem("bun", JSON.stringify(cart));
    }
    console.log(cart) //comment this out and your console breaks lmfao what
    return storeItemIntoCart;
}
/*** Document Load ****/
$( document ).ready(function() {
    var bun = JSON.parse(localStorage.getItem("bun"));
        for (var item = 0; item < cart.length; item++){
            var quantityFlavorFlavoredBuns = ((bun[item].quantity)+ " " +(bun[item].flavor)+" Flavored Buns");
            var withGlazeGlaze = ("With"+ " " +(bun[item].glaze)+ " " +"Glaze");
            var dollarPrice = ("$"+bun[item].price);
            $(".order").append(`
                <p></p>
                <div id='item'`+item+`>
                    <h3 id='item_quantity_flavor'+item>` + quantityFlavorFlavoredBuns +`
                    </h3>
                    <p id='item_glaze'`+item+`>`+withGlazeGlaze+`</p>
                </div>
                <div>
                    <p id='item_cost'`+item+`>`+dollarPrice+`</p>
                </div>
                <div>
                    <p id='editor_x'`+item+`> x </p>
                </div>
                <div>
                    <p id='editor'`+item+`> Edit </p>
                    <p>
                </div>`)
            // var test = $("#item_quantity_flavor"+item).text((bun[item].quantity)+ " " +(bun[item].flavor)+" Flavored Buns");
            // console.log(test, "div")
        }
});
console.log("javascript is reading")
console.log("cart",cart)