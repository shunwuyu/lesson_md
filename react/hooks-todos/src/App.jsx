import { useState, useEffect } from 'react'
import logo from './logo.svg'
import { fetchTodos } from "./api";
import TodoInput from "./todo-input";
import './App.css'
import { Spin, Tabs } from "antd";
import "antd/dist/antd.css";
import "./styles/styles.css";
import "./styles/reset.css";
import TodoList from "./todo-list";
const { TabPane } = Tabs;

function App() {
  const TAB_ALL = "all";
  const TAB_FINISHED = "finished";
  const TAB_UNFINISHED = "unfinished";
  const tabMap = {
    [TAB_ALL]: "全部",
    [TAB_FINISHED]: "已完成",
    [TAB_UNFINISHED]: "待完成"
  };
  const [activeTab, setActiveTab] = useState(TAB_ALL);
  const [placeholder, setPlaceholder] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setLoading(true)
    setPlaceholder(`在${tabMap[activeTab]}内搜索`);
  }, [activeTab]);

  useEffect(() => {
    fetchTodos({query, tab: activeTab})
      .then(data => {
        setTodos([...data.result])
        setLoading(false)
      })
  }, [activeTab, query])
  
  return (
    <>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab={tabMap[TAB_ALL]} key={TAB_ALL} />
        <TabPane tab={tabMap[TAB_FINISHED]} key={TAB_FINISHED} />
        <TabPane tab={tabMap[TAB_UNFINISHED]} key={TAB_UNFINISHED} />
      </Tabs>
      <div className="app-wrap">
        <h1 className="app-title">Todo List</h1>
        <TodoInput placeholder={placeholder} onSetQuery={setQuery} />
        <Spin spinning={loading} tip="稍等片刻~">
          <TodoList todos={todos} />
        </Spin>
      </div>
    </>
  )
}

export default App
