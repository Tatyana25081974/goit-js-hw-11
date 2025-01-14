import { fetchImages } from './js/pixabay-api';
import { renderImageCards, clearGallery, showNotification } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Отримуємо посилання на елементи сторінки
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Ініціалізація модального вікна для галереї
const lightbox = new SimpleLightbox('.gallery a');

// Додаємо обробник події на форму пошуку
form.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    const query = input.value.trim(); // Отримуємо пошуковий запит

    // Перевіряємо, чи поле не порожнє
    if (!query) {
        showNotification('Please enter a search query!', 'error');
        return;
    }

    clearGallery(); // Очищаємо попередні результати
    showLoader(); // Показуємо індикатор завантаження

    fetchImages(query) // Виконуємо запит до API
        .then(data => {
            if (data.hits.length === 0) {
                showNotification(
                    'Sorry, there are no images matching your search query. Please try again!',
                    'error'
                );
                return;
            }

            renderImageCards(data.hits); // Рендеримо отримані зображення
            lightbox.refresh(); // Оновлюємо модальне вікно
        })
        .catch(() => {
            showNotification('Something went wrong. Please try again later!', 'error');
        })
        .finally(() => {
            hideLoader(); // Ховаємо індикатор завантаження
        });
}

function showLoader() {
    loader.classList.add('visible'); // Додаємо клас для відображення індикатора
}

function hideLoader() {
    loader.classList.remove('visible'); // Видаляємо клас для приховування індикатора
}
