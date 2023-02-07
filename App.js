import { useState, createRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Input from "./components/input";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const emailInput = createRef();
  const senhaInput = createRef();

  useEffect(() => emailInput.current.resetError(), [email]);
  useEffect(() => senhaInput.current.resetError(), [senha]);

  function logar() {
    if (email == "") {
      Alert.alert("E-mail inválido", "Tente novamente!");
      emailInput.current.focusOnError();
      return;
    }
    if (senha == "") {
      Alert.alert("Senha inválida", "Tente novamente!");
      senhaInput.current.focusOnError();
      return;
    }
  }

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar bartstyle="dark" />
      <Input
        ref={emailInput}
        iconName={"account-outline"}
        placeholder="E-mail"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        ref={senhaInput}
        iconName={"lock-outline"}
        secureTextEntry
        placeholder="Senha"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity onPress={logar}>
        <Text>Logar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    justifyContent: "center",
  },
});
