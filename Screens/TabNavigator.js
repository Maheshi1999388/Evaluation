// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Welcome from './Welcome';
// import LogIn from './LogIn';
// import { NavigationContainer } from '@react-navigation/native';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// // (...)

// export default function TabNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={LogIn} />
//         <Tab.Screen name="Settings" component={Welcome} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

