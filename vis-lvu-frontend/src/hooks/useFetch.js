import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchVideos(){
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchVideos();
       }, [])
       
  return (
    <div>useFetch</div>
  )
}
