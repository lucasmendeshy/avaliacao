import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Alert, Share } from "react-native";

export default function App() {
  const compartilhe = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
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
