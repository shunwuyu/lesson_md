import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Color } from "./model/color";

import {
  SidebarComponent,
  ColorBrowser,
  ColorPicker
} from './components';

type BasicProps = {
  message: string;
  count: number;
  disabled: boolean;
  names: string[];
  status: "waiting" | "success" // 联合类型
}

const Child = (props:BasicProps) => {
  const {message, count, disabled, names, status} = props
  return (
    <div>
      {
        message  
      }
      {
        count
      }
      {
        disabled
      }
      {
        names
      }
      {
        status
      }
    </div>
  )
}

function App() {
  const [isVisible, setVisible] = React.useState(false);
  const [color, setColor] = React.useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  });
  return (
    <div className="App">
      {/* <Child message="111" count={2} disabled={true} names={['tom', 'jerry']} status="waiting"/> */}
      <SidebarComponent isVisible={isVisible}>
      </SidebarComponent>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor}/>
      <div style={{ float: "right" }}>
        <button onClick={() => setVisible(!isVisible)}>Toggle Sidebar</button>
      </div>
    </div>
  );
}

export default App;
