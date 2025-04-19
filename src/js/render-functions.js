import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
export function createGallery(images) {
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
      <a href="${largeImageURL}" class="gallery-item photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${likes}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${views}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${comments}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${downloads}</p>
          </div>
        </div>
      </a>
    `;
  }).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
    loadMoreBtn.classList.add('hidden');
}