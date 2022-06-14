import { View, Text, StyleSheet,TouchableOpacity,ImageBackground,TextInput,TouchableWithoutFeedback, Keyboard, FlatList, Image  } from 'react-native'
import React ,{ useState }  from 'react'
import {useNavigation} from '@react-navigation/native'

export default function ShowClassPage({route,navigation}) {
    const {item}=route.params;
    return (
        <View style={styles.background}>
            <ImageBackground style={styles.image}source={item.image}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{item.title}</Text>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.containerDataClass}>
                    <View style={styles.dataClass}>
                        <Text style={styles.textDataClass1}>Duration</Text>
                        <Text style={styles.textDataClass2}>{item.duration} min</Text>
                    </View>
                    <View style={styles.dataClass}>
                        <Text style={styles.textDataClass1}>Time</Text>
                        <Text style={styles.textDataClass2}>mo/we 20:00</Text>
                    </View>
                    <View style={styles.dataClass}>
                        <Text style={styles.textDataClass1}>Teacher</Text>
                        <Text style={styles.textDataClass2}>{item.teacher}</Text>
                    </View>
                </View>
                <View style={styles.containerDataClass}>
                    <Text style={styles.textDataClass1}> Description</Text>
                    <View style={styles.viewDescription}>
                        <Text style={styles.textDataClass3}>{item.description}</Text>
                    </View>
                </View>


            </View>
        </View>
    )
    }
const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor:"#121212",
        flexDirection:"column",
        justifyContent:"center",
    },
    image:{
        flex: 1,
        resizeMode:"contain",
        width: '100%',
        justifyContent:"space-between",
        
    },
    container:{
        flex: 1.5,
        flexDirection:"column",
    },
    title:{
        color: 'white',
        fontSize:25,
        fontWeight:'bold',
        bottom:5,
        left:5,
        textTransform:"uppercase",
        
    },
    backButton:{
        height:60,
        width:60,
        backgroundColor:'rgba(150, 150, 150, 0.7)',
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        top:100,
        left:25,
    },
    containerDataClass:{
        padding:10,
        paddingBottom:25,

    },
    dataClass:{
        flexDirection:"row",

    },
    textDataClass1:{
        color:'white',
        fontSize:22,
        marginRight:25,
    },
    textDataClass2:{
        color:'#FE7230',
        fontSize:22,
        marginRight:25,
    },
    textDataClass3:{
        color:'white',
        fontSize:13,
    },
    viewDescription:{
        backgroundColor:'#24272C',
        height:"55%",
        width:"95%",
        borderRadius:30,
        left:8,
        padding:15,
    }


    })