import {main, skinTest, fieldset} from './quiz.main'
let testResult = document.createElement('section');
testResult.className = 'test-result';
let pageSlider = document.createElement('p');
pageSlider.className = 'page-slider';
pageSlider.innerHTML = '1 2 3 ... 13';

function onShowResult(e) {
  e.preventDefault()
  const checkAnswer = fieldset.querySelector('input[type="radio"]:checked');
  if (checkAnswer) {
    skinTest.style.display = 'none';
    main.appendChild(testResult);
    let headerTitle = document.querySelector('.header__title');
    headerTitle.innerHTML = 'Результат';
    let headerSubtitle = document.querySelector('.header__subtitle');
    headerSubtitle.innerHTML = 'Мы подобрали для вас наиболее подходящие средства';
  } else {
      alert('Выберите ответ');
  };
  
};
async function getResult() {
  try {
      const src = await fetch(
          '../src/assets/json/products.json',
          {
              method: 'GET',
          },
      );
      const products = await src.json();
      return products;
      } catch (error) {
          console.log(error);
      };
};

getResult().then(products => {
  const catalog = document.createElement('div');
  catalog.className = 'products-catalog';
  products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      const picture = document.createElement('img');
      picture.style.width = '240px';
      picture.style.height = '240px';
      picture.src = product.image;
      picture.className = 'product-card__image';
      const favorite = document.createElement('img');
      favorite.style.width = '28px';
      favorite.style.height = '25px'; 
      favorite.src = '../src/assets/images/favorite.svg';
      favorite.className = 'product-card__favorite';
      const info = document.createElement('div');
      info.className = 'product-card__info';
      const productTitle = document.createElement('p');
      productTitle.innerHTML = product.title;
      productTitle.className = 'product-card__product-title';
      const priceContainer = document.createElement('div');
      priceContainer.className = 'product-card__price-container';
      const oldProductPrice = document.createElement('p');
      oldProductPrice.innerHTML =  Number.parseFloat(product.oldPrice).toFixed(2);
      oldProductPrice.className = 'product-card__old-price';
      if (oldProductPrice.innerHTML === 'NaN') {
          oldProductPrice.style.display = 'none';
      }
      const currentProductPrice = document.createElement('p');
      currentProductPrice.innerHTML = `${product.price} <span>руб.</span>`;
      currentProductPrice.className = 'product-card__current-price';
      
      priceContainer.append(...[oldProductPrice, currentProductPrice]);
      info.append(...[productTitle, priceContainer]);
      card.append(...[picture, favorite, info]);
      catalog.append(card);
      testResult.append(catalog, pageSlider);

  });
});

export {onShowResult};