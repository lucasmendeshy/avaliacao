import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [textData, setTextdata] = useState("Escolha uma data");
  const [textHoras, setTexthoras] = useState("Escolha um horário");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      " / " +
      (tempDate.getMonth() + 1) +
      " / " +
      tempDate.getFullYear();
    setTextdata(fDate);

    let fTime = tempDate.getHours() + " : " + tempDate.getMinutes();
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

      <View style={estilos.viewBotoes}>
        <TextInput style={estilos.input} value={textData} placeholder="Data" />
        <Pressable style={estilos.botao} onPress={() => showMode("date")}>
          <Text style={estilos.botaoTexto}>
            <AntDesign name="calendar" size={24} color="#E3BC40" />
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewBotoes}>
        <TextInput
          style={estilos.input}
          value={textHoras}
          placeholder="Horas"
        />
        <Pressable style={estilos.botao} onPress={() => showMode("time")}>
          <Text style={estilos.botaoTexto}>
            <MaterialCommunityIcons name="hours-24" size={24} color="#E3BC40" />
          </Text>
        </Pressable>
      </View>

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
    backgroundColor: "#322727",
    width: "18%",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 30,
    height: 50,
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 30,
    paddingLeft: 20,
    height: 50,
    backgroundColor: "#F8F9FA",
    width: "65%",
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
  },
  viewBotoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
});
