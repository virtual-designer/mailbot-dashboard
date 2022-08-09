import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthActions = {
    LOGIN: 1,
    LOGOUT: 1,
};

export const AuthContextReducer = (action, payload) => {
    switch (action) {
        case AuthActions.LOGIN:
            return { user: payload };
        case AuthActions.LOGOUT:
        default:
            return { user: null };
    }
};

export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(AuthContextReducer, { user: null });
    return <AuthContext.Provider value={{...state, dispatch}}>{children}</AuthContext.Provider>;
}