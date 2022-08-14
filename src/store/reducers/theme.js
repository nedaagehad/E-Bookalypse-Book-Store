const INITIAL_STATE = {
    currentTheme: localStorage.getItem("theme") ? localStorage.getItem('theme') : "day",
};

export default function themeReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_THEME":
            localStorage.setItem('theme',action.payload)
            return {
                currentTheme: action.payload
            }
            default:
                return state;
    }
}