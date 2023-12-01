/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let ad = document.querySelector(".promo__adv");
let images = ad.querySelectorAll("#ad");
const genre = document.querySelector('.promo__genre')  
let bg = document.querySelector(".promo__bg")
const movies = document.querySelectorAll(" .promo__interactive-list li")


images.forEach(
    function(image) {
        ad.removeChild(image);
    });
    

genre.innerHTML = "Драма"

bg.style.backgroundImage = `url("img/bg.jpg")`


movieDB.movies.sort()
movies.forEach((el, idx) => {
    el.innerHTML = (idx + 1) + "." + movieDB.movies[idx]
})





let movieList = document.querySelectorAll(".promo__interactive-item");

movieList.forEach(function(item, idx) {
  item.addEventListener("click", function(event) {
    event.target.remove();
  });
  
});




