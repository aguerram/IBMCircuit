import React, { Component } from "react";
import { Text, View } from "react-native";
import dim from "../constants/Layout";
import { Marker } from "react-native-maps";
import { MapView } from "expo";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ height: dim.window.height }}>
        <Text>Map View</Text>
        <MapView
        showsUserLocation={true}
        followsUserLocation={true}
          style={{ alignSelf: "stretch", height: dim.window.height }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title={<Text></Text>}
            description={"Desc Find Me"}
            onPress={()=>{
              alert("Clicked component")
            }}
          />
        </MapView>
      </View>
    );
  }
}

export default HomeScreen;
