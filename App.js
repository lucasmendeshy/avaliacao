import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  TextInput,
} from "react-native";
import * as Calendar from "expo-calendar";
import CalendarPicker from "react-native-calendar-picker";

export default function App() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [friendNameText, setFriendNameText] = useState("");
  const startDate = selectedStartDate
    ? selectedStartDate.format("AAAA-MM-DD").toString()
    : "";

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        console.log("Here are all your calendars:");
        console.log({ calendars });
      }
    })();
  }, []);

  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }

  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === "ios"
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: "Expo Calendar" };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: "Expo Calendar",
      color: "blue",
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: "internalCalendarName",
      ownerAccount: "personal",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  }

  const addNewEvent = async () => {
    try {
      const calendarId = await createCalendar();

      const res = await Calendar.createEventAsync(calendarId, {
        endDate: getAppointementDate(startDate),
        startDate: getAppointementDate(startDate),
        title: "Happy Birthday buddy " + friendNameText,
      });
      Alert.alert("Event Created!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <TextInput
        onChangeText={setFriendNameText}
        value={friendNameText}
        placeholder="Digite o nome do seu amigo"
        style={estilos.input}
      />
      <View>
        <CalendarPicker onDateChange={setSelectedStartDate} />
        <Text style={estilos.dateText}>Aniversário: {startDate}</Text>
      </View>

      <Pressable style={estilos.botao} onPress={addNewEvent}>
        <Text style={estilos.botaoTexto}>calendario</Text>
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
    padding: 12,
    borderRadius: 2,
    backgroundColor: "purple",
    width: "90%",
  },
  botaoTexto: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  dateText: {
    margin: 16,
  },
});
