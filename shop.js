// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

console.log(products);

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart

    let itemBought = products.find((product) => product.id === id);
    console.log(itemBought);
    // 2. Add found product to the cartList array
    if (itemBought.quantity !== undefined) {
        itemBought.quantity += 1
    } else {
        itemBought.quantity = 1
        cart.push(itemBought);
        cartList.push(itemBought)
    }
    console.log(cart)

}
// Exercise 2
function cleanCart() {
    cart = [];
    cartList = [];
    total = 0;
    console.log(cart)
    console.log(cartList)
    typeof cart;
    const cancel = document.getElementById("cart_list");
    cancel.remove();
    const zero = document.getElementById("total_price");
    zero.remove();
}

// Exercise 3

function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let subtotalWithDiscount = cartList.map((prod) => {
        if (prod.quantity > 3 && prod.id == 1) {
            total += (prod.quantity * prod.price) - ((prod.quantity * prod.price) * 20/100);
            console.log(total)
        }
        if (prod.quantity >= 10) {
            total += (prod.quantity * prod.price) - ((prod.quantity * prod.price) * 30/100);
            console.log(total)
        } 
        if (prod.quantity <10 && prod.id !=1) {
            total += prod.price * prod.quantity
        }
    })
    }


// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let subtotalWithDiscount = cart.map((prod) => {
        if (prod.quantity > 3 && prod.id == 1) {
            total += (prod.quantity * prod.price) - ((prod.quantity * prod.price) * 20/100);
            console.log(total)
        }
        if (prod.quantity >= 10) {
            total += (prod.quantity * prod.price) - ((prod.quantity * prod.price) * 30/100);
            console.log(total)
        } 
        if (prod.quantity <10 && prod.id !=1) {
            total += prod.price * prod.quantity
        }
    })

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let printProd = ``;
    let cartTotalPrint = 0;
    cart.forEach((prod) =>{
        printProd += `<br><tr>
        <th scope="row">${prod.name}</th>
        <td>$ ${prod.price}</td>
        <td>${prod.quantity}</td>
        <td>$ ${prod.price * prod.quantity}</td>
    </tr><br>`;
        document.getElementById("cart_list").innerHTML = printProd
        cartTotalPrint += prod.price * prod.quantity
})
    console.log(cartTotalPrint)
    applyPromotionsCart() 
    document.getElementById("total_price").innerHTML = total  
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}