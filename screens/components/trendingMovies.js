import { View, Text ,Image, Dimensions} from 'react-native'
import React, { useEffect } from 'react'
import Carousel from 'react-native-snap-carousel'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

var{width,height}=Dimensions.get('window')
export default function TrendingMovies({ data }) {
 const navigation=useNavigation();
  handleClick=()=>{
    navigation.navigate('Movielists')
  }
  return (
    <View className="mb-8">
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  )
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image source={require('../../assets/images/6.png')}
        style={{
          width: width*0.6,
          height: height*0.4
        }}
        className="rounded-3xl"

      />
    </TouchableWithoutFeedback>
  )
}