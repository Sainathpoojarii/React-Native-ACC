import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';

export default function MainPage() {
  const navigation= useNavigation();
  return (
    <View>
      <Text>Homepage</Text>
   
    </View>
  )
}