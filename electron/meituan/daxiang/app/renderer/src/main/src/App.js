import React, {useState, useEffect} from 'react';
import './App.css';
import {ipcRenderer , remote} from 'electron'
const {Menu, MenuItem} = remote 

function App() {
    const [remoteCode, setRemoteCode] = useState('');
    const [localCode, setLocalCode] = useState('');
    const [controlText, setControlText] = useState('');
    const login = async () => {
        // console.log('---------------')
        let code = await ipcRenderer.invoke('login')
        setLocalCode(code)
    }

    const startControl = (remoteCode) => {
        ipcRenderer.send('control', remoteCode)
    }

    const handleContextMenu = (e) => {
        e.preventDefault()
        const menu = new Menu()
        menu.append(new MenuItem({label: '复制', role: 'copy'}))
        menu.append(new MenuItem({ label: '分享到微信', click: (menuItem, win, keyboardEvent)=>{
            ipcRenderer.send('share-to-wechat', localCode)
        }}))
        menu.popup()
    }

    const handleControlState = (e, name, type) => {
        let text = ''
        if(type === 1) {
            text = `正在远程控制${name}`
        } else if (type === 2) {
            text = `被${name}控制中`
        } else {
            text = ''
        }
        setControlText(text)
    } 

    useEffect(() => {
        login();
        ipcRenderer.on('control-state-change', handleControlState)
        return () => {
            ipcRenderer.removeListener('control-state-change', handleControlState)
        }
    }, []); //实现性能的优化  [] useEffect在每次被调用的时候，都会“记住”这个数组参数，当下一次被调用的时候，会逐个比较数组中的元素，看是否和上一次调用的数组元素一模一样，如果一模一样，第一个参数（那个函数参数）也就不用被调用了，如果不一样，就调用那个第一个参数
    return (
        <div className="App">
            {
                controlText === '' ? <>
                    <div>你的控制码<span onContextMenu={(e) => handleContextMenu(e)}>{localCode}</span></div>
                    <input type="text" value={remoteCode} onChange={(e) => setRemoteCode(e.target.value)}/>
                    <button onClick={() => {startControl(remoteCode)}}>确认</button>
                </>
                :<div>{controlText}</div>
            }
        </div>    
    )
}

export default App;