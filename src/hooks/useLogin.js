import { useContext, useState } from "react";
import { AuthActions, AuthContext } from "../contexts/AuthContext";
import { endpoint } from "../utils/util";
import useRequest from "./useRequest";

export default function useLogin() {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const { error: axiosError, inProgress, send } = useRequest();
    const { dispatch } = useContext(AuthContext);

    const login = async (username, password) => {
        const res = await send(endpoint('/login'), 'POST', { username, password });

        if (axiosError) {
            console.log(axiosError);
            return;
        }

        if (res.data.error) {
            setError(res.data.error);
            setUser(null);
            return;
        }

        setUser(res.data);
        setError(null);

        dispatch({ type: AuthActions.LOGIN, payload: res.data });
        localStorage.setItem('user', JSON.stringify(res.data));

        return user;
    };

    return { error, user, inProgress, login };
}