import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, TouchableOpacity } from 'react-native'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme';
import { ScrollView } from 'react-native'
import TrendingMovies from './components/trendingMovies'
import { useNavigation } from '@react-navigation/native'
import UpcomingMoviesLists from './components/upComingMovieLists'
import Loading from './components/loading'
import {Data} from '../api/db.json'

export default function Movie() {

  const [trending, setTrending] = useState([1, 2, 3,])
  const [upComing, setUpComing] = useState([1, 2, 3,])
  const [topRated, setTopRated] = useState([1, 2, 3,])
  const [loading, setLoading] = useState(false)
  const[data,setData]=useState([])
  const navigation = useNavigation();

  const URL ="https://mocki.io/v1/783f8c69-af91-45ff-87df-e675c3f11fef"
  useEffect(()=>{
    fetch(URL).then((response)=>response.json())
    .then((json)=>setData(json.content_list))
    .catch((error)=>alert(error))
    .finally(setLoading(false));
  })


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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}  >
          <Text className="text-white text-xl font-bold">
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold">
            Originals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold">
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


      {
        loading ? (<Loading />) : (
        <ScrollView
          showVerticalScrollIndicator={false}
          contentContainerStyles={{ paddingBottom: 10 }}
          className="mt-4"
        >
          {/* trending movies and carousel */}
          <TrendingMovies data={trending} />
          {/* upcoming movies */}
          <UpcomingMoviesLists title="Upcoming" data={upComing} />
          <UpcomingMoviesLists title="Top Rated movies" data={topRated} />

        </ScrollView>)
      }


    </View>
  )
}