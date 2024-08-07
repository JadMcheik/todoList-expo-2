import deleteIcon from "../images/trash-svgrepo-com.png";
import editIcon from "../images/editTask.png";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Colors } from "../themes/Colors";


const Tasks = (props) => {
  return (
    <View style={styles.tasksView}>
      {props.data.map((task) => (
        <View style={styles.task} key={task.id}>
          <View style={styles.taskTextView}>
            <Text style={styles.taskText}>{task.value}</Text>
          </View>
          <View style={styles.editTaskView}>
            <TouchableOpacity
              style={styles.editTask}
              onPress={() => { props.editTask(task.id);props.setModalVisible(true)}}
              
            >
              <Image style={styles.editTaskImg} source={editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.deleteTaskView}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => props.deleteTask(task.id)}
            >
              <Image style={styles.deleteTaskImg} source={deleteIcon} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  tasksView: {
    width: "100%",
    marginTop: 20,
    flexDirection: "column-reverse",
  },

  task: {
   marginVertical:5,
   marginHorizontal:10,
    minHeight: 40,

    backgroundColor:Colors.task,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between ",
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius:5,
    
  },

  taskTextView: {
    maxWidth: "70%",
  },

  taskText: {
    color:'white',
    fontSize: 20,
    textAlign:'center',
  },

  deleteTaskView: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },

  deleteTask: {
    width: "100%",
    height: "100%",
    backgroundColor:Colors.task ,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  deleteTaskImg: {
    width: 25,
    height: 25,
  },

  editTaskView: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    marginLeft: "auto",
    marginRight: 10,
  },

  editTask: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor:Colors.task,
    cursor: "pointer",
  },

  editTaskImg: {
    marginTop: "auto",
    width: 27,
    height: 27,
  },
});
