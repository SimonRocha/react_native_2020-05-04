import { LIST_USERS } from '../constants'

const initialState = {
    user_state: {
        users: []
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST_USERS:
            return {
                ...state,
                users: action.payload.data
            }
        default: 
            return state
    }

}

export default userReducer;