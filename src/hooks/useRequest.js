import axios from "axios";
import { useState } from "react";

export default function useRequest() {
    const [error, setError] = useState(null);
    const [inProgress, setInProgress] = useState(false);
    const [response, setResponse] = useState(null);
 
    const send = async (url, method = 'GET', data = undefined, headers = {}) => {
        setInProgress(true);
        
        try {
            const res = await axios({
                url,
                method,
                data,
                headers: {
                    'Accept': 'application/json',
                    ...headers
                }
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