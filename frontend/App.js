import React, {useEffect, useState} from 'react'
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import SplashScreen from "./screens/auth/SplashScreen";
import LabelReader from './screens/main/LabelReader'
import VolumeReader from './screens/main/VolumeReader'
import ProfileScreen from "./screens/main/CarbonImpact";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { tabcolor, themecolor, inactiveColor } from './assets/colors';
import VolumeResultsScreen from './screens/main/VolumeResultsScreen'

import {
  MaterialCommunityIcons,
  Fontisto,
  Octicons
} from "@expo/vector-icons";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './config'
import CarbonImpact from './screens/main/CarbonImpact';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Main = createMaterialBottomTabNavigator();
const Auth = createStackNavigator();
const Tab1 = createStackNavigator();
const Tab2 = createStackNavigator();
const Tab3 = createStackNavigator();
const Tab4 = createStackNavigator();

// Ignore all log notifications
// LogBox.ignoreAllLogs();


const Tab1Navigator = () => {
  return (
    <Tab1.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themecolor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
      initialRouteName="Tab1"
    >
      <Tab1.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Tab1.Navigator>
  );
};

const Tab2Navigator = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themecolor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
      initialRouteName="Label Reader Screen"
    >
      <Tab2.Screen
        name="Label Reader Screen"
        component={LabelReader}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Tab2.Navigator>
  );
};

const Tab3Navigator = () => {
  return (
    <Tab3.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themecolor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
      initialRouteName="Volume Reader Screen"
    >
      <Tab3.Screen
        name="Volume Reader Screen"
        component={VolumeReader}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <Tab3.Screen
        name="Volume Results Screen"
        component={VolumeResultsScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Tab3.Navigator>
  );
};

const Tab4Navigator = () => {
  return (
    <Tab4.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: themecolor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
      initialRouteName="Carbon Impact Screen"
    >
      <Tab4.Screen
        name="Carbon Impact Screen"
        component={CarbonImpact}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Tab4.Navigator>
  );
};

function MainNavigator() {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName="Dashboard Navigator"
        sceneAnimationEnabled="true"
        activeColor={tabcolor}
        inactiveColor={inactiveColor}
        barStyle={{
          backgroundColor: `${themecolor}`,
        }}
        shifting={true}
      >
        <Main.Screen
          name="Dashboard Navigator"
          component={Tab1Navigator}
          options={{
            title: "Dashboard",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="view-dashboard-variant"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        <Main.Screen
          name="Label Reader"
          component={Tab2Navigator}
          options={{
            title: "Label Reader",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        <Main.Screen
          name="Volume Reader"
          component={Tab3Navigator}
          options={{
            title: "Volume Reader",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="container"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        {/* <Main.Screen
          name="Carbon Impact"
          component={Tab4Navigator}
          options={{
            title: "Carbon Impact",
            tabBarIcon: ({ focused }) => (
              <Fontisto
                name="earth"
                size={22}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        /> */}
      </Main.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Auth.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name="Splash" component={SplashScreen} options={{}} />
        <Auth.Screen name="Login" component={LoginScreen} options={{}} />
        <Auth.Screen name="Register" component={RegisterScreen} options={{}} />
      </Auth.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(); // Handle user state changes

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <AuthNavigator />;
  }

  return <MainNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
