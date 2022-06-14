import { View, Text, StyleSheet,TouchableOpacity,ImageBackground,TextInput,TouchableWithoutFeedback, Keyboard  } from 'react-native'
import React ,{ useState }  from 'react'
import {useNavigation} from '@react-navigation/native'

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/cbumBG.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>FIT DREAMS.</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.form}>
          <TextInput style={styles.input} keyboardType="email-address" placeholder={"Email"} placeholderTextColor="white" onChangeText={(email) => setEmail(email)}/>
          <TextInput style={styles.input} secureTextEntry={true} placeholder={"Password"} placeholderTextColor="white"  onChangeText={(password) => setPassword(password)}/>
          <TouchableOpacity style={styles.loginBtn}>
            <Text onPress={()=>navigation.navigate('ClassesPage')} style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('SignPage')} style={styles.signUpBtn}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  image:{
    flex: 1,
    flexDirection: "column"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    top:140,
    width: 120,
    left:70,
  },
  form:{
    flex:1,
    flexDirection: "column",
    top:"28%",
  },
  input:{
    fontWeight:"bold",
    fontSize:18,
    left:100,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:3,
    width: "50%",
    borderWidth: 1,
    padding: 10,
    borderColor:"white",
    color:"white",
    textAlign:"center",
    paddingBottom:0,
    marginTop:"5%",
  },
  loginBtn:{
    width: "60%",
    borderRadius:20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    left:80 ,
    top:'12%',
    backgroundColor: "#FE7230",
  },
  loginText:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
  },
  signUpBtn:{
    alignItems:"center",
    top:'30%',

  },
  signUpText:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",

  }
})