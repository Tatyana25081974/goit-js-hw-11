import iziToast from 'izitoast';// імпортується  бібліотека для створення стильних сповіщень.
import 'izitoast/dist/css/iziToast.min.css';// імпортуються стилі бібліотеки 

export function renderImageCards(images) {
  const gallery = document.querySelector('.gallery');// знаходить елемент із класом .gallery, у якому будуть відображатися зображення.
  const markup = images // це масив об'єктів, кожен з яких містить дані про зображення:(webformatURL — URL мініатюри,largeImageURL — URL великого зображення, )
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p>
                <span>Likes</span>
                <span>${likes}</span>
                
            </p>
            <p>
                <span>Views</span>
                <span>${views}</span>
                
            </p>
            <p>
                
                <span>Comments</span>
                <span>${comments}</span>
            </p>
            <p>
                
                <span>Downloads</span>
                <span>${downloads}</span>
            </p>
          </div>
        </a>
      `
    )
    .join('');//.join('') об'єднує всі створені елементи в один HTML-рядок.
  gallery.innerHTML = markup; //вставляє створений HTML у контейнер .gallery.
}

export function showNotification(message, type = 'info') {//Приймає два параметри: message — текст повідомлення, яке потрібно відобразити і тип повідомлення
  iziToast[type]({ title: message, position: 'topRight' }); // Викликає метод iziToast[type] для показу сповіщення:title: message — текст повідомлення.і позиція сповіщення (у верхньому правому куті)
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = ''; //Всі зображення та їх метаінформація в галереї видаляються.
}


//Що тут відбувається загалом:
//Імпорт бібліотеки iziToast: Для створення сповіщень.
//Рендеринг галереї: Функція renderImageCards створює та додає на сторінку динамічну галерею зображень, яка будується на основі отриманого масиву даних.
//Показ повідомлень: Функція showNotification відображає сповіщення для інформування користувача.
//Очищення галереї: Функція clearGallery видаляє весь вміст галереї.