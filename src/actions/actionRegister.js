import {types} from '../types/types';
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";


            //  registro Asincrono 
export const registroEmailPasswordNombre = (email,password,name) => {
    return(dispatch) => {// el dispatch es para guardar en el store
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})
            //La linea deabajo es para adicional si quieres llevar la información a Redux 
           dispatch(registerSincrono(user.email,user.uid,user.displayName))
            console.log(user);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const registerSincrono = (email,password,name) => {

    return{
       type: types.register,
       payload: {
           email,
           password,
           name
       }
    }
}

