const INITIAL_STATE = {
    usuario: '',
    email: '',
    senha: '',
    errorCadastro: ''
}

export default function usuarioReducer(state = INITIAL_STATE, action) {
    if(action.type == 'modifica_usuario'){
        return { ...state, usuario: action.payload }
    }
    if(action.type == 'modifica_email'){
        return {...state, email: action.payload }
    }
    if(action.type == 'modifica_senha'){
        return { ...state, senha: action.payload }
    }
    if(action.type == 'cadastro_usuario_sucesso'){
        return { ...state, usuario: '', email: '', senha: '', errorCadastro: '' }
    }
    if(action.type == 'cadastro_usuario_error'){
        return { ...state, errorCadastro: action.payload }
    }
    return state
}
  