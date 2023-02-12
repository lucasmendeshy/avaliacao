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
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  const showDateTimePicker = () => {
    setPickerMode("datetime");
  };
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("Uma data e hora foi escolhida: ", date);
    hideDatePicker();
  };


  {
    /* <Button title="Show Date Picker" onPress={showDatePicker} /> */
  }
  return (
    <>
      <SafeAreaView style={estilos.viewSafe}>
       
        <Pressable style={estilos.botaoDate} onPress={showDatePicker}>
          <Text style={estilos.texto}>Selecione uma data</Text>
          <AntDesign
            name="calendar"
            size={26}
            color="black"
            style={estilos.icon}
          />
        </Pressable>
       

    

    <Text style={estilos.text}>
         Data e hora selecionada:{isDatePickerVisible}
    </Text>
      
       
  
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          locale="pt-br"
          is24Hour={true}
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirme"
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
    marginVertical: 15,
    right: 10,
  },
  botaoDate: {
    height: 50,
    backgroundColor: "#F8F9FA",
    paddingLeft: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 16,
  },
  botaoHoras: {
    height: 50,
    backgroundColor: "#F8F9FA",
    paddingLeft: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    position: "absolute",
    left: 335,
    top: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    textAlign: "left",
    left: 25
  }
});
