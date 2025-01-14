const API_KEY = '48210883-f70532ba3d786d958e1d4920f';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            throw error;
        });
}


