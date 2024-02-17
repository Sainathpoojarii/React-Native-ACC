import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function MovieLists() {
  const navigation= useNavigation();
  return (
    <View>
      <Text>homepage</Text>
      <TouchableOpacity className=" w-full bg-rose-700 p-3 rounded-2xl mb-3 ">
        <Text className=" text-xl font-bold text-white text-center" onPress={() => navigation.navigate('Movie')} >Movies</Text>
      </TouchableOpacity>
    </View>
  )
}