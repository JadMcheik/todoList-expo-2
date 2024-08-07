
import AddNewGoalButton from "./AddNewGoalButton";
import { Modal, View, Text, StyleSheet , Alert} from "react-native";
import AddGoalModal from "./AddGoalModal";
import Tasks from "./Tasks";
import React, { forwardRef , useRef, useEffect, useState} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
const MainPage = () => {

  const [ModalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(1);
  const inputField = React.createRef("");
  const [editFlag, set_editFlag] = useState(false);
  const [editId, set_editId] = useState(0);

  const storeTasks = async (tasksToStore) => {
    try {
      const jsonValue = JSON.stringify(tasksToStore);
      await AsyncStorage.setItem("stored-tasks", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("stored-tasks");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("Failed to load tasks", e);
    }
  };

  const storeId = async () => {
    try {
      const idValue = JSON.stringify(id + 1);
      await AsyncStorage.setItem("lastId", idValue);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveId = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("lastId");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("Failed to load id ", e);
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await retrieveTasks();
      if (storedTasks) {
        setTasks(storedTasks);
      }
    };
    loadTasks();

    const loadId = async () => {
      const storedId = await retrieveId();
      if (storedId) {
        setId(storedId);
      }
    };
    loadId();
  }, []);

  const addElement = () => {
    if (inputValue.trim()) {
      if (editFlag) {
        const updated_tasks = tasks.map((task) => {
          return { ...task };
        });
        if (updated_tasks.find((task) => task.id === editId)) {
          updated_tasks.find((task) => task.id === editId).value =
            inputValue.trim();
          setTasks(updated_tasks);
          storeTasks(updated_tasks);
        } else {
          //if the user deleted the task while being edited ,we will add a new one containing the new value (we can instead: do nothing)
          const singleTask = { value: inputValue.trim(), id: id };
          setTasks([...tasks, singleTask]);
          setId(id + 1);
          storeTasks([...tasks, singleTask]);
        }

        set_editId(0);
        set_editFlag(false);
      } else {
        const singleTask = { value: inputValue.trim(), id: id };
        setTasks([...tasks, singleTask]);
        setId(id + 1);
        storeTasks([...tasks, singleTask]);
      }

      storeId();

      inputField.current.value = "";
      setInputValue("");
    } else {
      inputField.current.focus();

      Alert.alert("Attention!", "you must enter a task first");
    }
  };

  function deleteTask(x) {
    const new_tasks = tasks.filter((task) => task.id !== x);
    Alert.alert("Confirm", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => setTasks(new_tasks),
      },
    ]);
    storeTasks(new_tasks);
    //   localStorage.setItem("stored-tasks", JSON.stringify(new_tasks));
    //}
  }

  function editTask(x) {
    const elem = tasks.find((task) => task.id === x);
    
   

    setInputValue(elem.value);
    set_editId(x);
    set_editFlag(true);
  }

//   <AddNewGoalButton setModalShow={setModalShow} ModalShow={ModalShow} />






       
        
       







  return (
    <View style={styles.mainPage}>
<AddNewGoalButton setModalVisible={setModalVisible}/>

<AddGoalModal ModalVisible={ModalVisible} setModalVisible={setModalVisible} addElement={addElement}  setInputValue={setInputValue} ref={inputField}  inputValue={inputValue}  />
<Tasks data={tasks} deleteTask={deleteTask} editTask={editTask} setModalVisible={setModalVisible} />



    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mainPage: {
    width: "100%",
    alignItems:'center',
    justifyContent:'center',
  },
});
