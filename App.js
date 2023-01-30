import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import * as Sharing from "expo-sharing";

export default function App() {
  /*  if (!(await Sharing.isAvailableAsync())) {
    alert(`Uh oh, sharing isn't available on your platform`);
    return;
  }
  // console.log(getImageLocalAddress);
  await Sharing.shareAsync(fileAddress, {
    mimeType: "image/jpeg",
    dialogTitle: "Share Your Result",
  }); */

  /*   if (!Sharing.isAvailableAsync()) {
    Alert.alert("Ops!", "compartilhamento não está disponível");
  }
  await Sharing.shareAsync(fileAddress, {
    mimeType: "image/jpeg",
    dialogTitle: "compartilhe seu resultado",
  }); */

  const compartilhe = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    // console.log(getImageLocalAddress);
    await Sharing.shareAsync(fileAddress, {
      mimeType: "image/jpeg",
      dialogTitle: "Share Your Result",
    });
  };

  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <Pressable style={estilos.botao} onPress={compartilhe}>
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
});
