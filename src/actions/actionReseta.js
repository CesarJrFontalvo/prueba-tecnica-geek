
import  { typesReseta} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs, query,where,updateDoc,doc,addDoc} from "@firebase/firestore";


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
// BUSQUEDA------------------------------------------------

// export const listSearch = (searchText) => {
    
//     return async (dispatch) => {
       
//         const querySnapshot =  collection(db,"registroPeliculas");
//         const q = query(querySnapshot,where('nombre','==',searchText))
//         // const querySnapshot = await getDocs(collection(db, "registroPeliculas"),where('nombre','==',searchText));
//         const pelicula = [];
//         const datos = await getDocs(q);
        
//         datos.forEach((doc) => {
//             pelicula.push({
//                 // uid:doc.id,
//                 ...doc.data()
//             })
//         });
//         dispatch(listSe(pelicula));
//     }
// }

// export const listSe = (search) => {
//     return {
//         type: typesRegistroPelicula.listBusqueda,
//         payload: search
//     }
// }

// ------REGISTRAR---------------------------------------------------------


export const registeIngredienteAsync = (newIngrediente) => {

    return(dispatch) => {

        addDoc(collection(db,"registroPeliculas"),newIngrediente)
        .then(resp => {
            dispatch(registeIngredienteSync(newIngrediente))
             dispatch(listResetaAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registeIngredienteSync = (listaReseta) => {
    return{
        type: typesReseta.register,
        payload: listaReseta
    }

}
// -------------------------------------------------------------

// ---------ELIMINAR----------------------------------------------------------
// export const deleteEmployeeAsync = (nombre) =>{
//     return async(dispatch) => {

//         const estCollection = collection(db,"registroPeliculas");
//         const q = query(estCollection,where("nombre","==",nombre))
       
//         const datos = await getDocs(q);
//         datos.forEach((docu) => {
//             deleteDoc(doc(db,"registroPeliculas",docu.id));
//         })
//         dispatch(deleteSync(nombre));
//         dispatch(listEmployeeAsync())
//     }
// }

// export const deleteSync = (nombre) => {
//     return{
//         type: typesRegistroPelicula.delete,
//         payload: nombre
//     }
// }
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