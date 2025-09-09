import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                let response = await axios.get(url)
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.log("error", error);
                setError(error)
            }
        }
        fetchProducts()
    }, [url])
    return { data, error, loading }
}

export default useFetch;