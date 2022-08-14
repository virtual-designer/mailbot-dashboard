import { useContext, useState } from "react";
import { AuthActions, AuthContext } from "../contexts/AuthContext";
import { endpoint } from "../utils/util";
import useRequest from "./useRequest";

export default function useLogout() {
    const [error, setError] = useState(null);
    const { error: axiosError, inProgress, send } = useRequest();
    const { dispatch } = useContext(AuthContext);

    const logout = async () => {
        const res = await send(endpoint('/logout'), 'POST', {});

        if (axiosError) {
            console.log(axiosError);
            return;
        }

        if (res.data.error) {
            setError(res.data.error);
            return;
        }

        setError(null);

        dispatch({ type: AuthActions.LOGOUT });
        localStorage.removeItem('user');
    };

    return { error, inProgress, logout };
}