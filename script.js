/*function makeGETRequest(url, callback) {
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
  }*/

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Функция запроса / ответа на промисах
function makeGETRequest(url, callback) {
    return new Promise((resolve, reject) => {
        let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
        xhr.open("GET", url, true);
        xhr.onload = () => resolve(callback(xhr.responseText));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

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
        this.filteredGoods = [];
    }

    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
            cb();
        })
    };

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(goods => regexp.test(goods.product_name));
        this.render();
    }

    /*searchButton.addEventListener('click', (e) => {
        const value = searchInput.value;
        list.filterGoods(value);
    });*/
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