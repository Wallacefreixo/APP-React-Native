import firebase from 'firebase'
import base64 from 'react-native-base64';

export const modificaUsuario = (usuario) =>{
    return {
        type: 'modifica_usuario',
        payload: usuario
    }
}

export const modificaEmail = (email) =>{
    return{
        type: 'modifica_email',
        payload: email
    }
}

export const modificaSenha = (senha) =>{
    return{
        type: 'modifica_senha',
        payload: senha
    }
}

export const cadastraUsuario = ({usuario, email, senha, navigation}) =>{
    return dispatch => { 
        //dispatch Redux Thunk transform function async in sync for promises firebase
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(() => {
                let emailBase64 = base64.encode(email)//CONVERT EMAIL FOR SAVE DATABASE KEY PRIMARY FIREBASE
                
                firebase.database().ref('usuarios/'+emailBase64)
                    .push( { usuario: usuario } )//INSERT USUARIO
                    .then(() => {
                        dispatch({type: 'cadastro_usuario_sucesso'}) 
                        navigation.navigate('Main')
                    })
            })
            .catch(error => { 
                console.log(error.message)
                dispatch({ type: 'cadastro_usuario_error', payload: error.message })
            })
    }
}

export const atualizaUsuario = () =>{
    return{
        type: 'atualizar'
    }
}

export const deletaUsuario = () =>{
    return{
        type: 'deletar'
    }
}