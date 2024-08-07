import { StyleSheet , View } from "react-native";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";

const AddOrCancel = (props) => {
    return ( 

<View style={styles.AddOrCancel}>

<CancelButton setModalVisible={props.setModalVisible}/>
<AddButton setModalVisible={props.setModalVisible}/>



</View>


     );
}
 
export default AddOrCancel;


const styles=StyleSheet.create({


    AddOrCancel:{
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
width:'100%',
columnGap:20,
    },



});
