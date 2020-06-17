import { COUNTER_CHANGE } from '../constants';

export function changeCount(count) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => { debugger; console.log(json); })    
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}