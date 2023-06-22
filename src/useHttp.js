import React, { useEffect, useState } from 'react';

const useHttp = (props) => {
  console.log('props', props);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const opt = await fetch(props);
    const result = await opt.json();

    setData((prevState) => {
      return [...result.products];
    });
  };
  return data;
};

export default useHttp;
