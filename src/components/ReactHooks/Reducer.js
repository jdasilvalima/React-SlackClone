export const initialState = {
    user : null,
    //user : 'jade',
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = ( state, action ) => {
    console.log(action);

    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

//export default because we want to use reducer outside from this file
export default reducer;