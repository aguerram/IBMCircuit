import React, { Component } from 'react'
import { Container } from 'native-base';
import IndexScreen from './screens/IndexScreen';
import MenuScreen from './screens/MenuScreen'
import HeaderComp from './components/HeaderComp';
/**
 * ## page state page numbers, screen equivalant
 * 1- IndexScreen
 * 2- MenuScreen
 * 3- SuggestPlacesScreen
 * 4- AboutScreen
 * 5- RepportScreen
 * 6- MapScreen
 * 7- MoreInfoAboutPlaceScreen
*/

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            page:1
        }
    }
    render() { 
        let screen = <IndexScreen/>
        switch(this.state.page)
        {
            case 1:screen=<IndexScreen/>;break;
            case 2:screen=<MenuScreen/> ;break;
        }
        return (<Container>
            <HeaderComp/>
            <IndexScreen/>
        </Container>);
    }
}
 
export default MainComponent;