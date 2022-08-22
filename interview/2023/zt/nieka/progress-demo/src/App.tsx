import { useState } from 'react'
import ProgressBar from "./Progress";

function App() {
    const [step, setStep] = useState(5);
    const [total, setTotal] = useState(12);
    const [showInfo, setShowInfo] = useState(true);
    const [color, setColor] = useState('yellow');
    const decline = () => {
      let newStep = step - 1;
      if (newStep < 0) {
        newStep = 0
      }
      setStep(newStep);
    }
    const increase = () => {
      let newStep = step + 1;
      if (newStep > total) {
        newStep = total
      }
      setStep(newStep)
    }

    const declineTotal = () => {
      let newTotal = total - 1;
      if (newTotal < step) {
        newTotal = step
      }
      setTotal(newTotal);
    }

    const increaseTotal = () => {
      // let newTotal = total + 1;
      setTotal(total + 1)
    }
    const changeShowType = () => {
      setShowInfo(!showInfo);
    }
    const changeColor = () => {
      let randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16)
      setColor(randomColor)
    }
   return (
    <div className="App">
      <h2>ProgressBar Demo:</h2>     
      <div className="desc">
        <ul>
          <b>@param</b>
          <li>step?:number = 第几步(需要小于等于 total) </li>
          <li>total?: number = 完成注册总共需要的步骤（大于等于 step）</li>
          <li>showInfo?: bool = 是否需要显示百分比数字提示</li>
          <li>color?: string = 自定义进度条颜色</li>
        </ul>
        <div>
          <p>
            <button onClick={decline}>-</button>
            <button onClick={increase}>+</button>
            <label>step:</label> {step}
          </p>
          <p>
            <button onClick={declineTotal}>-</button>
            <button onClick={increaseTotal}>+</button>
            <label>total:</label> {total}
          </p>
          <p>
            <button onClick={changeShowType}>change</button>
            <label>showInfo:</label>
            {showInfo ? "显示" : "不显示"}
          </p>
          <p>
            <button onClick={changeColor}>change</button>
            <label>color:</label>
            {color || "预设黄色"}
          </p>
        </div>
      </div>
      <ProgressBar
        step={step}
        total={total}
        showInfo={showInfo}
        color={color}
      />
    </div>
  )
}

export default App
