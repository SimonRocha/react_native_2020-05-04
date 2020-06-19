import { LIST_USERS, GET_USER } from '../constants'


export async function listUsers() {
    let retorno = await fetch("https://reqres.in/api/users?page=2", { method: 'GET'});
    let retorno_json = await retorno.json();

    return {
        type: LIST_USERS,
        payload: retorno_json
    }
}

export async function getUser(id) {
    let retorno = await fetch("https://reqres.in/api/users/"+id, { method: 'GET'});
    let retorno_json = await retorno.json();

    return {
        type: GET_USER,
        payload: retorno_json
    }
}