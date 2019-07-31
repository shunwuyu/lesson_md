import React from "react";
import { Router } from "../react-router/index";
import { createBrowserHistory as createHistory } from "history";

/**
 * The public API for a <Router> that uses HTML5 history.
 */
class BrowserRouter extends React.Component {
  // HTML5 history API 
  history = createHistory(this.props);
  /**
   * {
    * length: stack length,
    * location: window.location,
    * action: 当前导航的动作
    * listen： 监听变化，
    * 导航相关的
    * go: 
    * push: 
    * Blocking：确认离开？
   * }
   */
  
  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default BrowserRouter;
