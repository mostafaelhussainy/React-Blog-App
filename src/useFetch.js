import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);                // the value of the data is null so we can update it when we first render the page
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)                                         //npx json-server --watch data/db.json --port 8000 to watch the data at the json file
        .then(res => {
          if (!res.ok) {                                 // throw error if the respose was sent but the ok statues isn't true "no data sent"
            throw Error('could not fetch the data for this resource');
          }
          return res.json()
        })
          .then(data=> {
            setData(data);
            setIsPending(false);                             // removing the loading message
          })
          .catch(err => {
              setError(err.message);                         // updating the state of the error to the message to be rendered to the page
              setIsPending(false);                           // removing the loading message
            }
          )
    }, [url])                                                // dependency: the url -> so it first update the state only on the intial render  
  
    return { data, isPending, error }
}
 
export default useFetch;