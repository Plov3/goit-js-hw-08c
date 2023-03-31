// Add imports above this line

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></div>`
  )
  .join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});