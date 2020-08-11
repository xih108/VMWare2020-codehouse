import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'element-theme-default';


import Home from './components/Home';
import Myevent from './components/MyEvent';
import Create from './components/Create';
import Present from './components/Present';
import Login from './components/Login';
import Navigation from './components/Navigation';


class App extends Component {
    render() {
        return (
                <div>
                    <BrowserRouter>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Present} exact/>
                        <Route path="/home" component={Home}/>
                        <Route path="/myevent" component={Myevent}/>
                        <Route path="/create" component={Create}/>
                        {/*<Route path="/present" component={Present}/>*/}
                        <Route path="/login" component={Login}/>
                        {/*<Route path="/login" component={Login}/>*/}
                        {/* <Route path="/create1" component={Create1}/> */}
                    </Switch>
                    </BrowserRouter>
                </div>
        );
    }
}

export default App;

