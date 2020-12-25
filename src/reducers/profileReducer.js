const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    graduacao: '',
    profissao: '',
    foto_perfil:'',
    descricao_perfil: '',
    fotos_feed: [],
    localizacao: '',
    grupos:[],
    eventos: [],
    interesse_genero: '',
    idade: '',
    hobbies: [],
    matchs: [],
    errorCadastro: '',
    errorLogin: '',
}

export default function profileReducer(state = INITIAL_STATE, action) {

    switch(action.type){
        case '':
            return
        default:
            return state
    }
}
  