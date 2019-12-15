import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVICE_URL = process.env.REACT_APP_SERVICE_URL;

export const GetGames = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${SERVICE_URL}/api/games`)
        .then((res) => setResponse(res))
        .catch(error => console.log('error: ', error))
    };
    fetchData();
  }, []);
  return response;
};

export const GetGame = (name) => {
  const [response, setResponse] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${SERVICE_URL}/api/game/${name}`)
        .then((res) => setResponse(res))
        .catch(error => console.log('error: ', error))
    };
    fetchData();
  }, [name]);
  return response;
};

export const DeleteGame = async (name) => {
  await axios.delete(`${SERVICE_URL}/api/game/${name}`)
    .then((res) => console.log(res))
    .catch(error => console.log('error: ', error))
}

export const PostGame = async (data) => {
  await axios.post(`${SERVICE_URL}/api/game`, data)
    .then((res) => res)
    .catch(error => console.log('error: ', error))
}

