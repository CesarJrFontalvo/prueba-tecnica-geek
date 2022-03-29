
import  { typesReseta} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs, query,where,updateDoc,doc,addDoc,deleteDoc} from "@firebase/firestore";

// REGISTRAR  PRODUCTO

export const registrarProductoAsync = (newProduct) => {

    return (dispatch) => {
        addDoc(collection(db,"Risotto"),newProduct) 
        .then(resp => {
            dispatch(registerSync(newProduct)) 
            dispatch(listResetaAsync()) 
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerSync = (listaReseta) => {
    return{
        type: typesReseta.register,
        payload: listaReseta
    }
}

// READ
export const listResetaAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "Risotto"));
        const reseta = [];
        querySnapshot.forEach((doc) => {
            reseta.push({
                ...doc.data()
            })
        });
        dispatch(listSync(reseta));
    }
}

export const listSync = (listaReseta) => {
    return {
        type: typesReseta.list,
        payload: listaReseta
    }
}

// ---------ELIMINAR----------------------------------------------------------
export const deleteIngredienteAsync = (product) =>{
    return async(dispatch) => {

        const estCollection = collection(db,"Risotto");
        const q = query(estCollection,where("product","==",product))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"Risotto",docu.id));
        })
        dispatch(deleteSync(product));
        dispatch(listResetaAsync())
    }
}

export const deleteSync = (product) => {
    return{
        type: typesReseta.delete,
        payload: product
    }
}
// ACTUALIZAR---------------------
export const editarProductoAsync = (data) => {
    console.log(data)
    return async(dispatch) => {
        console.log(data.url)
        const productsCollection = collection(db,"Risotto");
        const q = query(productsCollection,where("product", "==" ,data.product)) 

        const datos = await getDocs(q); 

        datos.forEach((docu) => {
            updateDoc(doc(db,"Risotto",docu.id), data);
        })
        dispatch(listResetaAsync());
        
    }
}