const INITIAL_STATE = {
    currentTheme: "day",
};

export default function themeReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                currentTheme: action.payload
            }
            default:
                return state;
    }
}