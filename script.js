function makeGETRequest(url, callback) {
    var xhr;
    
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      }
    
      xhr.open('GET', url, true);
      xhr.send();
  }
    
  const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(product_name, price) {
            this.product_name = product_name;
            this.price = price;
        }
        
    render() {
        return `
    <div class="goods-item">
      <h3>${this.product_name}</h3>
      <p>${this.price}</p>
      <button class="button3">Добавить в корзину<button>
    </div>`;
    }
};

class GoodsList {
    constructor() {
            this.goods = []; 
        }
        
        fetchGoods(cb) {
            makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
            })
        };
                
    render() {
            let listHtml = '';
            this.goods.forEach(good => {
                const goodItem = new GoodsItem(good.product_name, good.price);
                listHtml += goodItem.render();
            });
            document.querySelector('.goods-list').innerHTML = listHtml;
        }
}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
  });

class Basket {
    constructor() {
        this.element = document.createElement('button');
        this.element.className = '.basket-card';
        this.element.append('Корзина');
    }
    setClickHandler(clickHandler) {
        this.element.onclick = clickHandler;
    }
    render() {
        document.querySelector('header').append(this.element);
    }
  };
  
  class BasketCard {
    basketGoods = [];
    constructor() {
        this.setVision.bind(this);
        this.render.bind(this);
    }
    fetchBasketGoods() {
        returngetBasketGoods().then((basketGoods) => {
            this.basketGoods = this.basketGoods.concatants;
        })
    }
    setVision(vision) {
        document.querySelector('basket-card').style.display = vision ? 'block' : 'none';
    }
    element = `
    <div class = "basket-card">
        <div class = 'basket-card__header'>
            <button class = 'close-basket-card'> Закрыть 
            </button> 
        </div>
        <div class = 'basket-card__body'>
        </div>
    </div>
    `;
    render() {
        document.querySelector("body").insertAdjacentHTML("beforeend", this.element);
        document.querySelector('.close-basket-card').onclick = this.setVision.bind(this, false)
        document.querySelector('.basket-card__body').innerHTML = this.basketGoods.map(({ product_name, price }) => {
            const _basketItem = new BasketItem(product_name, price);
            return _basketItem.render();
        }).join('')
    }
  };
  
  class BasketItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
            <div class='basket-item'>
                <div>
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                </div>
                <div>
                <button>удалить</button>
            </div>
        `;
    }
  };
