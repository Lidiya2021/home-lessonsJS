//lessons-1

/*   const goods = [
   { img: 'img//product1.png', title: 'Shirt', price: 150 },
   { img: 'img//product2.png', title: 'Socks', price: 50},
   { img: 'img//product3.png', title: 'Jacket', price: 350},
   { img: 'img//product4.png', title: 'Shoes', price: 250},
   { img: 'img//product5.png', title: 'Jacket', price: 350},
   { img: 'img//product6.png', title: 'Shoes', price: 250},
 ];

 const renderGoodsItem = (img, title, price) => {
 return `
   <div class="goods-item">
     <img src="${img}" alt="карточка товара">
     <h3>${title}</h3>
     <p>${price}</p>
     <button class="button3">Добавить</button>
   </div>
 `;
 };

 const renderGoodsList = (list) => {
   let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
   document.querySelector('.goods-list').innerHTML = goodsList.join('');
 }
 
 onload = renderGoodsList;*/

//lessons2-1  

//Создали класс для карточки товара
class GoodsItem {
  constructor(img, title, price) {
    this.img = img;
    this.title = title;
    this.price = price;
  }
  //этим метоом вернули НТМL разметку
  render() {
    return `
    <div class="goods-item">
      <img src="${this.img}" alt="карточка товара">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      <button class="button3">Добавить в корзину<button>
    </div>
  `;
  }
}
//создали класс для списка товаров
class GoodsList {
  constructor() {
    this.goods = [];
  }
  //этим методом заполнили список товаров
  fetchGoods() {
    this.goods = [
      { img: 'img//product1.png', title: 'Shirt', price: 150 },
      { img: 'img//product2.png', title: 'Socks', price: 50 },
      { img: 'img//product3.png', title: 'Jacket', price: 350 },
      { img: 'img//product4.png', title: 'Shoes', price: 250 },
      { img: 'img//product5.png', title: 'Jacket', price: 350 },
      { img: 'img//product6.png', title: 'Shoes', price: 250 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.img, good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
