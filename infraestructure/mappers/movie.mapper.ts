import { TheMovieDbItem } from "../interfaces";
import { Movie } from "../interfaces/movie.interface";

export class MovieMapper { 
    static fromTheMovieDbToMovie (movie: TheMovieDbItem): Movie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            release: movie.release_date,
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }
    }
 }