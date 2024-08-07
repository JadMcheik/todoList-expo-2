import { StyleSheet, View } from "react-native";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";

const AddOrCancel = (props) => {
  return (
    <View style={styles.AddOrCancel}>
      <CancelButton
        setModalVisible={props.setModalVisible}
        setInputValue={props.setInputValue}
      />
      <AddButton
        setModalVisible={props.setModalVisible}
        addElement={props.addElement}
        inputValue={props.inputValue}
        setEmptyInputAlertShow={props.setEmptyInputAlertShow}
      />
    </View>
  );
};

export default AddOrCancel;

const styles = StyleSheet.create({
  AddOrCancel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    columnGap: 20,
  },
});
