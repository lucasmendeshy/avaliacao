import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Alert, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Data selecionada:');

  const onChange = (event, selectedDate) => {
    const current = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours' + tempDate.getHours + ' | Minutes' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '\n' + fTime);
  }

  const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
  }


  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />

      <Text>{text}</Text>
      
        <Pressable style={estilos.botao} onPress={() => showMode('date')}>
          <Text style={estilos.botaoTexto}>Date</Text>
        </Pressable>
      
      

      
        <Pressable style={estilos.botaooo} onPress={() => showMode('time')}>
          <Text style={estilos.botaoTexto}>Time</Text>
        </Pressable>
      


      {show && (<DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
      
      
      />)}
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
    marginVertical: 30
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
