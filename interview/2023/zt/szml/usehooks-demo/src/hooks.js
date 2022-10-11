import { useState } from 'react';
function usehooks(options) {
    let url = options.url;
    let [data, setData] = useState({});
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(true);
    
    const send = async () => {
        setLoading(true);
        try {
            const res = await (fetch(url));
            const resJSON = await(res.json())
            // console.log(res, '/////')
            setData(resJSON);
            setLoading(false);
        } catch(err) {
            setError(err)
            setLoading(false);
        }
    }

    return {
        data,
        send,
        error,
        loading
    }
}

export default usehooks