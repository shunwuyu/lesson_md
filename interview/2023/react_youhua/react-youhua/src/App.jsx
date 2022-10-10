import React, { useCallback, useContext, useState } from "react";

const LogStateContext = React.createContext();
const LogDispatcherContext = React.createContext();

function LogProvider({ children }) {
  const [logs, setLogs] = useState([]);
  const addLog = useCallback((log) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  }, []);
  return (
    <LogDispatcherContext.Provider value={addLog}>
      <LogStateContext.Provider value={logs}>
        {children}
      </LogStateContext.Provider>
    </LogDispatcherContext.Provider>
  );
}

function Logger1() {
  const addLog = useContext(LogDispatcherContext);
  console.log("Logger1 render");
  return (
    <>
      <p>一个能发日志的组件1</p>
      <button onClick={() => addLog("logger1")}>发日志</button>
    </>
  );
}

function Logger2() {
  const addLog = useContext(LogDispatcherContext);
  console.log("Logger2 render");
  return (
    <>
      <p>一个能发日志的组件2</p>
      <button onClick={() => addLog("logger2")}>发日志</button>
    </>
  );
}

function LogsPanel() {
  const logs = useContext(LogStateContext);
  console.log("LogsPanel render");
  return logs.map((log, index) => <p key={index}>{log}</p>);
}

export default function App() {
  return (
    <LogProvider>
      <div className="app">
        <section>
          <Logger1 />
          <Logger2 />
        </section>
        <section>
          <LogsPanel />
        </section>
      </div>
    </LogProvider>
  );
}
