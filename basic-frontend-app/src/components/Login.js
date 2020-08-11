import React, {Component} from 'react';
import {Button, Form, Input, Layout} from 'element-react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            id: 0,
            name: '',
            password: ''
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8181/api/")
            .then((res)=>{
                this.setState({
                    users:res.data,
                    id:0,
                    name:'',
                    password:''
                })
            })
    }

    onSubmit(evenet,id){
        console.log(id)
        evenet.preventDefault();
        if(id===0){
            axios.post("http://localhost:8181/api/",{
                name:this.state.name,
                password:this.state.password
            }).then(()=>{
                this.componentDidMount();
            })
        }else{
            axios.put("http://localhost:8181/api/",{
                id:id,
                name:this.state.name,
                password:this.state.password
            }).then(()=>{
                this.componentDidMount();
            })
        }
        this.props.history.push("/")
    }


    onChange(key, value) {
        this.state[key] = value;
        const { id, name, password } = this.state;
        this.forceUpdate();
    }

    render(){
        return (
            <div>
                <Layout.Row type = "flex" className="row-bg" justify="space-around">
                    <h2>User Login</h2>
                </Layout.Row>
                <Layout.Row type = "flex" className="row-bg" justify="space-around">
                    <Layout.Col span ="8">
                    <Form model={this.state}  onSubmit={(e) => this.onSubmit(e, this.state.id)}>
                    <Form.Item label="Name">
                        <Input value={this.state.name} onChange={this.onChange.bind(this, 'name')}></Input>
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input value={this.state.password} onChange={this.onChange.bind(this, 'password')}></Input>
                    </Form.Item>
                    <br></br>
                    <Layout.Row type = "flex" className="row-bg" justify="space-around">
                        <Form.Item>
                            <Button type="primary" nativeType="submit">Login</Button>
                        </Form.Item>
                    </Layout.Row>
                    </Form>
                    </Layout.Col>
                </Layout.Row>
                {/*<div className="col s6">*/}
                {/*    <table>*/}
                {/*        <thead>*/}
                {/*        <tr>*/}
                {/*            <th>Name</th>*/}
                {/*            <th>Password</th>*/}
                {/*            <th>Edit</th>*/}
                {/*            <th>Delete</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}


                {/*        <tbody>*/}
                {/*        {*/}
                {/*            this.state.users.map(user =>*/}
                {/*                <tr key={user.id}>*/}
                {/*                    <td>{user.name}</td>*/}

                {/*                    <td>{user.password}</td>*/}
                {/*                </tr>*/}
                {/*            )*/}
                {/*        };*/}


                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default Login;