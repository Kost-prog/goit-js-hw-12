import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightboxInstance = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(image => `
    <li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </li>
  `).join('');

  galleryContainer.innerHTML = markup;
  lightboxInstance.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('is-visible');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('is-visible');
}