// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebaseConfig';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         console.log('User logged in!');
//       })
//       .catch(error => {
//         console.error('Login error:', error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput 
//         placeholder="Email" 
//         value={email} 
//         onChangeText={setEmail} 
//         style={styles.input} 
//       />
//       <TextInput 
//         placeholder="Password" 
//         value={password} 
//         onChangeText={setPassword} 
//         secureTextEntry 
//         style={styles.input} 
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('Signup')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
//   input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10, borderRadius: 5 }
// });
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User logged in!');
        navigation.navigate('MainTabs');
      })
      .catch(error => {
        console.error('Login error:', error.message);
      });
  };

  return (
    <View style={tw`flex-1 bg-gray-900 p-6`}>
      <Animatable.View 
        animation="fadeInDown" 
        style={tw`flex items-center justify-center mb-12 mt-20`}
      >
        <Text style={tw`text-4xl font-bold text-green-400 mb-2`}>PedalAI</Text>
        <Text style={tw`text-gray-400 text-lg`}>Welcome back!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={500}>
        <TextInput
          style={tw`bg-gray-800 rounded-lg p-4 text-white mb-4 border border-green-400`}
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={tw`bg-gray-800 rounded-lg p-4 text-white mb-6 border border-green-400`}
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={tw`bg-green-400 p-4 rounded-lg mb-4`}
          onPress={handleLogin}
        >
          <Text style={tw`text-gray-900 text-center font-bold text-lg`}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={tw`text-green-400 text-center`}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}