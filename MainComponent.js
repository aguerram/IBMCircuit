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
      page: 1,
      title:'Home'
    };
    this.changePage = this.changePage.bind(this);
    this.initChildScene = this.initChildScene.bind(this);
  }
  changePage(page, ...prop) {
    this.setState({ page: page, prop: prop });
  }
  initChildScene(link)
  {
    this.setState({ title:link  })
  }
  render() {
    let screen = <IndexScreen />;
    switch (this.state.page) {
      case 1:
        screen = <IndexScreen />;
        break;
      case 2:
        screen = <MenuScreen />;
        break;
    }
    return (
      <Container>
        <HeaderComp title={this.state.title}/>
        <Router>
          <Stack hideNavBar key="root">
            <Scene initial key="index" component={IndexScreen} title="Home" />
            <Scene key="map" component={MapScreen} title="Map" />
            <Scene initComp={this.initChildScene('About us')} key="about" component={AboutScreen} />
          </Stack>
        </Router>
      </Container>
    );
  }
}

export default MainComponent;
