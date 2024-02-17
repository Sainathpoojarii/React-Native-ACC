import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from '../../theme'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function UpComingMovieLists({ title, data }) {
  var{width,height}=Dimensions.get('window')
  let movieName = 'Jeene Nahi Dunga'
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center ">
        <Text className=" text-white text-xl" >{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text} className="text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          data.map((item, index) => {
            return (
              <TouchableWithoutFeedback key={index} onPress={() => ('Movielists', item)}>
                <View className="space-y-1 mr-4" >
                  <Image
                  className="rounded-3xl" style={{width:width*0.33,height:height*0.22}} source={require('../../assets/images/6.png')} />
                <Text className="text-white ml-1 ">{movieName.length>16?movieName.slice(0,14)+'...':movieName}</Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }

      </ScrollView>
    </View>
  )
}