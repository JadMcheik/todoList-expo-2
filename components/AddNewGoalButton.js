import { Pressable, Text, View ,StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../themes/Colors";

const AddNewGoalButton = (props) => {
  return (
    <View style={styles.addNewGoalView}>
      <TouchableOpacity style={styles.addNewGoal} onPress={() => props.setModalVisible(true)}>
        <Text style={styles.addNewGoalText}>ADD NEW GOAL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewGoalButton;

const styles = StyleSheet.create({
    addNewGoalView:{
        height:40,
        width:'100%',
        backgroundColor:Colors.buttonsColor,


    },


  addNewGoal: {
width:'100%',
flex:1,
padding:10,
alignItems:'center',
justifyContent:'center',
fontWeight:'bold',
  },

  addNewGoalText:{
color:'white',
fontWeight:'bold',
  },
});
