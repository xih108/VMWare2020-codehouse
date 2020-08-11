import React, { Component } from 'react';
import {Carousel,Input, Card, Button, Layout, Dropdown} from 'element-react';
import 'element-theme-default';
import { logDOM } from '@testing-library/react';
import p1 from '../assets/covid.jpg';
import p2 from '../assets/wfh.jpeg';
import p3 from '../assets/lonliness.jpg';
import p4 from '../assets/life.jpeg';
import axios from 'axios';

class Present extends Component {
    constructor(props) {
        super(props);
    }

    onClick= () => {
        this.props.history.push("/home")
    }

    render() {
        return (
            <div className="demo-3 medium" align={"left"}>
                <Carousel interval="10000" arrow="always" height={500} >
                    {
                        [[p1, "Covid-19 Outbreaks All Over the World"],
                         [p2, "Required to Work From Home"],
                         [p3, "Suffer from Lonliness and Depression"],
                         [p4, "Explore Events   Enjoy Life !"]].map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <Layout.Row type = "flex" className="row-bg" justify="space-around" align="middle">
                                        <Layout.Col span={6}>
                                            <img src={item[0]} className="image"/>
                                        </Layout.Col>
                                        <Layout.Col span={6} offset={6}>
                                            <div style={{"font-size":50}}>{item[1]}</div>
                                        </Layout.Col>
                                    </Layout.Row>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <br></br>
                <br></br>
                <br></br>
                <Layout.Row type = "flex" className="row-bg" justify="space-around" align="middle">
                    <Button size={"large"} onClick = {this.onClick.bind(this)}>Explore Events</Button>
                </Layout.Row>
            </div>
        )
    }
}

export default Present;