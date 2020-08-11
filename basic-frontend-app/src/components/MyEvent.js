import React, { Component } from 'react';
import {Table, Card, Button, Layout, Dropdown} from 'element-react';
import 'element-theme-default';
import { logDOM } from '@testing-library/react';
import axios from 'axios';

class MyEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          columns: [
            {
              label: "Event name",
              prop: "title",
              width: 180
            },
            {
              label: "Category",
              prop: "category",
              width: 180
            },
            {
              label: "Link",
              prop: "link"
            }
          ],
          data_my: [{
            title: 'Work Out',
            category: 'WELLNESS',
            link: 'http://www.aaa.com'
            }
          ],
          data_sub: [{
            title: 'Afternoon Tea',
            category: 'COFFEE',
            link: 'http://www.bbb.com'},
              {
              title: 'Study Group',
              category: 'STUDY',
              link: 'http://www.ccc.com,'
            },
          ]
        }
      }

    componentDidMount(){
        axios.get("http://localhost:8181/api/")
            .then((res)=>{
                this.setState({
                    users:res.data,
                    id:0,
                    name:'',
                    email:'',
                    password:''
                })
            })
    }

      componentDidMount() {
        axios.get('/events')
          .then(res => {
            this.setState({ events: res.data });
            console.log(this.state.events);
          });
        console.log(111111)
      }

      onClick= () => {
        this.props.history.push("/create")

      }

      render() {
        return (
          <div>
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="space-around">
              <h2  font-family={"Arial"}>My Created Events</h2>
            </Layout.Row>
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="space-around">
            <Table
              style={{width: '80%'}}
              columns={this.state.columns}
              data={this.state.data_my}
              border={true}
            />
            </Layout.Row >
            <p></p>
            <Layout.Row type = "flex" className="row-bg" justify="space-around">
              <Button plain={true} size = "medium" type="info"  onClick = {this.onClick.bind(this)}>Add Event</Button>
            </Layout.Row >
            <p></p>
            <p></p>
            <br></br>
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="space-around">
              <h2>My Subscribed Events</h2>
            </Layout.Row >
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="space-around">
            <Table
              style={{width: '80%'}}
              columns={this.state.columns}
              data={this.state.data_sub}
              border={true}
            />
            </Layout.Row>
          </div>
        )
      }
}

export default MyEvent;