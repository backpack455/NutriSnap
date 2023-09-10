import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { tabcolor, themecolor, inactiveColor } from './../../assets/colors';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <View style={styles.SVGcontainer}>
        {/* <Image
          source={require("./../../assets/realhome.png")}
          style={{ width: 450, height: 200 }}
        /> */}
      </View>
      
        <Text style={styles.subtext}>
          NutriSnap makes obtaining information about your diet simple, effecient and easy!
        </Text>
        <Text style={styles.subtext}>
          Choose an option to get started:
        </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.picture}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.buttonText}>Take a picture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lecture}
          onPress={() => navigation.navigate("Select Lecture")}
        >
          <Text style={styles.buttonText}>Lecture notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 55,
    fontWeight: "bold",
    top: 88,
    fontFamily: "Avenir",
  },
  buttonText: {
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  Button: {
    backgroundColor: `${themecolor}`,
    width: 271,
    height: 58,
    borderRadius: 7,
    justifyContent: "center",
    top: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  picture: {
    backgroundColor: `${themecolor}`,
    width: 234,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    top: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  lecture: {
    backgroundColor: `${themecolor}`,
    width: 234,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    top: 50,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 30,
    top: 0,
  },
  SVGcontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  subtext: {
    color: "#A8A8A8",
    fontFamily: "Avenir",
    fontSize: 18,

    textAlign: "left",
    top: 30,
    height: 86,
    width: 267,
  },
  textContainer: {
    flex: 0.15,
    padding: 10,
    top: 15,
  },

});