import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import * as StoreReview from "expo-store-review";
import { Linking } from "react-native";

export default function App() {
  /* const [count, setCount] = useState(0);
  const botao = () => setCount(prevCount => prevCount + 1); */

  const itunesItemId = 982107779;
  // Abra a App Store do iOS no navegador -> redireciona para a App Store no iOS
  Linking.openURL(
    `https://apps.apple.com/app/apple-store/id${itunesItemId}?action=write-review`
  );
  // Abra a App Store do iOS diretamente
  Linking.openURL(
    `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
  );
  /* 
  const review = async () => {
    if (StoreReview.isAvailableAsync()) {
      await StoreReview.requestReview()
        .then(function (response) {
          Alert.alert("responda-me", response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }; */

  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <View style={estilos.countContainer}>
        <Text>Count: </Text>
      </View>

      <Pressable style={estilos.botao} onPress={review}>
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
