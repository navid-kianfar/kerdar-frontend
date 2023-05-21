import {
    APP_READY
} from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case APP_READY:
            return {
                ...state,
                loading: false,
                user: {}
            };
        default:
            console.log("NO_ACTION_REGISTERED");
            return state;
    }
};

export default reducer;