
import { useState, useEffect } from 'react';
import axios from 'axios';

export const FechData = (url) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        await axios(url)
          .then((res) => setResponse(res))
          .catch(error => console.log('error: ', error))
      };
      fetchData();
    }, [url]);
    return response;
  };


export const PostData = (url, data) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios(url, data);
        setResponse(result);
    };
    fetchData();
  }, [url, data]);
  return response;
};
