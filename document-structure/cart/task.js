const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
    const countControls = product.querySelector('.product__quantity-controls');
    const countPlus = countControls.querySelector('.product__quantity-control_inc');
    const countMinus = countControls.querySelector('.product__quantity-control_dec');
    const countValueElement = countControls.querySelector('.product__quantity-value');
    const addBasket = product.querySelector('.product__add');

    let countValue = 1;

    countPlus.addEventListener('click', () => {
        countValue++;
        countValueElement.textContent = countValue; 
    });

    countMinus.addEventListener('click', () => {
        if (countValue > 1) {
            countValue--;
            countValueElement.textContent = countValue;
        }
    });

    addBasket.addEventListener('click', () => {
        const productId = product.getAttribute('data-id');
        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingProduct) {
            const existingCountElement = existingProduct.querySelector('.cart__product-count');
            existingCountElement.textContent = parseInt(existingCountElement.textContent) + countValue;
        } else {
            const newProduct = document.createElement('div');
            newProduct.classList.add('cart__product');
            newProduct.setAttribute('data-id', productId);
            newProduct.innerHTML = `
                <img class="cart__product-image" src="${product.querySelector('.product__image').src}" alt="">
                <div class="cart__product-count">${countValue}</div>
            `;
            cartProducts.appendChild(newProduct);
        }
        countValue = 1;
        countValueElement.textContent = countValue; 
    });
});
