import React from 'react';
import logo from './logo.svg';
import TouchableOpacity from './common/touchableOpacity/touchableOpacity';
import Progress from './common/progress/Progress';
import './App.css';

function App() {
  return (
    <div className="App">
      <TouchableOpacity onClick={() => {
        console.log('test');
      }}>
        购买
      </TouchableOpacity >
      <div style={{marginTop: 20}}>
        
      </div>
      <Progress progress={0.3}/>
    </div>
  );
}

export default App;
