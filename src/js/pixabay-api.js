import axios from 'axios';

const API_KEY = '17166399-e5f7f2e62df2b422af7ff4cab';
const BASE_URL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query, page = 1) {
    const perPage = 15;
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

    try {
        const response = await axios.get(url);
        const { hits, totalHits } = response.data;
        return { hits, totalHits };
    } catch (error) {
        console.error('Помилка при отриманні зображень:', error);
        throw error;
    }
}