import {setItem , getItem} from "@lib/asyncStorage"
import {BASE_URL} from "@/src/services/env"

export const login = async(data) =>{

    try{
        console.log(data)
        // Un ejemplo de una solicitud
        // let response = await fetch(`${BASE_URL}/login`,{
        //     method:"POST",
        //     headers:{

        //     },
        //     body:data
        // })

        // const {status} = response
        // response = await response.json()
        // const {mensaje} = response
        // if(status != 200)
        //     return {exito: true, mensaje: "Solicitud acepta", mensaje }

        // const { access_token, } = response.data
        // await setItem("access_token",access_token)

        return {exito: true, mensaje: "Solicitud acepta" }


    }catch(err){
        return {exito: false, mensaje: "Esta solicitud no se pudo ejecutar."}
    }
    


}