const GOODS =  [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
]

const CORE_API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GET_GOODS_URL = "/catalogData.json";
const GET_BASKET_GOODS_URL = "/getBasket.json ";

const service = (method, postfix) => (
    new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, `${CORE_API_URL}${postfix}`, true);
        xhr.send();
        xhr.onload = (event) => {
        resolve(JSON.parse(event.target.response));
        }
    })
);

Vue.component('basket-goods-item', {
    props: [''],
    template: `
        <div class="basket-goods-item" 
        <div>{{ item.title }}</div>
        <div></div>
        <div>{{ item.price }}</div>
        </div>
    `
});
    
Vue.component('basket-card', {
    props: [''],
    template: `
        <div class="basket-card">
            <div></div>
        </div>
    `
});
  

Vue.component('goods-item', {
    props: ['item'],
    template: `
        <div class="goods-item">
           <div>{{ item.title }}</div>
           <div>
              {{ item.price }}
           </div>
           <div>
              <custom-button>добавить</custom-button>
           </div>
        </div>
    `,
});

const app  = new Vue({
    el: '#app',
    data: {
        goods: GOODS,
        filteredGoods: GOODS,
        basketCardVision: false,
        search: '' 
    },
        
    methods: {
        filterGoods: function (event) {
            this.filteredGoods = this.goods.filter(({ title }) => {
                return new RegExp(this.search, 'i').test(title);
            })
        }

    }
});