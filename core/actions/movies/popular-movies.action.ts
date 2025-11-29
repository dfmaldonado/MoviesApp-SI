
import { moviesApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import { MovieMapper } from "@/infraestructure/mappers";

export const popularMoviesAction = async (): Promise<Movie[]> => {
    try {
        const { data } = await moviesApi.get<MovieDBMoviesResponse>(`/popular`);
        return data.results.map(movieDbMovie => MovieMapper.fromTheMovieDbToMovie(movieDbMovie));
    } catch (error) {
        console.error(error);
        throw "No se pudo obtener las películas populares";
    }
};
