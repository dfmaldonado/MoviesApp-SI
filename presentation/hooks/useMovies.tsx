import { nowPlayingAction } from "@/core/actions/movies/now-PlayingAction";
import { popularMoviesAction } from "@/core/actions/movies/popular-movies.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.movies.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24H
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcomingQuery = useQuery<Movie[]>({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery, //falta
  };
};
