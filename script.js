  //есть массив с товаром
  
  const goods = [
    { img: 'img//product1.png', title: 'Shirt', price: 150 },
    { img: 'img//product2.png', title: 'Socks', price: 50},
    { img: 'img//product3.png', title: 'Jacket', price: 350},
    { img: 'img//product4.png', title: 'Shoes', price: 250},
    { img: 'img//product5.png', title: 'Jacket', price: 350},
    { img: 'img//product6.png', title: 'Shoes', price: 250},
  ];

  /*создаем переменную - это шаблон нашей карточки товара, добавляем к ней стили*/
  /*прописываем в какой последовательности вывести данные из массива*/

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

  //создаем новую переменную с данными из массива

  /*методом .map(),  вызваем переданную функцию один раз для каждого элемента массива, формируем новый массив */

  /*методом document.querySelector() ищем указанный класс*/

  /*свойство .innerHTML возвращаем новые значения из массива, выводядся через запятую строкой*/

  /* метод .join() позволяет преобразовать и объединить все элементы массива в одно строковое значение. Эти методом убираем запятые*/

  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
   /*теперь вызываем функцию, которая выводит на экран карточки товара*/

  renderGoodsList(goods);

  /* ??????? страница как то странно загружается, прямо видно как выполняется код js, а потом уже подключается css и страница полностью загружается, не понимаю как это исправить*/ 