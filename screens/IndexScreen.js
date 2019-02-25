import React, { Component } from "react";
import { Content, Button, Icon } from "native-base";
import HeaderComp from "../components/HeaderComp";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import dim from "../constants/Layout";

const pad = 15

class IndexScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <View style={{ margin: 10 }}>
          <Button
            block
            light
            onPress={() => {
              Actions.map();
            }}
          >
            <Icon name="map" />
            <Text>Circuit 1</Text>
          </Button>
        </View>

        <View style={{ margin: pad }}>
          <Button
            block
            light
            onPress={() => {
              Actions.map();
            }}
          >
            <Icon name="map" />
            <Text>Circuit 2</Text>
          </Button>
        </View>

        <View style={{ margin: pad }}>
          <Button
            block
            light
            onPress={() => {
              Actions.map();
            }}
          >
            <Icon name="map" />
            <Text>Circuit 3</Text>
          </Button>
        </View>
        <View style={{margin:pad}}>
          <Button
           block
           light
            onPress={() => {
              Actions.map();
            }}
          >
            <Icon name="map"/>
            <Text>Circuit 4</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

export default IndexScreen;
