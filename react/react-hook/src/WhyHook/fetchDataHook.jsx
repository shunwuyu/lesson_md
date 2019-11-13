// Hooks
import { useState, useEffect } from "react";

function useFetchDataHook() {
  const [data, setData] = useState({});
  const fetchData = () => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/comment/music?id=186016&limit=1')
    .then(res => res.json())
    .then(res => {
      console.log('res----', res)
      setData(res)
    })
  };

// Effect，这里相当于componentDidMount
  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetchDataHook;
