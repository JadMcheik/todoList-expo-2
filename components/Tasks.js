import deleteIcon from "../images/trash-svgrepo-com.png";

import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Colors } from "../themes/Colors";


const Tasks = (props) => {
  return (
    <View style={styles.tasksView}>
      {props.data.map((task) => (
        <View style={styles.task} key={task.id}>
          <View style={styles.taskTextView}>
            <Text style={styles.taskText}>{task.value}hello world</Text>
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
    marginTop: 30,
    flexDirection: "column-reverse",
  },

  task: {
    marginTop: 5,
    marginBottom: 5,
    minHeight: 40,

    backgroundColor:Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between ",
    paddingRight: 10,
    paddingLeft: 10,
  },

  taskTextView: {
    maxWidth: "70%",
  },

  taskText: {
    color:Colors.white,
    fontSize: 26,
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
    backgroundColor:Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  deleteTaskImg: {
    width: 25,
    height: 25,
  },

  
});
