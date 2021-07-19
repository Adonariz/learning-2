/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const ads = document.querySelectorAll('.promo__adv img');
const promoContent = document.querySelector('.promo__content');
const promoGenre = promoContent.querySelector('.promo__genre');
const promoBg = promoContent.querySelector('.promo__bg');
const promoInteractiveList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const sortedMovies = movieDB.movies.slice().sort();

ads.forEach(ad => {
  ad.remove();
});

promoGenre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

promoInteractiveList.innerHTML = '';

sortedMovies.forEach((movie, i) => {
  promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${movie}
      <div class="delete"></div>
    </li>
  `;
  
  return promoInteractiveList;
});
