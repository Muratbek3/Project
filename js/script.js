/* const result= confirm("Are you here?");
/* console.log(result); */

/* const answer = +prompt("Вам есть 18?", "18");
console.log(typeof(answer)); */ 
let meltText = "от 1 до 10";


/* answers[0] = prompt("Как вас зовут?", "");
answers[1] = prompt("Какая у вас фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

document.write(answers); */
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "")


let personalMovieDB= {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat: false
};
const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt ("На сколько оцените его?", `${meltText}`),
      c = prompt("Один из последних просмотренных фильмов", ""),
      d = prompt ("На сколько оцените его?", `${meltText}`);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);



