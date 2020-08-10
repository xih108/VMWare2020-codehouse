import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'element-theme-default';


import Home from './components/Home';
import Myevent from './components/MyEvent';
import Create from './components/Create';
import Navigation from './components/Navigation';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/myevent" component={Myevent}/>
                        <Route path="/create" component={Create}/>
                        {/* <Route path="/create1" component={Create1}/> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;