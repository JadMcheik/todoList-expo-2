import { Colors } from "../themes/Colors";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const CancelButton = (props) => {
  return (
    <View style={styles.cancelButtonView}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => {
          props.setInputValue("");
          props.setModalVisible(false);
        }}
      >
        <Text style={styles.cancelButtonText}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelButton;

const styles = StyleSheet.create({
  cancelButtonView: {
    width: 120,
    height: 40,
  },
  cancelButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.cancelColor,
    borderRadius: 5,
    padding: 10,
  },

  cancelButtonText: {
    textAlign: "center",
    color: "white",
  },
});
