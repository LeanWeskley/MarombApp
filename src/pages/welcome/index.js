import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import logo from '../../assets/logo.png'
export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image animation="flipInY" source={logo} style={{width:'100%'}} resizeMode="contain"/>
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>App para marombas</Text>
                <Text style={styles.text}>Proibido a entrada de pessoas que desligam o ventilador da academia e veia que só faz uma série em cada aparelho</Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#38a69d',
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop:'28',
        marginBottom:12
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position:'absolute',
        backgroundColor:'#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})