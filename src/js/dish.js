//  <div class="card">
// <img class="img" src="" alt="" width="200">
// <div class="content">
//   <h2 class="name">title</h2>
//   <p class="descr">text</p>
//   <footer class="footer">
//     <p class="price">Price: $</p>
//     <button class="button">Add to order</button>
//   </footer>
//   <p class="sold-out">Sold Out!</p>
// </div>
// </div>
// https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg
const dishes = [
  {
    name: 'Baked Yak & Mushrooms',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Beatae sint quasi quo exercitationem vel ea distinctio. Quae eveniet porro aspernatur debitis eos accusamus est harum.',
    price: '61.00',
    available: true,
  },
  {
    name: 'Roasted Oysters',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Consequatur maiores eos sunt ea commodi laboriosam. Esse est et quia voluptatem voluptatem quia deleniti et ut.',
    price: '32.00',
    available: false,
  },
  {
    name: 'Strawberry Pancakes',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Aut tenetur ipsa. Ex voluptate qui aut porro numquam voluptas autem.',
    price: '21.00',
    available: true,
  },
  {
    name: 'Caramel Toffee',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Eum fuga sequi earum voluptas voluptas necessitatibus ut. Labore animi sed maxime animi quia eum magnam et provident.',
    price: '33.00',
    available: false,
  },
  {
    name: 'Strawberry Pancakes',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Dolores sed vero voluptatem voluptatem architecto officiis praesentium. Dolores quasi facere incidunt sint eos omnis delectus officia.',
    price: '14.00',
    available: false,
  },
  {
    name: 'Caramel Toffee',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Ea eveniet vel omnis veniam et perspiciatis quod doloribus voluptas. Autem at est molestiae repellendus.',
    price: '84.00',
    available: true,
  },
  {
    name: 'Roasted Orange',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Deserunt quas nostrum qui qui sunt qui dolores. Culpa facere et voluptatem nobis laudantium aperiam aliquid.',
    price: '63.00',
    available: true,
  },
  {
    name: 'Pistachio Elderberry Wafer',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Optio ut eum necessitatibus dolores molestias. Tenetur libero harum nobis a est et voluptatem rerum officia.',
    price: '67.00',
    available: false,
  },
  {
    name: 'Chocolate Pie',
    image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
    descr:
      'Et cum et ut quis quas maiores consequatur. Iure qui unde sint consequatur qui iusto at sit.',
    price: '26.00',
    available: false,
  },
];

const createCardContent = (title, description) => {
  const content = document.createElement('div');
  content.classList.add('content');

  const name = document.createElement('h2');
  name.classList.add('name');
  name.textContent = title;

  const descr = document.createElement('p');
  descr.classList.add('descr');
  descr.textContent = description;

  content.append(name, descr);

  return content;
};

const createCardFooter = (price, available) => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const dishPrice = document.createElement('p');
  dishPrice.classList.add('price');
  dishPrice.textContent = `Price: ${price}$`;

  const btnAdd = document.createElement('button');
  btnAdd.classList.add('buttonbtn');
  btnAdd.hidden = !available;
  btnAdd.textContent = 'Add to order';

  footer.append(dishPrice, btnAdd);

  return footer;
};

const createCardNofitication = available => {
  if (available) return null;

  const soldOutNotification = document.createElement('p');
  soldOutNotification.classList.add('sold-out');
  soldOutNotification.textContent = 'Sold Out!';

  return soldOutNotification;
};

const createDishCard = ({ name, image, descr, price, available }) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('imgDish');
  img.setAttribute('src', image);
  img.setAttribute('alt', '');
  img.setAttribute('width', 200);

  const content = createCardContent(name, descr);
  const footer = createCardFooter(price, available);
  const notification = createCardNofitication(available);

  content.appendChild(footer);

  card.append(img, content, notification);

  return card;
};

const createCards = dishes => {
  const elements = dishes.map(dish => createDishCard(dish));

  return elements;
};

const dishGrid = document.querySelector('.dish-grid');
const cards = createCards(dishes);

// console.log(cards);

dishGrid.append(...cards);
