import { useState, createRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Input from "./components/input";

export default function App() {
  const [text, setText] = useState("");

  const handleTextChange = (inputText) => {
    if (inputText.length <= 250) {
      setText(inputText);
    }
  };

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar bartstyle="dark" />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <View>
          <TextInput
            placeholder="E-mail........."
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={handleTextChange}
            value={text}
          />
          {text.length > 250 && (
            <Text style={{ color: "red" }}>Max 300 characters allowed</Text>
          )}
          <Text>{text.length} characters</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    justifyContent: "center",
  },
});
