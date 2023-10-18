import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";


WebBrowser.maybeCompleteAuthSession();

export default function App(){
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "132908271360-2l9sv07v737ao3s5fsacglhfoh1g708p.apps.googleusercontent.com",
    iosClientId: "132908271360-9ijvato3d1k9r8a9rt6gd7qud6eafjpc.apps.googleusercontent.com",
    webClientId: "132908271360-c20q0rbjfv2mhvgi3pfdj01urrq9n0mj.apps.googleusercontent.com"
  });

  return(
    <View style={styles.container}>
      <Text> texto </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#11111f',
    justifyContent: 'center',
    alignItems: 'center'
  }
});