import React, { Component } from 'react';
import {Form, Input, imageUrl, Upload, Layout, DatePicker, TimePicker, Switch, Checkbox, Button, Radio} from 'element-react'
import 'element-theme-default';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        userId:'',
        name:'',
        link:'',
        startTime: null,
        endTime: null,
        description: '',
        category: null,
      }

    };
  }


  onSubmit(event, id) {
    console.log(id)
    event.preventDefault();

    if(id===0){
        axios.post("http://localhost:8181/api/",{
            name:this.state.name,
            link:this.state.link,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: this.state.description,
            category: this.state.category
        }).then(()=>{
            this.componentDidMount();
        })
    // }else{
    //     axios.put("http://localhost:8181/api/",{
    //         id:id,
    //         name:this.state.name,
    //         link:this.state.link,
    //         startTime: this.state.startTime,
    //         endTime: this.state.endTime,
    //         description: this.state.description,
    //         category: this.state.category
    //     }).then(()=>{
    //         this.componentDidMount();
    //     })
    }
      console.log(this.state)
    this.props.history.push("/myevent")
  }

  onChange(key, value) {
    this.state.form[key] = value;
    const { name, link, startTime, endTime, description, category} = this.state;
    this.forceUpdate();
  }

    onClick= () => {
        this.props.history.push("/myevent")
    }


  render() {
    return (
      <div>
      <Layout.Row type = "flex" className="row-bg" justify="space-around">
            <h2>Create Events</h2>
      </Layout.Row>
      <Layout.Row type = "flex" className="row-bg" justify="space-around">
      <Layout.Col span ="12">
      <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
        <Form.Item label="Name">
          <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
        </Form.Item>
        <Form.Item label="Link">
          <Input value={this.state.form.link} onChange={this.onChange.bind(this, 'link')}></Input>
        </Form.Item>
        <Form.Item label="Start Time">
          <Input value={this.state.form.startTime} onChange={this.onChange.bind(this, 'startTime')}/>
        </Form.Item>
        <Form.Item label="End Time">
          <Input value={this.state.form.endTime} onChange={this.onChange.bind(this, 'endTime')}></Input>
        </Form.Item>
        <Form.Item label="Category" >
            <Radio.Group value={this.state.form.category} onChange={this.onChange.bind(this, 'category')}>
                <Radio value="WELLNESS">WELLNESS</Radio>
                <Radio value="GAMING">GAMING</Radio>
                <Radio value="STUDY">STUDY</Radio>
                <Radio value="COFFEE">COFFEE</Radio>
                <Radio value="RANDOM">RANDOM</Radio>
            </Radio.Group>
        </Form.Item>
        <Form.Item label="Description">
          <Input type="textarea" value={this.state.form.description} onChange={this.onChange.bind(this, 'description')}></Input>
        </Form.Item>
          <Layout.Row type = "flex" className="row-bg" justify="space-around">
          <Form.Item>
          <Button type="primary" nativeType="submit">Create</Button>
          <Button onClick = {this.onClick.bind(this)}>Cancel</Button>
        </Form.Item>
         </Layout.Row >
      </Form>
      </Layout.Col>
      </Layout.Row >
      </div>
    )
  }

}

export default Create;
