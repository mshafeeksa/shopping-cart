import { useEffect, useState } from "react";
import { fetchUrl } from "./data";
import Router from "./Routes";

export default function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(fetchUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then(json => {
                setData(json);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div className="app">
            {loading && <div className="loading-screen"> <h1 className="loading-text">Please wait...</h1> </div>}
            {error && <div className="error-screen"> <h1 className="error-text">{`There was an error while loading - ${error}`}</h1> </div>}
            {data && <Router />}
        </div>
    );
}