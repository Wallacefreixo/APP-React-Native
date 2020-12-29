import {
    MODIFICA_NOME,
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERROR,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERROR,
} from '../actions/types'


const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    errorCadastro: '',
    errorLogin: '',
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case MODIFICA_EMAIL:
            return {...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', email: '', senha: '', errorCadastro: '', errorLogin: '' }
        case CADASTRO_USUARIO_ERROR:
            return { ...state, errorCadastro: action.payload }
        case LOGIN_USUARIO_SUCESSO:
            return { ...state, email: '', senha: '', errorLogin: '', errorCadastro: '' }
        case LOGIN_USUARIO_ERROR:
            return { ...state, errorLogin: action.payload }
        default:
            return state
    }
}
  