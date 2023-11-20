import { fetchCatByBreed, fetchBreeds } from './cat-api';

const refs = {
  form: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

refs.form.addEventListener('change', handleChange);

hideSelect();
showLoader();
hideError();

fetchBreeds()
  .then(data => {
    showSelect();
    for (let i = 0; i < data.length; i++) {
      refs.form.insertAdjacentHTML(
        'beforeend',
        `<option value="${data[i].id}">${data[i].name}</option>`
      );
    }
  })
  .catch(() => showError())
  .finally(() => hideLoader());

function handleChange(event) {
  showLoader();
  hideCatInfo();
  fetchCatByBreed(event.currentTarget.value)
    .then(data => {
      showCatInfo();
      refs.catInfo.innerHTML = createMarkup(data);
    })
    .catch(() => showError())
    .finally(() => hideLoader());
}

function createMarkup(arr) {
  return arr
    .map(
      ({ breeds, url }) =>
        `<div  style="display:flex; gap:20px;position: absolute;
       top: 50%;
       transform: translate(0, -50%);">
          <img src="${url}" alt="${breeds[0].name}" width="350"  class="cat-icon">
          <div  >
            <h2 style="font-size:20px; font-weight: bold;">${breeds[0].name}</h2>
            <h2 style="font-size:14px; font-weight: normal;">${breeds[0].description} </h3>
            <h2 style="font-size:14px; font-weight: normal;"> 
                 <span style="font-weight: bold;">Temperament:</span>${breeds[0].temperament}
            </h2>
          </div>
        </div>`
    )
    .join('');
}

function hideLoader() {
  refs.loader.setAttribute('hidden', '');
}

function showLoader() {
  refs.loader.removeAttribute('hidden', '');
}

function hideError() {
  refs.error.setAttribute('hidden', '');
}

function showError() {
  refs.error.removeAttribute('hidden', '');
}

function hideSelect() {
  refs.form.setAttribute('hidden', '');
}

function showSelect() {
  refs.form.removeAttribute('hidden', '');
}

function hideCatInfo() {
  refs.catInfo.setAttribute('hidden', '');
}

function showCatInfo() {
  refs.catInfo.removeAttribute('hidden', '');
}
