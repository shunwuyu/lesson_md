import React, {useState, useEffect} from 'react';
import './App.css';
import {ipcRenderer , remote} from 'electron'

function App() {
    const [remoteCode, setRemoteCode] = useState('');
    const [localCode, setLocalCode] = useState('');
    // 0未连接，1已控制，2被控制
    const [controlText, setControlText] = useState(''); 

    const startControl = (remoteCode) => {
        ipcRenderer.send('control', remoteCode)
    }
    const login = async () => {
        let code = await ipcRenderer.invoke('login')
        setLocalCode(code)
    }

    const handleControlState = (e, name, type) => {
        let text = ''
        if(type === 1) {
            text = `正在远程控制${name}`
        } else if(type === 2) {
            text = `被${name}控制中`
        } else {
            text = ''
        }
        setControlText(text)
    }

    useEffect(() => {
		login()
        ipcRenderer.on('control-state-change', handleControlState)
        return () => {
            ipcRenderer.removeListener('control-state-change', handleControlState)
        }
    }, [])

  const handleContextMenu = (e) => {
        e.preventDefault()
	const { Menu, MenuItem  } = remote
	const menu = new Menu()
	menu.append(new MenuItem({ label: '复制', role: 'copy' }))
	menu.append(new MenuItem({ label: '分享到微信', click: (menuItem, win, keyboardEvent)=>{
		ipcRenderer.send('share-to-wechat', localCode)
	}}))
        menu.popup()
    }
    
    return (
        <div className="App">
            {
                controlText === '' ? <>
                    <div>你的控制码 <span onContextMenu={(e) => handleContextMenu(e)}> {localCode} </span></div>
                    <input type="text" value={remoteCode} onChange={(e) => setRemoteCode(e.target.value)}/>
                    <button onClick={() => {startControl(remoteCode)}}>确认</button>
                </> : <div>{controlText}</div>
            }
        </div>
    );
}

export default App;