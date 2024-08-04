// Example JavaScript to handle cart operations

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart`);
}

function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (cartItemsList) {
        cartItemsList.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItemsList.appendChild(li);
            totalPrice += item.price * item.quantity;
        });
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        updateCartUI();
    }
});
