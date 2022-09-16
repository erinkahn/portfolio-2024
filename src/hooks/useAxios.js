import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useAxios(url) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const loading = !data && !error;

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch(error => {
            setError(error);
            console.log(error, 'oops, the request is not working at the moment')
        });
    }, [url]);

    return {
        data,
        loading,
        error
    }
}