import { useState, useEffect } from "react";
import axios from "axios";

function useFetch({ url, method, datas = null }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        if (localStorage.token) {
            axios.defaults.headers.common = {
                Authorization: `${localStorage.token}`,
            };
        }
        setData(null);
        setError(null);
        axios({
            method: method,
            url: url,
            data: datas,
        })
            .then((res) => {
                setLoading(false);
                res.data && setData(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError("An error occurred.", err);
            });
    }, [url, datas, method]);

    return { data, loading, error };
}

export default useFetch;
