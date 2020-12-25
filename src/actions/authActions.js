import firebase from 'firebase'
import base64 from 'react-native-base64';
import {
    MODIFICA_NOME,
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERROR,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERROR,
} from './types'

export const modificaNome = (nome) =>{
    return {
        type: MODIFICA_NOME,
        payload: nome
    }
}

export const modificaEmail = (email) =>{
    return{
        type: MODIFICA_EMAIL,
        payload: email
    }
}

export const modificaSenha = (senha) =>{
    return{
        type: MODIFICA_SENHA,
        payload: senha
    }
}

export const cadastraUsuario = ({nome, email, senha, navigation}) =>{
    return dispatch => { 
        //dispatch Redux Thunk transform function async in sync for promises firebase
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(() => {
                let emailBase64 = base64.encode(email)//CONVERT EMAIL FOR SAVE DATABASE KEY PRIMARY FIREBASE

                firebase.database().ref(`usuarios/${emailBase64}`)
                    .push( { //INSERT USUARIO
                        nome: nome,
                        graduacao: '',
                        profissao: '',
                        foto_perfil:'',
                        descricao_perfil: '',
                        fotos_feed: '',
                        localizacao: '',
                        grupos: '',
                        eventos: '',
                        interesse_genero: '',
                        idade: '',
                        hobbies: '',
                        matchs: '',
                    } )
                    .then(() => {
                        dispatch({type: CADASTRO_USUARIO_SUCESSO}) 
                        navigation.navigate('Main')
                    })
            })
            .catch(error => { 
                dispatch({ type: CADASTRO_USUARIO_ERROR, payload: error.message })
            })
    }
}

export const autenticaUsuario = ({ email, senha, navigation}) => {
    return dispatch => { 
        //dispatch Redux Thunk transform function async in sync for promises firebase
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(usuario => { 
                dispatch({type: LOGIN_USUARIO_SUCESSO}) 
                navigation.navigate('Main')
            })
            .catch(error =>  {
                dispatch({ type: LOGIN_USUARIO_ERROR, payload: error.message })
            })
    }
}



