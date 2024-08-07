import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "../themes/Colors";
import React, { forwardRef } from "react";

const TaskInput = React.forwardRef((props, ref) => {
  return (
    <View style={styles.taskInputView}>
      <TextInput
        placeholder="Your course Goal!"
        style={styles.goalInput}
        onChangeText={props.setInputValue}
        ref={ref}
        value={props.inputValue}
      />

      {props.emptyInputAlertShow ? (
        <Text style={styles.emptyTextFieldAlert}>
          please enter a task first!
        </Text>
      ) : null}
    </View>
  );
});

export default TaskInput;

const styles = StyleSheet.create({
  taskInputView: {
    width: "100%",
  },

  emptyTextFieldAlert: {
    color: "red",
    fontWeight: "bold",
    fontSize: 13,
  },
  goalInput: {
    width: "100%",
    height: 60,
    padding: 10,
    backgroundColor: Colors.inputColor,
    borderRadius: 5,
  },
});
