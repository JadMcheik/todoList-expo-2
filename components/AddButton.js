import { StyleSheet,View , TouchableOpacity ,Text } from "react-native";
import { Colors } from "../themes/Colors";

const AddButton = (props) => {
  return (
    <View style={styles.addButtonView}>
      <TouchableOpacity style={styles.addButton} onPress={()=> props.setModalVisible(false)}>
        <Text style={styles.addButtonText}>ADD GOAL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButtonView: {
    width: 130,
height:40,
    
  },
  addButton: {
    width: "100%",
    height:'100%',
    backgroundColor: Colors.buttonsColor,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    padding:10, 
},

  addButtonText: {
    fontWeight: "bold",
   textAlign:'center',
   color:'white',
  },
});
