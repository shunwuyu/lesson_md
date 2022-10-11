import React, { useContext, useState } from "react";
const LogContext = React.createContext();

function LogProvider({ children }) {
    const [logs, setLogs] = useState([]);
    const addLog = (log) => setLogs((prevLogs) => [...prevLogs, log]);
    return (
        <LogContext.Provider value={{ logs, addLog }}>
        {children}
        </LogContext.Provider>
    );
}

function Logger1() {
    const { addLog } = useContext(LogContext);
    console.log('Logger1 render')
    return (
        <>
        <p>一个能发日志的组件1</p>
        <button onClick={() => addLog("logger1")}>发日志</button>
        </>
    );
}

function Logger2() {
    const { addLog } = useContext(LogContext);
    console.log('Logger2 render')
    return (
        <>
            <p>一个能发日志的组件2</p>
            <button onClick={() => addLog("logger2")}>发日志</button>
        </>
    );
}

function LogsPanel() {
    const { logs } = useContext(LogContext);
    return logs.map((log, index) => <p key={index}>{log}</p>);
}
  
export default function App() {
    return (
      <LogProvider>
        {/* 写日志 */}
        <Logger1 />
        <Logger2 />
        {/* 读日志 */}
        <LogsPanel />
      </LogProvider>
    );
  }

