'use strict';
const films = [
    {
        genre: "comedy",
        name: "Мачо и ботан",
        year: 2010,
    },
    {
        genre: "action",
        name: "Веном",
        year: 2019,
    },
    {
        genre: "criminal",
        name: "Достать ножи",
        year: 2019,
    },
    {
        genre: "horror",
        name: "Оно",
        year: 2017,
    },
    {
        genre: "comedy",
        name: "Мачо и ботан 2",
        year: 2015,
    },
    {
        genre: "criminal",
        name: "Убийство в восточном экспрессе",
        year: 2017,
    }
];


const filmsObj = films.reduce(function(prev, film) {// eslint-disable-line
    const genreFilm = film.genre;

    if(prev[genreFilm]) {
        prev[genreFilm].push({genre:film.genre, name:film.name, year: film.year});
    } else {
        prev[genreFilm] = [{genre:film.genre, name:film.name, year:film.year, }];
    }

    return prev;
}, {});

filmsObj[Symbol.iterator] = function() {
    const genres = Object.values(this);

    let index = 0;
    let indexGenres = 0;

    return {
        next() {
            if(index === genres[indexGenres].length) {
                indexGenres++ ;
                index = 0;   // eslint-disable-line
            }
            if(indexGenres === genres.length) {
                return {done: true};
            }
            return {
                done: false,
                value: genres[indexGenres][index++]
            };
        }
    };
};

for (const film of filmsObj) {
    console.log(film);// eslint-disable-line
}
