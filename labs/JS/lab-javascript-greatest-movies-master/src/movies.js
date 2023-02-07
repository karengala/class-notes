// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


//Este movies hace referencia al parámetro de la array function
function getAllDirectors(movies) {
//el movies de la array functions hace referencia al parámetro de la array function ANONIMA.
    const directorsRaw = movies.map((movies) => movies.director)
    let directorsFiltered = directorsRaw.filter((director, index) => directorsRaw.indexOf(director) === index);

    /* console.log(directorsFiltered) */
    return directorsFiltered;
    
}
console.log(getAllDirectors(movies));

    // Jarko approach
    // let directosFilteredAlt = [... new Set(directorsRaw)];
    // console.log(directosFilteredAlt);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

let dramaMovies = moviesArray.filter((moviesArray) => {
    return (moviesArray.director === "Steven Spielberg" && moviesArray.genre.includes("Drama"));
});
console.log (dramaMovies);
return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
    
    if(movies.length === 0) return 0;

    const totalScore = movies.map(item => item.score)
    console.log(totalScore);

    let sum = totalScore.reduce((a, b) => a + b);
    console.log(sum);

    let avg = parseFloat(sum / totalScore.length);
    console.log(avg);

    let avgString = avg.toFixed(2)

    console.log (Number(avg.toFixed(2)));
  return Number(avg.toFixed(2));
}  

/* function scoresAverage(movies) {

    if(movies.length === 0) return 0;
    const totalScore = movies.reduce((acumulador,currentValue) =>{
    if (currentValue.score){
        return acumulador + currentValue.score;
    } else{
        return acumulador;
    }
},0)
let avg = (totalScore / movies.length).toFixed(2);
return Number(avg); 

}*/


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

    if(movies.length === 0) return 0;
    
    let dramaMoviesArray = movies.filter(movies => {
     return (movies.genre.includes("Drama"));
    });
    console.log (dramaMoviesArray);  

    const avgDramaMov = scoresAverage(dramaMoviesArray);
    return avgDramaMov;

   /*  const totalAvgDramaMov = movies.map(puntuation => puntuation.score)
    console.log(totalAvgDramaMov);

    let sum = totalAvgDramaMov.reduce((a, b) => a + b);
    console.log(sum);

    let avg = sum / totalAvgDramaMov.length;
    console.log(avg); */
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    const movieArrayCopy = movies.map((movie) => 
    movie);
    

    let newSortedArray = movieArrayCopy.sort((movieOne,movieTwo) => {
        return movieOne.year > movieTwo.year ? 1 : -1;
        });
        
        console.log (newSortedArray); 
        return newSortedArray;

}

/*  -------SOLUCION CLASE------- 

  const orderByYear = (movies) => {
    // part 1
    // Queremos crear un "shallow" copy del array original :) - usemos el metodo map() === "crear un shallow copy" :)
    const movieArrayCopy = movies.map((movie) => {
      return movie;
    });
    // part 2
    // usemos el sort() para pdoer sortear :)
    movieArrayCopy.sort((movieA, movieB) => {
      if (movieA.year > movieB.year) return movieA.year - movieB.year;
      if (movieA.year < movieB.year) return movieA.year - movieB.year;
      else return movieA.title.localeCompare(movieB.title);
    });
    // part 3
    // return with style
    return movieArrayCopy;
  };
  console.log("Iteration 05");  */


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    let NamesArray = movies.map(item => item.title);
    /* console.log (NamesArray); */
    
    let NamesArrayOrdered = NamesArray.sort((numOne, numTwo) => {
        return numOne > numTwo ? 1 : -1;
      });
      /* return NamesArrayOrdered; */
      console.log(NamesArrayOrdered);
    
    let first20 = NamesArrayOrdered.slice(0, 20);
    return first20;
    console.log(first20);
}

/* -------SOLUCION CLASE------- */

const orderAlphabetically = (movies) => {
  return movies
    .map((movie) => movie.title) // mappeamos cada pocision del array
    .sort() // usamos este metodo para ordenar alfabeticamente, esto automatico por eso usamos el metodo.
    .slice(0, 20); // cortamos desde la position 0 hasta la 20 - 20 pelis
};
console.log("Iteration 05");
console.table(orderAlphabetically(movies));



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
