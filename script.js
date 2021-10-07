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
    constructor(title, price) {
            this.title = title;
            this.price = price;
        }
        //этим метоlдом вернули НТМL разметку
    render() {
        return `
    <div class="goods-item">
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
            this.goods = []; //список товаров
        }
        //метод, который обращался бы к серверу и получал данные
    fetchGoods() {
            this.goods = [
                { title: 'Shirt', price: 150 },
                { title: 'Socks', price: 50 },
                { title: 'Jacket', price: 350 },
                { title: 'Shoes', price: 250 },
            ];
        }
        //создаем новый элемент
    createCount() {
            const h2Count = document.createElement('h2');
            h2Count.classList.add('.count');
            h2Count.innerHTML = `ИТОГО, общая стоимость товаров составляет: ${this.getCount()} рублей `;

            document.body.appendChild(h2Count);
        }
        //метод для перебора массива товаров 
    render() {
            let listHtml = '';
            this.goods.forEach(good => {
                const goodItem = new GoodsItem(good.title, good.price);
                listHtml += goodItem.render();
            });
            document.querySelector('.goods-list').innerHTML = listHtml;

            this.createCount();
        }
        //Определение суммы товаров
    getCount() {
        return this.goods.reduce((prev, { price }, array) => prev + price, 0);
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();