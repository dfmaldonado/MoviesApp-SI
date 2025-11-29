import React from 'react';
import { Image, Pressable } from 'react-native';

interface Props {
    poster: string;
    id: number;
    smallPoster?: boolean;
    classname?: string;
    
}

export const MoviePoster = ({ 
    id, 
    poster, 
    smallPoster = false,
    classname,
 }: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2${classname}`}>
      <Image
        source={{uri:`${poster}` }}
        className="shadow-lg rounded-tr-2xl w-full h-full"
        style={{
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250
        }}
        resizeMode="cover"
      ></Image>
    </Pressable>
  )
};