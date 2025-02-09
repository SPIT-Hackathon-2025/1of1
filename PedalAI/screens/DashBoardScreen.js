import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function DashboardScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-gray-900`}>
      <View style={tw`p-6`}>
        <Animatable.Text 
          animation="fadeInDown"
          style={tw`text-3xl font-bold text-green-400 mb-6`}
        >
          Dashboard
        </Animatable.Text>

        <View style={tw`flex-row flex-wrap justify-between`}>
          {[
            { title: 'Total Distance', value: '256 km', icon: 'speedometer' },
            { title: 'Avg Speed', value: '18 km/h', icon: 'flash' },
            { title: 'Total Time', value: '24h 30m', icon: 'time' },
            { title: 'Calories', value: '12,450', icon: 'flame' }
          ].map((item, index) => (
            <Animatable.View
              key={item.title}
              animation="zoomIn"
              delay={300 * index}
              style={tw`w-[48%] bg-gray-800 rounded-xl p-4 mb-4 border border-green-400`}
            >
              <Icon name={item.icon} size={24} color="#4ADE80" />
              <Text style={tw`text-white text-lg font-semibold mt-2`}>{item.title}</Text>
              <Text style={tw`text-green-400 text-2xl font-bold mt-1`}>{item.value}</Text>
            </Animatable.View>
          ))}
        </View>

        <Animatable.View
          animation="fadeInUp"
          delay={1200}
          style={tw`bg-gray-800 rounded-xl p-6 mt-2 border border-green-400`}
        >
          <Text style={tw`text-white text-xl font-semibold mb-4`}>Weekly Progress</Text>
          <View style={tw`flex-row justify-between items-end h-40`}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <View key={day} style={tw`items-center`}>
                <View 
                  style={[
                    tw`w-8 bg-green-400 rounded-t-lg`,
                    { height: `${Math.random() * 100}%` }
                  ]} 
                />
                <Text style={tw`text-gray-400 mt-2`}>{day}</Text>
              </View>
            ))}
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
}