import debounce from 'lodash/debounce';

// console.log(debounce);

const refs = {
  form: document.querySelector('#feedback-form'),
};

const nextOpen = localStorage.getItem('feedback');

if (nextOpen) {
  const texterea = refs.form.elements.message;
  texterea.value = nextOpen;
}

refs.form.addEventListener(
  'input',
  debounce(e => {
    const texterea = e.target;
    localStorage.setItem('feedback', texterea.value);
  }, 300),
);

// function handlePostLocal(e) {
//   const texterea = e.currentTarget.elements.message;

//   localStorage.setItem('feedback', texterea.value);
// }

refs.form.addEventListener('submit', handleSubmitLocalStorage);

function handleSubmitLocalStorage(e) {
  e.preventDefault();
  e.currentTarget.reset();

  localStorage.removeItem('feedback');
}
