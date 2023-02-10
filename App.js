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
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
});
