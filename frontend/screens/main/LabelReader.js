import { StyleSheet, Text, TouchableOpacity, View, Button} from "react-native";
import React, {useState, useEffect} from "react";
import { Camera, CameraType } from "expo-camera";
import { tabcolor, themecolor, inactiveColor } from './../../assets/colors';
import * as Permissions from "expo-permissions";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";

const CameraScreen = ({navigation}) => {
  const [startCamera, setStartCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [permissions, requestPermission] = Camera.useCameraPermissions();
  const [imageCounter, setImageCounter] = useState(0);
  const [imagesCombinedString, setImagesCombinedString] = useState('');
  const [cameraRef, setCameraRef] = useState(null);

  if (!permissions){
    console.log('permissions still loading')
    return <View/>
  }

  if(!permissions.granted){
    console.log('permissions are required')
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  let camera = null;

  const takePicture = async () => {
    console.log(cameraRef)
    const photo = await cameraRef.takePictureAsync({ base64: true });
    console.log(photo.base64)
    // each base64 string
    let combinedString = photo.base64;
    navigation.navigate('Volume Results Screen',  {
      photoURL: photo.base64,
      otherParam: 'anything you want here',
    })
  };

  return (
    <View>
      <Camera
        ref={(r) => {
          setCameraRef(r);
        }}
        style={styles.camera}
        type={CameraType.back}
      >
        <TouchableOpacity onPress={takePicture}>
          <View style={styles.button}>
            <Text></Text>
          </View>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    width: WP(100),
    height: HP(80),
  },
  button: {
    width: WP(22),
    height: HP(10),
    backgroundColor: `${themecolor}`,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    left: WP(40),
    top: HP(60),
  },
  submitButton: {
    width: WP(22),
    height: HP(5),
    backgroundColor: `${themecolor}`,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    left: WP(70),
    top: HP(53),
  },
  submitButtonText: {
    color: "#fff",
  },
  container: {
    padding: 15,
  }
});