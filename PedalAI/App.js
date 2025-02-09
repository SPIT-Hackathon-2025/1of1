// // App.js
// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebaseConfig';

// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignUpScreen';
// import HomeScreen from './screens/HomeScreen.js';
// import DashboardScreen from './screens/DashboardScreen.js';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return unsubscribe;
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {user ? (
//           <Stack.Screen name="Home" component={HomeScreen} />
//         ) : (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
// import DashboardScreen from './screens/DashboardScreen';
import DashboardScreen from "./screens/DashBoardScreen";
// import AmbiguityScreen from './screens/AmbiguityScreen';
// import SessionScreen from './screens/SessionScreen';
import MapsScreen from "./screens/MapScreen";
import CameraScreen from "./screens/CameraScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Dashboard":
              iconName = focused ? "stats-chart" : "stats-chart-outline";
              break;
            case "Ambiguity":
              iconName = focused ? "analytics" : "analytics-outline";
              break;
            case "Session":
              iconName = focused ? "bicycle" : "bicycle-outline";
              break;
            case "Maps":
              iconName = focused ? "map" : "map-outline";
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "#111827",
          borderTopColor: "#374151",
        },
        tabBarActiveTintColor: "#4ADE80",
        tabBarInactiveTintColor: "#6B7280",
        headerStyle: {
          backgroundColor: "#111827",
        },
        headerTintColor: "#4ADE80",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      {/* <Tab.Screen name="Ambiguity" component={AmbiguityScreen} /> */}
      {/* <Tab.Screen name="Session" component={SessionScreen} /> */}
      <Tab.Screen name="Maps" component={MapsScreen} />{" "}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#111827" },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
