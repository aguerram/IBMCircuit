import React, { Component } from 'react'
import { Container } from 'native-base';
import IndexScreen from './screens/IndexScreen';
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
        let Screen = <IndexScreen/>
        switch(this.state.page)
        {
            case 1:<IndexScreen/>;break;
        }
        return (<Container>
            <IndexScreen/>
        </Container>);
    }
}
 
export default MainComponent;