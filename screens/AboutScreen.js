import React, { Component } from 'react'
import { Content, Text } from 'native-base';

class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
     this.props.initComp()
    }
    
    render() { 
        return (<Content>
            <Text>Hello world</Text>
        </Content>);
    }
}
 
export default AboutScreen;