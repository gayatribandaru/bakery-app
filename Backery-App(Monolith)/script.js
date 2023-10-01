document.addEventListener("DOMContentLoaded", function() {

    const products = [
        { id: 1, name: "Croissant", price: 2.5 },
        { id: 2, name: "Baguette", price: 3 },
        { id: 3, name: "Cake", price: 5 },
        { id: 4, name: "Bread", price: 4 },
        { id: 5, name: "Muffin", price: 2.5 },
        { id: 6, name: "Cookie", price: 1.5 },
        { id: 7, name: "Brownie", price: 2 },
        { id: 8, name: "Pie", price: 6 },
        { id: 9, name: "Cupcake", price: 2 },
        { id: 10, name: "Donut", price: 1.5},
        { id: 11, name: "Pretzel", price: 1.5 },
        { id: 12, name: "Biscuit", price: 1.5 },
        { id: 13, name: "Scone", price: 2 },
        { id: 14, name: "Roll", price: 1.5 },
        { id: 15, name: "Tart", price: 3 },
        { id: 16, name: "Strudel", price: 3 },
        { id: 17, name: "Danish", price: 2.5 },
        { id: 18, name: "Bun", price: 1.5 },

    ];

    let cart = [];

    // Populate product catalog
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-item";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    // Function to add product to cart
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    };

    // Function to update cart
    function updateCart() {
        const cartList = document.getElementById("cart-list");
        cartList.innerHTML = "";
        cart.forEach(product => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerText = product.name;
            cartList.appendChild(cartItem);
        });
    }

    // Function to checkout
    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", function() {
        alert("Thanks for your purchase!");
        cart = [];
        updateCart();
    });

    // ...existing JavaScript...

let subtotal = 0;
let tax = 0;
let total = 0;

// Function to update itemized bill and total
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const itemizedBill = document.getElementById("itemized-bill");
    cartList.innerHTML = "";
    itemizedBill.innerHTML = "";
    subtotal = 0;

    cart.forEach(product => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerText = product.name;
        cartList.appendChild(cartItem);

        const billItem = document.createElement("div");
        billItem.innerText = `${product.name} - $${product.price}`;
        itemizedBill.appendChild(billItem);

        subtotal += product.price;
    });

    tax = subtotal * 0.1;  // Assuming 10% tax
    total = subtotal + tax;

    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("final-total").innerText = `$${total.toFixed(2)}`;
}

// Function to apply discount
function applyDiscount() {
    const discountInput = document.getElementById("discount-input").value;

    if (discountInput === "BAKERY10") {
        total = total * 0.9;  // 10% discount
        document.getElementById("final-total").innerText = `$${total.toFixed(2)}`;
        alert("Discount applied!");
    } else {
        alert("Invalid discount code");
    }
}

// ...existing JavaScript...

// Function to confirm payment and generate invoice
function confirmPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out.");
        return;
    }

    // Generate Invoice (for this example, just a text-based invoice)
    let invoiceContent = "Bakery Shop Invoice\n\n";
    invoiceContent += "Itemized Bill:\n";
    cart.forEach(product => {
        invoiceContent += `${product.name} - $${product.price}\n`;
    });
    invoiceContent += `Subtotal: $${subtotal.toFixed(2)}\n`;
    invoiceContent += `Tax: $${tax.toFixed(2)}\n`;
    invoiceContent += `Total: $${total.toFixed(2)}\n`;

    // Create a Blob from the invoice content
    const invoiceBlob = new Blob([invoiceContent], { type: "text/plain" });

    // Create an anchor element and trigger download
    const invoiceUrl = URL.createObjectURL(invoiceBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = invoiceUrl;
    downloadLink.download = "invoice.txt";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Empty cart and update UI
    cart = [];
    updateCart();

    // Show confirmation
    alert("Your payment has been confirmed. The invoice has been downloaded.");
}

// Attach confirmPayment function to button click event
document.getElementById("confirm-payment").addEventListener("click", confirmPayment);

// ...existing JavaScript...


});
