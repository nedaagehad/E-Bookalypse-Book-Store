const INITIAL_STATE = {
    currentLang: "En",
};

export default function langReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_LANG":
            return {
                currentLang: action.payload
            }
            default:
                return state;
    }
}