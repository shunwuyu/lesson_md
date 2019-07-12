// Hooks
import { useState, useEffect } from "react";

function FetchDataHook() {
  const [data, setData] = useState(null);
  const fetchData = () => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/comment/music?id=186016&limit=1')
    .then(res => res.json())
    .then(res => {
      setData(res)
    })
  };

// Effect，这里相当于componentDidMount
  useEffect(() => {
    fetchData();
  });

  return data && data.code;
};

export default FetchDataHook;
