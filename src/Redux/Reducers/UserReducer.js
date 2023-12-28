//Инициализация
const userState = {
    id: 0,
    name: '',
    email: '',
    password: '',
    isAuthenticated: false
}

const GET_USER_INFO = "GET_USER_INFO";

//UI
const UPDATE_NAME_FIELD = "UPDATE_NAME_FIELD";
const UPDATE_EMAIL_FIELD = "UPDATE_EMAIL_FIELD";
const UPDATE_PASSWORD_FIELD = "UPDATE_PASSWORD_FIELD";
const UPDATE_ID_FIELD = "UPDATE_ID_FIELD";
const UPDATE_IS_AUTHENTICATED_FIELD = "UPDATE_IS_AUTHENTICATED_FIELD"

export const userReducer = (state = userState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return { state: action.payload }
        //UI
        case UPDATE_NAME_FIELD:
            return { ...state, name: action.payload }
        case UPDATE_EMAIL_FIELD:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD_FIELD:
            return { ...state, password: action.payload }
        case UPDATE_ID_FIELD:
            return { ...state, id: action.payload }
        case UPDATE_IS_AUTHENTICATED_FIELD:
            return { ...state, isAuthenticated: action.payload }

        default:
            return state;
    }
}

export const getUserInfoAction = (payload) => ({ type: GET_USER_INFO, payload });
export const updateNameFieldAction = (payload) => ({ type: UPDATE_NAME_FIELD, payload });
export const updateEmailFieldAction = (payload) => ({ type: UPDATE_EMAIL_FIELD, payload });
export const updatePasswordFieldAction = (payload) => ({ type: UPDATE_PASSWORD_FIELD, payload });
export const updateIdFieldAction = (payload) => ({ type: UPDATE_ID_FIELD, payload });
export const updateIsAuthenticatedAction = (payload) => ({ type: UPDATE_IS_AUTHENTICATED_FIELD, payload });
