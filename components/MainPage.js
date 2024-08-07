import { useState } from "react";
import AddNewGoalButton from "./AddNewGoalButton";
import { Modal, View, Text, StyleSheet } from "react-native";
import AddGoalModal from "./AddGoalModal";
import Tasks from "./Tasks";

const MainPage = () => {

  const [ModalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  



//   <AddNewGoalButton setModalShow={setModalShow} ModalShow={ModalShow} />













  return (
    <View style={styles.mainPage}>
<AddNewGoalButton setModalVisible={setModalVisible}/>

<AddGoalModal ModalVisible={ModalVisible} setModalVisible={setModalVisible}/>




    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mainPage: {
    width: "100%",
    alignItems:'center',
    justifyContent:'center',
  },
});
