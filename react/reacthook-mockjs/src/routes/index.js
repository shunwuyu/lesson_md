import React from "react";
import { Switch,  Route,} from "react-router-dom";
import HookMovie from '../components/HookMovie';
import HookInfo from '../components/HookInfo';

export default function Routes(){
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HookMovie}>
                </Route>
                <Route path="/info" component={HookInfo}>
                </Route>
            </Switch>
        </div>
    )
}