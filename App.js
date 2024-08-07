import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import AddNewGoalButton from "./components/AddNewGoalButton";
import MainPage from "./components/MainPage";
import AddGoalModal from "./components/AddGoalModal";
import { Colors } from "./themes/Colors";

export default function App() {
  return (
    <View style={styles.outerContainer}>
    <ScrollView style={styles.innerContainer}>
      <MainPage/>

      
    </ScrollView>
    <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor:Colors.primary,
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,

  },
  innerContainer:{
    width:'100%',


  },
});
