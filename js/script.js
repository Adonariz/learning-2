/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const ads = document.querySelectorAll('.promo__adv img');
const promoContent = document.querySelector('.promo__content');
const promoGenre = promoContent.querySelector('.promo__genre');
const promoBg = promoContent.querySelector('.promo__bg');
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const addMovieForm = document.querySelector('.add');
const addMovieInput = addMovieForm.querySelector('.adding__input');
const addMovieBtn = addMovieForm.querySelector('button');
const favoriteCheckbox = addMovieForm.querySelector('input[type="checkbox"]');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const movies = movieDB.movies;

ads.forEach(ad => {
  ad.remove();
});

promoGenre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

const renderMoviesList = ()=> {
  promoInteractiveList.innerHTML = '';
  const sortedMovies = movies.sort();

  sortedMovies.forEach((movie, i) => {
    promoInteractiveList.innerHTML += `
      <li class="promo__interactive-item">${i + 1}. ${movie}
        <div class="delete"></div>
      </li>
    `;
  });

  document.querySelectorAll('.delete').forEach((btn, i) => {
    btn.addEventListener('click', ()=> {
      btn.parentElement.remove();
      movies.splice(i, 1);

      renderMoviesList();
    });
  });
};

renderMoviesList();

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  const movieTitle = addMovieInput.value;

  if (movieTitle && movieTitle.trim() !== '') {
   
    if (movieTitle.length > 21) {
      movies.push(`${movieTitle.slice(0, 22)}...`);
    } else {
      movies.push(movieTitle);
    }
  
    if (favoriteCheckbox.checked) {
      console.log('Добавляем любимый фильм');
    }
  }
  
  addMovieInput.value = '';
  
  renderMoviesList();
};

addMovieForm.addEventListener('submit', formSubmitHandler);
