import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [textData, setTextdata] = useState("Empty");
  const [textHoras, setTexthoras] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setTextdata(fDate);

    let fTime =
      "Horas " + tempDate.getHours() + " : Minutos " + tempDate.getMinutes();
    setTexthoras(fTime);

    console.log(fDate + "(" + fTime + ")");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <Text>{textData}</Text>
      <Text>{textHoras}</Text>

      <Pressable style={estilos.botao} onPress={() => showMode("date")}>
        <Text style={estilos.botaoTexto}>Date</Text>
      </Pressable>

      <Pressable style={estilos.botao} onPress={() => showMode("time")}>
        <Text style={estilos.botaoTexto}>DateTime</Text>
      </Pressable>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          locale="pt-br"
        />
      )}
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
    marginVertical: 30,
  },
  botaooo: {
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
