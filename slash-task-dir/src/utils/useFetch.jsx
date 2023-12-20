import { useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [status, setSt] = useState(0);
  const [message, setMess] = useState('');

  fetch(url, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data.data);
      setSt(data.statusCode);
      setMess(data.message);
    });

  return { status, data, message };
};

export { useFetch };
