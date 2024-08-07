import { Modal, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import goalIamge from "../images/icons8-goal-100.png";
import { Colors } from "../themes/Colors";
import AddOrCancel from "./AddOrCancel";
const AddGoalModal = (props) => {
  return (
    <Modal visible={props.ModalVisible}>
      <View style={styles.container}>
        <View style={styles.Innercontainer}>
          <Image source={goalIamge} style={styles.goalIamge} />

          <TextInput placeholder="Your course Goal!" style={styles.goalInput} />

          <AddOrCancel setModalVisible={props.setModalVisible}/>

        </View>
      </View>
    </Modal>
  );
};

export default AddGoalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  Innercontainer: {
  
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    rowGap:30,
  },
  goalInput: {
    width: "100%",
    height: 60,
    padding: 10,
    backgroundColor:Colors.inputColor,
    borderRadius: 5,
  },



});
