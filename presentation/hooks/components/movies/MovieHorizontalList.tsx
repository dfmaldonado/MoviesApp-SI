import { Movie } from '@/infraestructure/interfaces/movie.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props{
    movies: Movie[],
    title?: string,
    
}

export const MovieHorizontalList = ( {title, movies }: Props) => {
  return (
    <View>
      {title ?? <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList 
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <MoviePoster 
            id={item.id}
            poster={item.poster}
            smallPoster={true}
            />
        )}
      />
    </View>
  )
};