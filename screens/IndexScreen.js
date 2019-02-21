import React, { Component } from 'react';
import { Content } from 'native-base';
import HeaderComp from '../components/HeaderComp';

class IndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<Content>
        <Text>Hello world</Text>
        </Content>);
    }
}
 
export default IndexScreen;