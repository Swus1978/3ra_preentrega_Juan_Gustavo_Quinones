
const tbody = document.querySelector('tbody');


function returnTableInHTML(cartItem) {
    return `
    <tr">
        <td>${cartItem.name}</td>
        <td>$ ${cartItem.price}</td>
        <td><button class="btn btn-danger btn-sm delete" id="${cartItem.code}">Delete</button></td>
    </tr>`;
}

if (shoppingCart.length > 0) {
    tbody.innerHTML = "";
    shoppingCart.forEach((cartItem) => {
        tbody.innerHTML += returnTableInHTML(cartItem);
    });
}

const deleteButtons = document.querySelectorAll('button.btn.btn-danger.btn-sm.delete');
deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains("delete")) {
            target.parentElement.parentElement.remove();
            // Update the cart in localStorage
            const code = target.id;
            const itemIndex = shoppingCart.findIndex((item) => item.code === code);
            if (itemIndex !== -1) {
                shoppingCart.splice(itemIndex, 1);
                saveCartItems();
            }
        }
    });
});



function loadProducts() {
    container.innerHTML = "";
    items.forEach((product) => {
        container.innerHTML += returnCardHTML(product); // Pass the product object to returnCardHTML
    });
    activateAllButtonsClick()
}
loadProducts();


const purchaseButton = document.querySelector('button.btn.btn-sm.btn-info.ms-4.mb-3');

purchaseButton.addEventListener('click', (e) => {
    const purchase = e.target.checked;
    if (purchase.classList.contains('ms-purchase')) { 
        target.parentElement.classList.add('ms-purchase');
    }

});