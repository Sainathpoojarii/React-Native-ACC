import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const [name, setName] = useState('')
  const [nameVerify, setNameVerify] = useState(false)
  const [email, setEmail] = useState('')
  const [emailVerify, setEmailVerify] = useState(false)
  const [mobile, setMobile] = useState('')
  const [mobileVerify, setMobileVerify] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordVerify, setPasswordVerify] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation();

  function handleName(e) {
    const nameVar = e.nativeEvent.text
    setName(nameVar)
    setNameVerify(false)
    if (nameVar.length > 1) {
      setNameVerify(true)
    }
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text
    setEmail(emailVar)
    setEmailVerify(false)
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(emailVar)) {
      setEmail(emailVar)
      setEmailVerify(true)
    }
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text
    setMobile(mobileVar)
    setMobileVerify(false)
    if (/[6-9]{1}[0-9]{9}/.test(mobileVar)) {
      setMobile(mobileVar)
      setMobileVerify(true)
    }
  }
  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text
    setPassword(passwordVar)
    setPasswordVerify(false)
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordVar)) {
      setPassword(passwordVar)
    setPasswordVerify(true)
    }
  }

  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
}; 


  return (
    <View className="bg-white h-full w-full">
      <StatusBar style='light' />
      <Image className="h-full w-full absolute" source={require('../assets/images/6.png')} />
      {/* <View className="flex-row justify-around w-full absolute">
        </View> */}
      {/* title and form */}
      <View className="h-full w-full flex justify-around  pb-25">
        {/* title*/}
        <View className="flex items-center mx-4 space-y-4 ">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="flex items-center">
            <Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
              SignUp
            </Text>
          </Animated.View>

          {/* form */}
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="FULL NAME" placeholderTextColor={'crimson'} onChange={e => handleName(e)} />
          </Animated.View>
          {name.length < 1 ? null : nameVerify ? null : (<Text className=" text-rose-700">Name should be more than one charcter</Text>)}
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="EMAIL" placeholderTextColor={'crimson'} onChange={e => handleEmail(e) }/>
          </Animated.View>
          {email.length < 1 ? null : emailVerify ? null : (<Text className=" text-rose-700">Enter Vaild email</Text>)}

          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="MOBILE" placeholderTextColor={'crimson'} maxLength={11} onChange={e=>handleMobile(e)} />
          </Animated.View>
          {mobile.length < 1 ? null : mobileVerify ? null : (<Text className=" text-rose-700">Enter Vaild number</Text>)}
          
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="PASSWORD" placeholderTextColor={'crimson'} onChange={e=>handlePassword(e)} />
          </Animated.View>
          {password.length < 1 ? null : passwordVerify ? null : (<Text className=" text-rose-700">Enter Vaild password</Text>)}

          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
            <TouchableOpacity className=" w-full bg-rose-700 p-3 rounded-2xl mb-3 ">
              <Text className=" text-xl font-bold text-white text-center"onPress={() => navigation.navigate('Login')} >SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}