import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import * as React from "react";
import { HelloComponent } from './hello';
import { NameEditComponent } from "./nameEdit";

function App() {
  const [name, setName] = React.useState("initialName");
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <HelloComponent  userName={name}/>
      <NameEditComponent userName={name} onChange={setUsernameState} />
    </div>
  )
}

export default App
