//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

import { moviesApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import { MovieMapper } from "@/infraestructure/mappers";

export const upcomingMoviesAction = async (): Promise<Movie[]> => {

    try {
            const { data } = await moviesApi.get<MovieDBMoviesResponse>(`/upcoming`)    

            return data.results.map(movieDbMovie => MovieMapper.fromTheMovieDbToMovie(movieDbMovie));
            
    } catch (error) {
        console.log(error);
        throw 'No se pudo obtener las películas'
    }
}