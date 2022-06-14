import { View, Text, StyleSheet,TouchableOpacity,ImageBackground,TextInput,TouchableWithoutFeedback, Keyboard, FlatList, Image  } from 'react-native'
import React ,{ useState }  from 'react'
import {useNavigation} from '@react-navigation/native'


export default function ClassesPage() {
    const navigation = useNavigation();
    const [className, setClassName] = useState("");
    const DATA = [
        {
            id: '1',
            title: 'First Class',
            image: require('../../assets/ramon.jpeg'),
            duration: 5000,
            teacher: 'Ramon',
            description: 'Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro ',
            
        },
        {
            id: '2',
            title: 'Second Class',
            image: require('../../assets/ramon.jpeg'),
            duration: 5000,
            teacher: 'Ramon',
            description: 'Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro '

        },
        {
            id: '3',
            title: 'Third Class',
            image: require('../../assets/ramon.jpeg'),
            duration: 5000,
            teacher: 'Ramon',
            description: 'Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro '
        },
        {
            id: '4',
            title: 'Fourth Class',
            image: require('../../assets/ramon.jpeg'),
            duration: 5000,
            teacher: 'Ramon',
            description: 'Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro '
        },
        {
            id: '5',
            title: 'Fifhth Class',
            image: require('../../assets/ramon.jpeg'),
            duration: 5000,
            teacher: 'Ramon',
            description: 'Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro '
        },
        {
            id: '6',
            title: 'Sixth Class',
            image: require('../../assets/ramon.jpeg'),
            duration: 5000,
            teacher: 'Ramon',
            description: 'Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro '
        },
        {
            id: '7',
            title: 'Seventh Class',
            image: require('../../assets/ramon.jpeg'),
            duration: 5000,
            teacher: 'Ramon',
            description: 'Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro Treininho de ombro '
        },

      ];

    return (
        <View style={styles.background}>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ImageBackground style={styles.image}source={require('../../assets/cbum2.png')}>
                    <Text style={styles.title}>CLASSES</Text>
                </ImageBackground>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="search for classes..."
                        placeholderTextColor="white"
                        onChangeText={(value) => setClassName(value)}
                    />
                    <FlatList
                        removeClippedSubviews
                        data={DATA}
                        keyExtractor={item=>item.id}
                        horizontal
                        renderItem={({item})=>
                            <View style={styles.classesRow}>
                                <TouchableOpacity onPress={()=>navigation.navigate('ShowClassPage',{item})} style={styles.classContainer}>
                                    <Image source = {item.image} style={styles.imageClass}/>
                                    <Text style={styles.classContainerText}>{item.title}</Text>
                                    <Text style={styles.classContainerText2}>{item.duration} min</Text>
                                </TouchableOpacity>
                            </View>
                        }

                    />
                
                
                </View>
            </TouchableWithoutFeedback>
            
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
        resizeMode:"center",
        width: '100%',
        justifyContent:"flex-end",
        
    },
    container:{
        flex: 1.5,
    },
    title:{
        color: 'white',
        fontSize:23,
        fontWeight:'bold',
        bottom:55,
        left:45,
        
    },
    input:{
        bottom:10,
        backgroundColor:"#24272C",
        width:'75%',
        height:'10%',
        left:45,
        borderRadius:25,
        paddingLeft:40,
        fontSize:12,
    },
    classesRow:{
        height:"50%",
    },
    classContainer:{
        backgroundColor:"#24272C",
        width:180,
        height:'100%',
        borderRadius:20,
        top:45,
        margin:10,
        marginTop:0,
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
    },
    classContainerText:{
        color:'white' ,
        fontSize:20,
        margin: 25 ,
        marginTop:5,
        marginBottom:0,
    },
    classContainerText2:{
        color:'white',
    },
    imageClass:{
        height:"80%",
        width:"80%",
        margin:18,
        marginBottom:0,
        borderRadius:20,
        marginTop:0,
    }

    })