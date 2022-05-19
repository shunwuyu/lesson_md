import { useState } from 'react'

const Dog = () => {
    let [isRunning, setIsRunning] = useState(false);
    let [isBarking, setIsBarking] = useState(false);
    
    const handleClickDog = (event) => {
        console.log(event);
      setIsBarking(true);
      setIsRunning(true);
      setTimeout(() => {
        setIsBarking(false);
        setIsRunning(false);
      }, 2000)
    }
    return (
      <div onClick={handleClickDog}>
        <div onClick={handleClickDog}>Dog</div>
        <p>{isBarking && '汪汪汪'}</p>
        <p>{isRunning && '跑跑跑'}</p>
      </div>
    )
  }

export default Dog