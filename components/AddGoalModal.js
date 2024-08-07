import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import goalIamge from "../images/icons8-goal-100.png";
import { Colors } from "../themes/Colors";
import AddOrCancel from "./AddOrCancel";
import React, { forwardRef } from "react";
import TaskInput from "./TaskInput";
const AddGoalModal = React.forwardRef((props, ref) => {
  return (
    <Modal visible={props.ModalVisible} animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.Innercontainer}>
          <Image source={goalIamge} style={styles.goalIamge} />

          <TaskInput
            ref={ref}
            setInputValue={props.setInputValue}
            inputValue={props.inputValue}
            emptyInputAlertShow={props.emptyInputAlertShow}
          />
          <AddOrCancel
            setModalVisible={props.setModalVisible}
            addElement={props.addElement}
            setInputValue={props.setInputValue}
            inputValue={props.inputValue}
            setEmptyInputAlertShow={props.setEmptyInputAlertShow}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
});

export default AddGoalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  Innercontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 30,
  },

  emptyTextFieldAlert: {},
  goalInput: {
    width: "100%",
    height: 60,
    padding: 10,
    backgroundColor: Colors.inputColor,
    borderRadius: 5,
  },
});
