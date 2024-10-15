import { Text, View, StyleSheet, TouchableOpacity,Image, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import {login} from "@services/login"

export default function Login() {
    const navigation = useNavigation();

    const [userForm, setUserForm] = useState({
        mail:null,
        password:null
    })

    const updateForm = async(input,value) =>{
        setUserForm(prevState => ({
            ...prevState,
            [input]:value
        }))
    }

    const loginUser = async() =>{
        console.log(userForm)
        const { exito, mensaje} = await login(userForm)
        if(!exito)
            return console.log("error")

        navigation.replace("dashboard")
    }


  return (
    <View style={styles.body}>
        <View style={styles.header}>
            <View style={styles.headerFoto}>
                <Image style={styles.headerImage} resizeMode="contain" source={require("@images/logo.png")} />
            </View>
        </View>


        <View style={styles.loginSection}>

            <View>
                <Text style={styles.loginInputTitle}>correo electronico:</Text>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={text => {updateForm('mail',text)}}
                    value={userForm.mail}
                    placeholder="tu correo electronico"
                    placeholderTextColor="rgba(0, 0, 0, 0.3)"
                />
            </View>

            <View>
                <Text style={styles.loginInputTitle}>contraseña:</Text>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={text => {updateForm('password',text)}}
                    value={userForm.password}
                    placeholder="tu correo contraseña"
                    placeholderTextColor="rgba(0, 0, 0, 0.3)"
                    secureTextEntry={true} autoCapitalize="none"
                />
            </View>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => loginUser()}>
                <Text style={styles.buttonTitle}>Login</Text>
            </TouchableOpacity>

            <View style={styles.registerSection}>
                <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
                <TouchableOpacity>
                    <Text style={styles.registerText}>Registro</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    </View>

  );
}

// 5E68E6   

const styles = StyleSheet.create({

    body:{
        backgroundColor:"#E5EAF3",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

    },

    // HEADER

    header:{
        flex:8,
        width:"100%",

    },

    headerTitle:{
        color:"#E5EAF3",
        fontWeight:"500",
        fontSize:30,
        width:"90%",
        paddingBottom:120,
        paddingStart:50,
        paddingEnd:25,
    },

    headerFoto:{
        flex: 1,
    },
   
    headerImage:{
        width:"100%",
    },

    // LOGIN SECTION
    loginSection:{
        flex: 8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#5E68E6",
        width:"100%",

        borderTopEndRadius:30,
        borderTopStartRadius:30,
    },


    loginInput:{
        width:300,
        height: 60,
        marginBottom:24,
        backgroundColor:"#F7F7F7",
        opacity: .9,
        fontWeight:"400",
        fontSize:16,
        borderRadius:10,

        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    loginInputTitle:{
        color:"#fff",
        fontWeight:"600",
        fontSize:14
    },


    buttonSection:{
        flex: 2,
        justifyContent:"center",
        alignItems:"center",
    },

    buttonLogin:{
        justifyContent:"center",
        alignItems:"center",
        width:300,
        height:50,
        backgroundColor:"#E5EAF3",
        borderRadius:15,
        marginBottom:10
    },

    buttonTitle:{
        color:"#07244C",
        fontWeight:"600",
        fontSize:19
    },

    registerSection:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:210,
    },

    registerText:{
        color:"#E5EAF3",
        fontWeight:"600",
    },
   

})