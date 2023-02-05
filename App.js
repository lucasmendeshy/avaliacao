import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";

export default function App() {


  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <Text style={estilos.title}>Lorem Ipsum</Text>

     
      </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 8
  },
  title: {
    fontSize: 12,
  }

});
