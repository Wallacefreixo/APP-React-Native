import firebase from 'firebase';

//DESENVOLVER FUNCAO
export const atualizaUsuario = () =>{     
    return{
        type: 'atualizar'
    }
}
//DESENVOLVER FUNCAO
export const deletaUsuario = () =>{
    return{
        type: 'deletar'
    }
}
//DESENVOLVER FUNCAO
export const desativaUsuario = () =>{
    return{
        type: 'desativar'
    }
}