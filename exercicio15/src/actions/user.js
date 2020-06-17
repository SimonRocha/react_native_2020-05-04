import { LIST_USERS } from '../constants'


export async function listUsers() {
    let retorno = await fetch("https://reqres.in/api/users?page=2", { method: 'GET'});
    let retorno_json = await retorno.json();

    return {
        type: COUNTER_CHANGE,
        payload: retorno_json
    }
}