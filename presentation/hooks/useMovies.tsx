import { nowPlayingAction } from '@/core/actions/movies';
import { useQuery } from '@tanstack/react-query';

export const useMovies = () => {
    
    const nowPlayingQuery = useQuery ({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24H
    });

    const popularQuery = useQuery ({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    });

        const topRatedQuery = useQuery ({
        queryKey: ['movies', 'upcoming'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery //falta
    }
}