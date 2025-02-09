// 
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function HomeScreen() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out!');
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  return (
    <ScrollView style={tw`flex-1 bg-gray-900`}>
      <View style={tw`p-6`}>
        <View style={tw`flex-row justify-between items-center mb-6`}>
          <Animatable.Text 
            animation="fadeInDown"
            style={tw`text-3xl font-bold text-green-400`}
          >
            Welcome, {auth.currentUser.email}
          </Animatable.Text>
          <TouchableOpacity
            onPress={handleLogout}
            style={tw`bg-gray-800 p-2 rounded-full`}
          >
            <Icon name="log-out-outline" size={24} color="#4ADE80" />
          </TouchableOpacity>
        </View>

        <Animatable.View 
          animation="fadeInUp" 
          delay={300}
          style={tw`bg-gray-800 rounded-xl p-6 mb-4 border border-green-400`}
        >
          <View style={tw`flex-row items-center mb-2`}>
            <Icon name="bicycle" size={24} color="#4ADE80" />
            <Text style={tw`text-white text-xl font-semibold ml-2`}>Today's Stats</Text>
          </View>
          <View style={tw`flex-row justify-between mt-4`}>
            <View style={tw`items-center`}>
              <Text style={tw`text-green-400 text-2xl font-bold`}>12.5</Text>
              <Text style={tw`text-gray-400`}>km</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-green-400 text-2xl font-bold`}>45</Text>
              <Text style={tw`text-gray-400`}>min</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-green-400 text-2xl font-bold`}>324</Text>
              <Text style={tw`text-gray-400`}>kcal</Text>
            </View>
          </View>
        </Animatable.View>

        <Animatable.View 
          animation="fadeInUp" 
          delay={600}
          style={tw`bg-gray-800 rounded-xl p-6 border border-green-400`}
        >
          <View style={tw`flex-row items-center mb-2`}>
            <Icon name="trophy" size={24} color="#4ADE80" />
            <Text style={tw`text-white text-xl font-semibold ml-2`}>Goals</Text>
          </View>
          <View style={tw`bg-gray-700 h-2 rounded-full mt-2`}>
            <View style={tw`bg-green-400 h-2 rounded-full w-3/4`} />
          </View>
          <Text style={tw`text-gray-400 mt-2`}>75% of daily goal completed</Text>
        </Animatable.View>
      </View>
    </ScrollView>
  );
}