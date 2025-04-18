import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  clearGallery(); 
  showLoader(); 

  try {
    const images = await getImagesByQuery(query);

    if (images.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(images); 
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader(); 
  }
});