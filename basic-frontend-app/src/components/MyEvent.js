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
              prop: "date",
              width: 180
            },
            {
              label: "Host",
              prop: "name",
              width: 180
            },
            {
              label: "Category",
              prop: "address"
            }
          ],
          data: [{
            date: '2016-05-02',
            name: 'a',
            address: 'b'
          }, {
            date: '2016-05-04',
            name: 'a',
            address: 'b'
          }, {
            date: '2016-05-01',
            name: 'a',
            address: 'b'
          }, {
            date: '2016-05-03',
            name: 'a',
            address: 'b'
          }]
        }
      }

      componentDidMount() {
        axios.get('/events')
          .then(res => {
            this.setState({ events: res.data });
            console.log(this.state.events);
          });
      }

      onClick= (e) => {
        console.log(this.props.history);
        this.props.history.push("/create/")
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
              data={this.state.data}
              border={true}
            />
            </Layout.Row >
            <p></p>
            <Layout.Row type = "flex" className="row-bg" justify="space-around"> 
              <Button plain={true} size = "large" type="info"  onClick = {this.onClick.bind(this)}>Add Event</Button>
            </Layout.Row >
            <p></p>
            <p></p>
            <br></br>
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="space-around"> 
              <h2>My Subscripted Events</h2>
            </Layout.Row >
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="space-around"> 
            <Table
              style={{width: '80%'}}
              columns={this.state.columns}
              data={this.state.data}
              border={true}
            />
            </Layout.Row>
          </div>
        )
      }
}
 
export default MyEvent;