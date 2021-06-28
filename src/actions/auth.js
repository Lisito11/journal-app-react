import { types } from './../types/types';

//Esta funcion regresa un objeto con la accion de login y el usuario
export const login = (uid, displayName) => ({
        type:types.login,
        payload:{
            uid, displayName
        }
    })