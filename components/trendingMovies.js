import { View, Text } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { TouchableWithoutFeedback } from 'react-native-web'

export default function TrendingMovies({data}) {
  return (
    <View className="mb-8">
      <Text>Trending</Text>
      <Carousel
      data={data}
      renderItem={({item})=><MovieCard item={item}/>}
      firstItem={1}
      inactiveSlideOpacity={0.06}
      sliderWidth={600}
      itemWidth={400}
      slideStyle={{display:'flex',alignItems:'center'}}
      />
    </View>
  )
}

const MovieCard = ({item})=>{
  return(
    <TouchableWithoutFeedback>
      <Text className="text-white">Movie</Text>
    </TouchableWithoutFeedback>
  )
}