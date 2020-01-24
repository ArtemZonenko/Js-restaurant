const galleryItems = [
  {
    preview: '../images/preview-11.jpg',
    fullview: '../images/fullview-11.jpg',
    alt: 'alt text 1',
  },
  {
    preview: '../images/preview-22.jpg',
    fullview: '../images/fullview-22.jpg',
    alt: 'alt text 2',
  },
  {
    preview: '../images/preview-33.jpg',
    fullview: '../images/fullview-33.jpg',
    alt: 'alt text 3',
  },
];

// document.addEventListener(
//   'DOMContentLoaded',
//   createElements.bind(null, galleryItems),
// );

// function createElements(arr) {
//   const parent = document.querySelector('.js-image-gallery');
//   parent.innerHTML = `<div class="fullview">
//     <img src="${arr[0].fullview}" alt="${arr[0].alt}">
//   </div>
//   <ul class="preview">
//   </ul>`;

//   const ul = document.querySelector('.preview');
//   ul.innerHTML = createPreview(arr);

//   ul.addEventListener('click', changeView);
// }

// const createPreview = array =>
//   array.reduce((accum, el) => {
//     accum += `<li><img src="${el.preview}" data-fullview="${el.fullview}" alt="${el.alt}"></li>`;
//     return accum;
//   }, []);

// function changeView(evt) {
//   const liS = Array.from(document.querySelectorAll('.preview > li > img'));
//   if (liS.indexOf(evt.target) < 0) return;
//   const dest = evt.target.dataset.fullview;
// //   console.log(dest);
//   if (!dest) return;
//   document.querySelector('.fullview').firstElementChild['src'] = dest;
// }

/////////////////////////////////////////

//

////////////////////////////////////////////////////////////

class Gallery {
  constructor({ items, parentNode, defaultActiveItem }) {
    (this.items = items),
      (this.parentNode = parentNode),
      (this.defaultActiveItem = defaultActiveItem),
      this.init();
  }

  init() {
    this.parentNode.innerHTML = `<div class="fullview">
      <img src="${this.items[this.defaultActiveItem - 1].fullview}" 
      alt="${this.items[this.defaultActiveItem - 1].alt}">
      </div>
      <ul class="preview">
      </ul>`;

    const ul = document.querySelector('.preview');
    ul.innerHTML = this.createPreview(this.items);
    ul.addEventListener('click', this.changeView);
  }

  createPreview(array) {
    const liS = array.reduce((accum, el) => {
      accum += `<li><img src="${el.preview}" data-fullview="${el.fullview}" alt="${el.alt}"></li>`;
      return accum;
    }, []);
    return liS;
  }

  changeView(evt) {
    const liS = Array.from(document.querySelectorAll('.preview > li > img'));
    if (liS.indexOf(evt.target) < 0) return;
    const dest = evt.target.dataset.fullview;
    console.log(dest);
    if (!dest) return;
    document.querySelector('.fullview').firstElementChild['src'] = dest;
  }
}

new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1,
});
