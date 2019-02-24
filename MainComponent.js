import React, { Component } from "react";
import { Container } from "native-base";
import IndexScreen from "./screens/IndexScreen";
import MenuScreen from "./screens/MenuScreen";
import HeaderComp from "./components/HeaderComp";
import MapScreen from "./screens/MapScreen";
import { Router, Stack, Scene ,Modal} from "react-native-router-flux";
import AboutScreen from './screens/AboutScreen';
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
      title:'Home'
    };
  }
  render() {
    let screen = <IndexScreen />;
    return (
      <Container>
        <Router>
          <Stack hideNavBar key="root">
            <Scene key="index" component={IndexScreen} title="Home" />
            <Scene initial key="map" component={MapScreen} title="Map" />
            <Scene key="about" component={AboutScreen} />
          </Stack>
        </Router>
      </Container>
    );
  }
}

export default MainComponent;
