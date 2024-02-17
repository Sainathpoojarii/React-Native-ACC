import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, TouchableOpacity } from 'react-native'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme';
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MainPage from './components/mainPage'

export default function Home() {

  const [trending, setTrending] = useState([])
  const navigation = useNavigation();

  return (
    <View className=" flex-1 bg-rose-700 ">
      <SafeAreaView className="mt-2 mb-3">
        <StatusBar style="light" />
        <View className=" flex-row justify-between items-center mx-4" >
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color='white' />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>G</Text>ameplex
          </Text>
          <View>
            <TouchableOpacity>
              <MagnifyingGlassIcon size="30" strokeWidth={2} color='white' />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <ShoppingCartIcon size="30" strokeWidth={2} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView className="flex-row justify-between items-center mx-2 mt-3">
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold">
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold">
            Originals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Movie')}>
          <Text  className="text-white text-xl font-bold">
            Movies
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold">
            Videos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold">
            Music
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView showVerticalScrollIndicator={false} contentContainerStyles={{ paddingBottom: 10 }}>
      <MainPage/>
      </ScrollView>
    </View>
  )
}