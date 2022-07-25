const INITIAL_STATE = {
    currentTheme: "light",
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