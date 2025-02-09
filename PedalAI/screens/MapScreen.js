import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc';

const { width, height } = Dimensions.get('window');

export default function MapsScreen() {
  const route = [
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.78925, longitude: -122.4344 },
    { latitude: 37.79025, longitude: -122.4364 },
  ];

  return (
    <View style={tw`flex-1 bg-gray-900`}>
      <MapView
        style={{ width, height: height - 100 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={[
          {
            "elementType": "geometry",
            "stylers": [{ "color": "#242f3e" }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#746855" }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#242f3e" }]
          },
        ]}
      >
        <Polyline
          coordinates={route}
          strokeColor="#4ADE80"
          strokeWidth={3}
        />
        <Marker
          coordinate={route[0]}
          title="Start"
          pinColor="#4ADE80"
        />
        <Marker
          coordinate={route[route.length - 1]}
          title="End"
          pinColor="#4ADE80"
        />
      </MapView>
      
      <Animatable.View 
        animation="slideInUp"
        style={tw`absolute bottom-0 left-0 right-0 bg-gray-800 p-4 rounded-t-xl border-t border-green-400`}
      >
        <Text style={tw`text-white text-lg font-semibold`}>Current Route</Text>
        <Text style={tw`text-green-400`}>Distance: 2.5 km</Text>
      </Animatable.View>
    </View>
  );
}