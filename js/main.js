const products = [
    {id: 1, title: 'Notebook', price: 20000, img: 'img/item.png'},
    {id: 2, title: 'Mouse', price: 1500, img: 'img/item.png'},
    {id: 3, title: 'Keyboard', price: 5000, img: 'img/item.png'},
    {id: 4, title: 'Gamepad', price: 4500, img: 'img/item.png'},
];

const renderProduct = (title="Title of item", price=0, img) => {
    return `<div class="product-item">
                <img src="${img}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const catalogInit = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price, item.img));
    let products = document.querySelector('.products');
    for(let i = 0; i < productList.length; i++) {
        products.insertAdjacentHTML('beforeend', productList[i]);
    }
};

catalogInit(products);
