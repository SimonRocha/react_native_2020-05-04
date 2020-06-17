import { COUNTER_CHANGE } from '../constants'


export async function addCount(count) {
    debugger
    let retorno = await fetch("https://reqres.in/api/users?page=2", { method: 'GET'});
    let retorno_json = await retorno.json()
    debugger

    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}

export function removeCount(count_p) {
    let count = count_p -1
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}