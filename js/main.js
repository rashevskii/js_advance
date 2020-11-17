class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
      this.container = container;
      this.#goods = [];
      this.#allProducts = [];
      this.#fetchGoods();
      this.#render();
  }

  #fetchGoods() {
      this.#goods = [
          {id: 1, title: 'Notebook', price: 20000, img: "img/item.png"},
          {id: 2, title: 'Mouse', price: 1200, img: "img/item.png"},
          {id: 3, title: 'Keyboard', price: 5000, img: "img/item.png"},
          {id: 4, title: 'Gamepad', price: 4500, img: "img/item.png"},
      ];
  }
// 2
  #getAllPrice() {
    let allPrice = 0;
    for (let product of this.#goods) {
      allPrice += product.price;
    }
    return allPrice;
  }

  #render() {
      const container = document.querySelector(this.container);
      const allPrice = document.querySelector('.allPrice');

      for (let product of this.#goods) {
          const productObject = new ProductItem(product);

          this.#allProducts.push(productObject);

          container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
      }
      allPrice.insertAdjacentHTML('beforeend', this.#getAllPrice())
  }
}

class ProductItem {
  constructor(product) {
      this.title = product.title;
      this.id = product.id;
      this.price = product.price;
      this.img = product.img;
  }

  getHTMLString() {
      return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} \u20bd</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`;
  }
}

const productList = new ProductList();

// 1
// class Basket extends ProductList {
//   deleteGoods() {

//   }
//   checkout() {

//   }
//   clearBasket() {

//   }
// }

// class BasketItem extends ProductItem {
//   constructor(product, count) {
//     super(product);
//     this.count = count;
//   }
//   plusGoods() {
//     return ++this.count;
//   }
//   minusGoods() {
//     return --this.count;
//   }
// }