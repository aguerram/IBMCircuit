import React, { Component } from 'react'
import { Content, Text } from 'native-base';
import HeaderComp from '../components/HeaderComp'
class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (<Content>
        <HeaderComp title="About us"/>
            <Text>Hello world</Text>
        </Content>);
    }
}
 
export default AboutScreen;