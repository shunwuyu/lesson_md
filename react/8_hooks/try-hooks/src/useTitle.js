import { useEffect } from 'react'; // 代替生命周期函数

const useTitle = (title) => {
  useEffect(() => {
    document.title = title; //设置了标题
  }, [])
  return
}

export default useTitle;