import deleteIcon from "../images/trash-svgrepo-com.png";
import editIcon from "../images/editTask.png";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Colors } from "../themes/Colors";

const Tasks = (props) => {
  return (
    <View style={styles.tasksView}>
      {props.data.map((task) => (
        <TouchableOpacity
          style={[
            styles.task,
            task.done ? styles.taskDone : styles.taskNotDone,
          ]}
          onPress={() => {
            props.changeTaskDone(task.id);
            props.forceUpdate();
          }}
          key={task.id}
        >
          <View style={styles.taskTextView}>
            <Text
              style={[styles.taskText, task.done ? styles.taskTextDone : null]}
            >
              {task.value}{" "}
            </Text>
          </View>
          <View style={styles.editTaskView}>
            <TouchableOpacity
              style={styles.editTask}
              onPress={() => {
                props.editTask(task.id);
                props.setModalVisible(true);
              }}
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
        </TouchableOpacity>
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
    marginVertical: 5,
    marginHorizontal: 10,
    minHeight: 40,
    backgroundColor: Colors.task,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between ",
    paddingRight: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  taskDone: {
    backgroundColor: Colors.taskDone,
  },
  taskNotDone: {
    backgroundColor: Colors.task,
  },

  taskTextView: {
    maxWidth: "70%",
  },

  taskText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    textDecorationColor: "red",
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
    marginRight: 2,
  },

  editTask: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",

    cursor: "pointer",
  },

  editTaskImg: {
    marginTop: "auto",
    width: 27,
    height: 27,
  },
});
