import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/Authorization/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/Authorization/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/Home/Home";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import PostsItem from "./Screens/components/PostsItem/PostsItem";

const MainStack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <MainStack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="PostsScreen" component={PostsScreen} />

            <MainStack.Screen name="Comments" component={PostsItem} />
            <MainStack.Screen name="Map" component={PostsItem} />

            <MainStack.Screen name="Home" component={Home} />
          </MainStack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>

      // <RegistrationScreen style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </RegistrationScreen>

      // <LoginScreen style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </LoginScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
