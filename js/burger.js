class Params {
  constructor(element) {
    this.name = element.value;
    this.price = +element.dataset['price'];
    this.calories = +element.dataset['calories'];
  }
}

class Burger {
  constructor(size, add, topping) {
    this.size = new Params(this._select(size));
    this.add = new Params(this._select(add));
    this.topping = this._getToppings(topping);
  }

  _select(name) {
    return document.querySelector(`input[name=${name}]:checked`);
  }

  _getToppings(name) {
    let res = [];
    this._selectAll(name).forEach(el => res.push(new Params(el)));
    return res;
  }

  _selectAll(name) {
    return document.querySelectorAll(`input[name=${name}]:checked`);
  }

  _sumPrice() {
    let res = this.size.price + this.add.price;
    this.topping.forEach(topping => res += topping.price);
    return res;
  }

  _sumCalories() {
    let res = this.size.calories + this.add.calories;
    this.topping.forEach(topping => res += topping.calories);
    return res;
  }

  showSum(price, calories) {
    document.querySelector(price).textContent = this._sumPrice();
    document.querySelector(calories).textContent = this._sumCalories();
  }
}