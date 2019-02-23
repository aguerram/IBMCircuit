import React, { Component } from "react";
import {
  Text,
  View,
  Image
} from "react-native";
import dim from "../constants/Layout";
import { MapView } from "expo";
import { MarkerIcon } from "../assets/images/flag-pink.png";
import demo from "../constants/Demo";
import {Icon} from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("wokeeey");
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }
  render() {
    return (
      <View style={{ height: dim.window.height }}>
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
          {demo.markers.map(el => (
            <MapView.Marker
              key={el.id}
              coordinate={el.coordinate}
              title={el.title}
              description={el.description}
              flat={true}
              onCalloutPress={() => {
                alert("Clicked component");
              }}
            >
              <FontAwesome5 name='thumbtack'/>
            </MapView.Marker>
          ))}
          <MapView.Polyline
            coordinates={demo.cordinantes}
            strokeColor="#f1c40f" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              "#7F0000",
              "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
              "#B24112",
              "#E5845C",
              "#238C23",
              "#7F0000"
            ]}
            strokeWidth={4}
          />
          {!!this.state.latitude && !!this.state.longitude && (
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }} //Comm
              title={"Your Location"}
            />
          )}
        </MapView>
      </View>
    );
  }
}

export default HomeScreen;
