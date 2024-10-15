import { Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Bienvenido() {
const navigation = useNavigation();

  return (
    <View style={styles.body}>
        <View style={styles.header}>
            <View style={styles.headerFoto}>
                <Image style={styles.headerImage} resizeMode="contain" source={require("@images/soluciones.png")} />
            </View>


            <Text style={styles.headerTitle}>Vive una experiencia única con nuestra aplicación</Text>
        </View>

        <View style={styles.buttonSection}>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("login")}>
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
        backgroundColor:"#353A40",
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
        bottom:"40%",
        width:"100%",
        
    },

    // LOGIN SECTION

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
        backgroundColor:"#5E68E6",
        borderRadius:15,
        marginBottom:10
    },

    buttonTitle:{
        color:"#E5EAF3",
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