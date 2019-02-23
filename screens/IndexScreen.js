import React, { Component } from 'react';
import { Content, Button } from 'native-base';
import HeaderComp from '../components/HeaderComp';
import {Text,Image} from 'react-native'
import { Actions } from "react-native-router-flux";

class IndexScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
      
    }
    
    render() { 
        return (<Content>
        <Button onPress={()=>{
            Actions.about()
        }}><Text>Hello world</Text></Button>
        
        <Image source={require('../assets/images/marker.png')} style={{width:64,height:64}}/>
        </Content>);
    }
}
 
export default IndexScreen;