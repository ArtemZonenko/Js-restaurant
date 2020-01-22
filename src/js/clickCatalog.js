const catalogTabs = document.querySelector('ul[data-action="catalog__tabs"]');
catalogTabs.addEventListener('click', handleClickCatalogActive);

function handleClickCatalogActive(evt) {
  evt.preventDefault();
  const nodeName = evt.target.nodeName;

  if (nodeName === 'A') {
    document
      .querySelector('a.catalog__tab_active')
      .classList.remove('catalog__tab_active');

    evt.target.classList.add('catalog__tab_active');
  }
}
