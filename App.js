import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddNewGoalButton from "./components/AddNewGoalButton";
import MainPage from "./components/MainPage";
import AddGoalModal from "./components/AddGoalModal";
import { Colors } from "./themes/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage/>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primary,
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
