import React from "react";

import RouterContext from "./RouterContext";

/**
 * The public API for putting history on context.
 */
class Router extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: props.history.location
    };

    // if (!props.staticContext) {
      this.unlisten = props.history.listen(location => {
        this.setState({ location });
      });
    // }
  }
  /**
   * 监听的时候，如果Router 没有 mount 先把 变化的值 存在 this._pendingLocation 
   * 等待 mount 的时候 再次 setState 变化的 location
   */

  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }

  render() {
    /**
     * 当前的 history 对象 
     * location的值
     * match： isExact: pathname === "/"
     * staticContext： flase
     */
    return (
      <RouterContext.Provider
        children={this.props.children || null}
        value={{
          history: this.props.history,
          location: this.state.location,
          staticContext: this.props.staticContext
        }}
      />
    );
  }
}


export default Router;
