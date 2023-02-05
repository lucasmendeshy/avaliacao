import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

export default function App() {


  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
  

      <Pressable style={estilos.botao}>
        <Text style={estilos.botaoTexto}>AVALIE</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    padding: 14,
    backgroundColor: "purple",
    width: "90%",
    alignItems: "center",
    borderRadius: 4,
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
