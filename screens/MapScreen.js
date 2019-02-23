import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import dim from "../constants/Layout";
import { MapView } from "expo";
import { MarkerIcon } from "../assets/images/marker.png";
import demo from "../constants/Demo";
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
      mapType: "hybrid",
      initRegion: {
        latitude: 31.5097587,
        longitude: -9.7761707,
        latitudeDelta: 0.011,
        longitudeDelta: 0.011
      },
      region:{
        latitude: 31.5097587,
        longitude: -9.7761707,
        latitudeDelta: 0.011,
        longitudeDelta: 0.011
      }
    };
    this.changeMapType = this.changeMapType.bind(this);
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
  render() {
    return (
      <View style={{ height: dim.window.height }}>
        <View>
          <Button
            onPress={this.changeMapType}
            style={{ backgroundColor: "#34495e", color: "white" }}
          >
            <Text>Change view</Text>
          </Button>
          <Button
            onPress={()=>{
              this.setState({
                region:this.state.initRegion
              })
            }}
            style={{ backgroundColor: "#34495e", color: "white" }}
          >
            <Text>Back to the region</Text>
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
          </MapView>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
