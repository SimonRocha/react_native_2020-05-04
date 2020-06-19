import { LIST_USERS, GET_USER } from '../constants'

const initialState = {
    user_state: {
        users: []
    }
}

const userReducer = (state = initialState, action) => {
    debugger
    switch(action.type) {
        case LIST_USERS:
            return {
                ...state,
                users: action.payload.data
            }
        case GET_USER:
            return {
                ...state,
                user_profile: action.payload.data
            }
        default: 
            return {
                ...state
            }
    }

}

export default userReducer;