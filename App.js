import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
} from "react-native";
import { SpeedDial } from "@rneui/themed";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleTextChange = (inputText) => {
    if (inputText.length <= 250) {
      setText(inputText);
    }
  };

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar bartstyle="dark" />
      <Text style={{ fontWeight: "bold", left: 20, marginVertical: 8 }}>
        Descrição:
      </Text>
      <TextInput
        multiline
        placeholder="Descrição"
        placeholderTextColor={"#black"}
        value={text}
        style={estilos.input}
        onChangeText={handleTextChange}
      />
      {text.length > 250 && (
        <Text style={{ color: "red" }}>Max 300 characters allowed</Text>
      )}
      <Text>{text.length} caracteres</Text>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  input: {
    borderWidth: 1,
    height: 100,
    width: "90%",
    left: 20,
    padding: 12,
  },
});
