import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

function changeBulletPoints() {
  const listItems = document.querySelectorAll('.gallery__item');

  listItems.forEach(item => {
    item.style.listStyleType = 'none';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  changeBulletPoints();
});
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join('');

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  navText: ['&larr;', '&rarr;'],
  docClose: true,
  disableScroll: false,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
