import { useMovies } from '@/presentation/hooks';
import { MovieHorizontalList } from '@/presentation/hooks/components';
import MainSlideShown from '@/presentation/hooks/components/MainSlideShow';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const {nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery} = useMovies();

    const safeArea = useSafeAreaInsets ();

    if (nowPlayingQuery.isLoading || popularQuery.isLoading || topRatedQuery.isLoading || upcomingQuery.isLoading ) {
        return (
            <View className='flex-1 items-center justify-center bg-white'>
                <ActivityIndicator color='purple' size= "large"  />
            </View>
        )
    }

    return (
        <View className="flex-1 bg-white mt-2 style={{paddingTop: safeArea.Top}}">
            <Text className="text-3xl font-bold px-4 mb-2" >HomeScreen<Text/>
            <MainSlideShown movies={nowPlayingQuery.data ??[]} />

        {/* Peliculas Populares */}
        <MovieHorizontalList movies = {popularQuery.data ?? []} title="Peliculas populares"></MovieHorizontalList>
        <MovieHorizontalList movies = {topRatedQuery.data ?? []} title="Mejor Calificadas"></MovieHorizontalList>
        <MovieHorizontalList movies = {upcomingQuery.data ?? []} title="Proximamente"></MovieHorizontalList>
        </View>
    );

};

export default HomeScreen