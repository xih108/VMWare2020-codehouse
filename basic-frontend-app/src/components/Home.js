import React, { Component } from 'react';
import {Input, Card, Button, Layout, Dropdown} from 'element-react';
import 'element-theme-default';
import { logDOM } from '@testing-library/react';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import axios from 'axios';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events:[],
            id:0,


        }
        // this.props = {
        //   imgSrc: image,
        // };

    }

    // componentDidMount(){
    //     axios.get("http://localhost:8181/api/events")
    //         .then((res)=>{
    //             this.setState({
    //                 events:res.data,
    //                 id:0,
    //                 name:'',
    //                 email:'',
    //                 password:''
    //             })
    //         })
    // }

    // submit(evenet,id){
    // console.log(id)
    // evenet.preventDefault();
    // if(id===0){
    //     axios.post("http://localhost:8181/api/",{
    //         name:this.state.name,
    //         email:this.state.email,
    //         password:this.state.password
    //     }).then(()=>{
    //         this.componentDidMount();
    //     })
    // }else{
    //     axios.put("http://localhost:8181/api/",{
    //         id:id,
    //         name:this.state.name,
    //         email:this.state.email,
    //         password:this.state.password
    //     }).then(()=>{
    //         this.componentDidMount();
    //     })
    // }
// }
    handleIconClick(ev) {

    }

    render() {
        return (
        <div>
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="space-around"> 
            <h2>Events</h2>
            </Layout.Row >
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="center"> 
            <Layout.Col span={ 9} offset={ -2}>
            <Input
                icon="search"
                placeholder="Search"
                onIconClick={this.handleIconClick.bind(this)}
                />
            </Layout.Col>
            <Layout.Col span={ 9} offset={ 2}>
            <Dropdown menu={(
                <Dropdown.Menu>
                    <Dropdown.Item>WELLING</Dropdown.Item>
                    <Dropdown.Item>GAMING</Dropdown.Item>
                    <Dropdown.Item>STUDYING</Dropdown.Item>
                    <Dropdown.Item>COFFEE</Dropdown.Item>
                    <Dropdown.Item>RANDOM</Dropdown.Item>
                </Dropdown.Menu>
                )}
                >
                <span className="el-dropdown-link">
                    Choose Category<i className="el-icon-caret-bottom el-icon--right"></i>
                </span>
            </Dropdown>
            </Layout.Col>
            </Layout.Row>
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="center" > 
                <Layout.Col span={9} offset={-2}>
                <h3>Recommanded Events</h3>
                </Layout.Col>
                <Layout.Col span={9} offset={2}>
                {/* <h3>Recommanded Events</h3> */}
                </Layout.Col>
            </Layout.Row>
            <Layout.Row type = "flex" className="row-bg" justify="center" >
                <Layout.Col span={ 9 } offset={-2}>
                    <Card bodyStyle={{ padding: 14 }}>
                    <Layout.Row type = "flex" className="row-bg" justify="center"> 
                    <img src={p3} className="image" width="300" height="180"/>
                    </Layout.Row>
                    <div style={{ padding: 14 , "text-align":"center"}}>
                        <div>Title: Study Group</div>
                        <div>Host Student: Nancy</div>
                        <div>Category: STUDY</div>
                        <div>Description: Study groups have helped students who
                            have trouble being in a large group setting. Each group is unique
                            and draws on the backgrounds and abilities of its members to determine
                            the material.</div>
                        <div>Time Slots: </div>
                        <div className="bottom clearfix">
                        <div className="block">
                            <span className="wrapper">
                                <Button plain={true} size="small" type="info" >1:00pm - 2:00pm</Button>
                                <Button plain={true} size="small" type="info">2:00pm - 3:00pm</Button>
                                <div></div>
                                <Button plain={true} size="small" type="info">3:00pm - 4:00pm</Button>
                                <Button plain={true} size="small" type="info">4:00pm - 5:00pm</Button>
                            </span>
                        </div>
                        
                        </div>
                    </div>
                    </Card>
                </Layout.Col>
                <Layout.Col span={ 9 } offset={ 2 }>
                    <Card bodyStyle={{ padding: 14 }}>
                    <Layout.Row type = "flex" className="row-bg" justify="center"> 
                    <img src={p2} className="image" width="300" height="180"/>
                    </Layout.Row> 
                    <div style={{ padding: 14 , "text-align":"center"}}>
                        <div>Title: Video Game</div>
                        <div>Host Student: Mike</div>
                        <div>Category: GAMING</div>
                        <div>Description: Video games are electronic games played on a video screen (normally a television,
                            a built-in screen when played on a handheld machine, or a computer).

                     .</div>
                        <div>Time Slots: </div>
                        <div className="bottom clearfix">
                        <div className="block">
                            <span className="wrapper">
                                <Button plain={true} size="small" type="info" >8:00am - 9:00am</Button>
                                <Button plain={true} size="small" type="info">2:00pm - 3:00pm</Button>
                                <div></div>
                                <Button plain={true} size="small" type="info">7:00pm - 8:00pm</Button>
                                <Button plain={true} size="small" type="info">8:00pm - 9:00pm</Button>
                            </span>
                        </div>
                        
                        </div>
                    </div>
                    </Card>
                </Layout.Col>
            </Layout.Row>   
            <br></br>
            <Layout.Row type = "flex" className="row-bg" justify="center" > 
                <Layout.Col span={9} offset={-2}>
                {/*<h3>Other Events</h3>*/}
                </Layout.Col>
                <Layout.Col span={9} offset={2}>
                {/* <h3>Recommanded Events</h3> */}
                </Layout.Col>
            </Layout.Row>
            <Layout.Row type = "flex" className="row-bg" justify="center"> 
                <Layout.Col span={ 9 } offset={ -2}>
                    <Card bodyStyle={{ padding: 14 ,"text-align":"center"}}>
                    <Layout.Row type = "flex" className="row-bg" justify="center"> 
                    <img src={p1} className="image" width="300" height="180"/>
                    </Layout.Row> 
                    <div style={{ padding: 14 }}>
                        <div>Title: Work Out</div>
                        <div>Host Student: Amy</div>
                        <div>Category: WELLNESS</div>
                        <div>Description:
                            This event aims to increase awareness towards women's health and wellness, and propose
                            some solutions help women enjoy healthy and happy life.
                            To increase public awareness and understanding of the impact of healthy life
                            choices on women's health.</div>
                        <div>Time Slots: </div>
                        <div className="bottom clearfix">
                        <div className="block">
                            <span className="wrapper">
                                <Button plain={true} size="small" type="info" >5:00pm - 6:00pm</Button>
                                <Button plain={true} size="small" type="info">8:00pm - 9:00pm</Button>
                                {/*<div></div>*/}
                                {/*<Button plain={true} size="small" type="info">3:00pm - 4:00pm</Button>*/}
                                {/*<Button plain={true} size="small" type="info">4:00pm - 5:00pm</Button>*/}
                            </span>
                        </div>
                        
                        </div>
                    </div>
                    </Card>
                </Layout.Col>
                <Layout.Col span={ 9 } offset={ 2 }>
                    <Card bodyStyle={{ padding: 14 }}>
                    <Layout.Row type = "flex" className="row-bg" justify="center"> 
                    <img src={p4} className="image" width="300" height="180"/>
                    </Layout.Row> 
                    <div style={{ padding: 14 ,"text-align":"center"}}>
                        <div>Title: Afternoon Tea</div>
                        <div>Host Student: Shirley </div>
                        <div>Category: COFFEE</div>
                        <div>Description: Afternoon tea evolved as a mini meal
                            to stem the hunger and anticipation of an evening meal at 8pm. Afternoon Tea is a meal composed of sandwiches
                            (usually cut delicately into 'fingers'),
                            scones with clotted cream and jam, sweet pastries and cakes. </div>
                        <div>Time Slots: </div>
                        <div className="bottom clearfix">
                        <div className="block">
                            <span className="wrapper">
                                <Button plain={true} size="small" type="info" >2:00pm - 3:00pm</Button>
                                <Button plain={true} size="small" type="info">3:00pm - 4:00pm</Button>
                                {/*<div></div>*/}
                                {/*<Button plain={true} size="small" type="info">3:00pm - 4:00pm</Button>*/}
                                {/*<Button plain={true} size="small" type="info">4:00pm - 5:00pm</Button>*/}
                            </span>
                        </div>
                        
                        </div>
                    </div>
                    </Card>
                </Layout.Col>
            </Layout.Row>   
            <br></br>         
        </div>
    );
    }
}
 
export default About;