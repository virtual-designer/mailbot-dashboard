import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useRequest() {
    const [error, setError] = useState(null);
    const [inProgress, setInProgress] = useState(false);
    const [response, setResponse] = useState(null);
    const { user } = useContext(AuthContext);
 
    const send = async (url, method = 'GET', data = undefined, headers = {}) => {
        setInProgress(true);
        
        try {
            const newheaders = {
                'Accept': 'application/json',
                ...headers
            };

            if (user && user.token) {
                newheaders.Authorization = 'Bearer ' + user.token;
            }

            const res = await axios({
                url,
                method,
                data,
                headers: newheaders
            });
    
            if (res.status > 199 && res.status < 400) {
                setResponse(res.data);
                setError(null);
                setInProgress(false);
                return res;
            }
            else {
                setError({ message: 'Non 2xx status code detected' });
            }
        }
        catch (e) {
            console.log(e);
            setError({ message: 'Exception', e });
        }

        setInProgress(false);
    };

    return { error, response, inProgress, send };
}