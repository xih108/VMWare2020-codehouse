import React, { Component } from 'react';
import {Layout, Menu, Button} from 'element-react';
import { NavLink, withRouter} from 'react-router-dom';
 
class Navigation extends Component{
    constructor(props) {
        super(props);

        this.props = {
            username: "aaaa"
        }
        
    }

    onSelect(index) {
        console.log(this.props.history)
        this.props.history.push({
          pathname: index,
        });
    }


    render() {
        return (
            <div>
            <div className="line"></div>
               
                <Menu  defaultActive="/" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                    <Menu.Item index= "/">Home</Menu.Item>
                    <Menu.Item index= "/myevent">MyEvent</Menu.Item>
                </Menu>
                
            </div>  
    );
    }
}
 
export default withRouter(Navigation);