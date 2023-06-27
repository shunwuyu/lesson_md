import { useState, useEffect } from 'react'
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      // 从 localStorage 中获取保存的值，如果没有则使用初始值
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    });
  
    useEffect(() => {
      // 每当 value 更新时，保存到 localStorage
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };

export default useLocalStorage;