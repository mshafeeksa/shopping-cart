import { useEffect, useState } from "react";
import { fetchUrl } from "../data";
import DisplayItem from "../helper-components/Display-grid-item";

export default function DisplayCategory({category}) {
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
                let filteredJson = json.filter((item)=> item.category === category)
                setData(filteredJson);
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
            {loading && <div className="loading-screen"> <h1 className="loading-text">Loading...</h1> </div>}
            {error && <div className="error-screen"> <h1 className="error-text">{`There was an error while loading - ${error}`}</h1> </div>}
            {data &&  <div className="items-container grid grid-cols-2 lg:grid-cols-3 w-full md:w-4/5 lg:w-11/12 2xl:w-3/5 mx-auto my-16 gap-6 justify-items-center">
                {data.map((item) => {
                    return (<DisplayItem key={item.id} item={item}/>)
                })}
            </div>}
        </div>
    );
}