import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <>
      <SafeAreaView style={estilos.viewSafe}>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  dateComponente: {
    width: 350,
  },
  botao: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  texto: {
    fontSize: 16,
    color: "white",
    textTransform: "uppercase",
  },
});
