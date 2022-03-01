import { typesReseta } from "../types/types";


const initialState = {
    listaReseta: [],
    
}


export const resetaReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesReseta.register:
            return {
                listaReseta: [action.payload]
            }
        case typesReseta.list:
            return {
                listaReseta: [...action.payload]
            }
       
        case typesReseta.delete:
            return {
                listaReseta: state.listaReseta.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}
