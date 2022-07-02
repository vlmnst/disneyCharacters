import React, {useState} from "react";
import Mickey from '../../assets/img.png'
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import CustomImput from "./CustomImput";
import CustomButton from "./CustomButton";
const Login = () => {
  const { height } = useWindowDimensions()

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  const onSignInPressed = () => {
    console.warn('Sign in')
  }

  const onForgotPassword = () => {
    console.warn('onForgotPasswordPressed')
  }
return(
    <View style={styles.conteiner}>
        <Image 
        source={Mickey} 
        style={[styles.image, {height: height * 0.3}]} 
        resizeMode='contain'/>
        <CustomImput 
        placeholder='Username' 
        value={username} 
        setValue={setUsername}/>
        <CustomImput 
        placeholder='Password' 
        value={pass}  
        setValue={setPass}
        secureTextEntry={true}
        />

        <CustomButton 
        text='LOGIN' 
        onPress={onSignInPressed}/>
        <CustomButton 
        text='Forgot Password' 
        onPress={onForgotPassword}
        type='TERTIARY'
        />
        <CustomButton
        text='Sign in with Facebook'
        bgColor='#E7EAF4'
        fgColor='#4765A9'
        />
        <CustomButton
        text='Sign in with Google'
        bgColor='#FAE9EA'
        fgColor='#DD4D44'
        />
        <CustomButton 
        text='Dont have an account? Create one' 
        onPress={onForgotPassword}
        type='TERTIARY'
        />
    </View>
 )
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FBFC'
  },
  image: {
    width: '70%',
    maxHeight: 100,
    maxWidth: 300
  },
 
})
export default Login