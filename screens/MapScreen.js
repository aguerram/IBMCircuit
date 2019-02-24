import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import dim from "../constants/Layout";
import { MapView } from "expo";
import { MarkerIcon } from "../assets/images/marker.png";
import demo from "../constants/Demo";
import HeaderComp from "../components/HeaderComp";
import MapViewDirection from "react-native-maps-directions";
import {
  Icon,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Footer,
  Button
} from "native-base";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: "standard",
      initRegion: {
        latitude: 31.5097587,
        longitude: -9.7761707,
        latitudeDelta: 0.011,
        longitudeDelta: 0.011
      },
      region: {
        latitude: 31.5097587,
        longitude: -9.7761707,
        latitudeDelta: 0.011,
        longitudeDelta: 0.011
      }
    };
    this.changeMapType = this.changeMapType.bind(this);
    this.getMyPosition = this.getMyPosition.bind(this);
    this.changeViewToInitStates = this.changeViewToInitStates.bind(this);
    this.changeViewToUserLocation = this.changeViewToUserLocation.bind(this);
  }
  componentDidMount() {
    this.getMyPosition();
  }
  getMyPosition() {
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
      error => alert(error.message),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }
  changeMapType() {
    switch (this.state.mapType) {
      case "standard":
        this.setState({ mapType: "satellite" });
        break;
      case "satellite":
        this.setState({ mapType: "hybrid" });
        break;
      case "hybrid":
        this.setState({ mapType: "standard" });
        break;
    }
  }
  changeViewToInitStates() {
    this.setState({
      region: this.state.initRegion
    });
  }
  changeViewToUserLocation() {
    this.setState({
      region: {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.011,
        longitudeDelta: 0.011
      }
    });
  }
  render() {
    return (
      <View style={{ height: dim.window.height }}>
        <HeaderComp title="Map" />
        <View>
          <Button
            onPress={this.changeMapType}
            style={{ backgroundColor: "#34495e", color: "white" }}
          >
            <Text>Change view</Text>
          </Button>
          <Button
            onPress={this.changeViewToInitStates}
            style={{ backgroundColor: "#34495e", color: "white" }}
          >
            <Text>Back to the region</Text>
          </Button>
          <Button
            onPress={this.changeViewToUserLocation}
            style={{ backgroundColor: "#34495e", color: "white" }}
          >
            <Text>My Location</Text>
          </Button>
        </View>
        <View>
          <MapView
            showsUserLocation={true}
            followsUserLocation={true}
            mapType={this.state.mapType}
            style={{ alignSelf: "stretch", height: dim.window.height - 32 }}
            initialRegion={this.state.initRegion}
            region={this.state.region}
          >
            {demo.circuits[0].markers.map(el => (
              <MapView.Marker
                key={el.id}
                coordinate={el.coordinate}
                title={el.title}
                description={el.description}
                flat={true}
                onCalloutPress={() => {
                  alert("Clicked component");
                }}
              />
            ))}
            <MapView.Polyline
              coordinates={demo.circuits[0].cordinantes}
              strokeColor="#e74c3c" // fallback for when `strokeColors` is not supported by the map-provider
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
            {(this.state.latitude && this.state.longitude) && <MapViewDirection
              origin={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
              destination={demo.circuits[0].markers[1].coordinate}
              apikey={"AIzaSyAnkHzyv-dqcYyC3rRO1fly8Ae5b6jAeMY"}
              strokeWidth={3}
              strokeColor="hotpink"
            />}
            
          </MapView>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
