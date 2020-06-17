import { LIST_USERS } from '../constants'

const initialState = {
    user_state: {}
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST_USERS:
            return {
                ...state,
            }
        default: 
            return state
    }

}

export default userReducer;