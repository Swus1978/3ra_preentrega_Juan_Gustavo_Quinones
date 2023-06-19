// Make sure to select the table body element in your JavaScript code
// Select the table body element

const tableBody = document.querySelector("#tableBody");

function returnCardHTML(product) {
    const productImages = product.images ? product.images : "";
    return `<tr>
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td><img src="${productImages}" width="10px"></td>
                <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
            </tr>`;
}


// Add event listener to the table body
tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        const item = JSON.parse(event.target.dataset.item);
        deleteCartItem(item);
    }
});






