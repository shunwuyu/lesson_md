import React from "react";
import { Switch,  Route,} from "react-router-dom";
import HookMovie from '../components/HookMovie';


export default function Routes(){
    return (
        <div>
            <Switch>
                <Route path="/">
                    <HookMovie/>
                </Route>

            </Switch>
        </div>
    )
}