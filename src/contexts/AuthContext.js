import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthActions = {
    LOGIN: 1,
    LOGOUT: 2,
};

export const AuthContextReducer = (state, action) => {
    switch (action.type) {
        case AuthActions.LOGIN:
            return { user: action.payload };
        case AuthActions.LOGOUT:
            return { user: null };
        default: 
            return state;
    }
};

export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(AuthContextReducer, { user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null });

    useEffect(() => {
        console.log('AuthContext Update: ', state);
    }, [state]);

    return <AuthContext.Provider value={{...state, dispatch}}>{children}</AuthContext.Provider>;
}