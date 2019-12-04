import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import PureDemo from './PureDemo';

// import Artists from './Artists';

// 必须返回一个 Promise，
// 该 Promise 需要 resolve 一个 defalut export 的 React 组件
const Artists = lazy(() => import('./Artists'));
const Performers = lazy(() => import('./performers'))
// 若在 App 组件渲染期间，包含艺人组件的模块没有加载完，
// 就必须显示一些提示等待的 fallback 内容 -- 
// 比如一个加载指示器，下面是用 Suspense 组件完成这一目的的语法:
// 你可以将 Suspense 组件置于懒加载组件之上的任何位置。
// 你甚至可以用一个 Suspense 组件包裹多个懒加载组件
class App extends React.Component {
    render() {
        // return (
        //     <div className="App">
        //         <Suspense fallback={<div>Loading...</div>}>
        //             <Artists />
        //             <Performers />
        //         </Suspense>
        //     </div>
        // );
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <div>
                        <Link to="/">Artists</Link>
                        <br/>
                        <Link to="/about">About</Link>
                        <PureDemo />
                    </div>
                    <Switch>
                        <Route exact path="/" component={Artists} />
                        <Route path="/about" component={Performers} />
                        
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
