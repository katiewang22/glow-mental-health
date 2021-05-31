
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, 
         Keyboard, ScrollView, ImageBackground } from 'react-native';
import { useFonts, BadScript_400Regular } from '@expo-google-fonts/bad-script';
import Task from '../components/Task';

export default function ChecklistScreen() {
  const [task, setTask] = useState(String);
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask("");
  }

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  let [fontsLoaded] = useFonts({
    BadScript_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ImageBackground source={require('../assets/images/splash.png')} style={styles.image}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.tasksWrapper}>
          <Text style={styles.tasksTitle}>Today's tasks</Text>
            <View style={styles.items}>
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                      <Task text={item} /> 
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>

          <View style={styles.writeTaskWrapper}>
            <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  tasksWrapper: {
    paddingHorizontal: 20
  },
  tasksTitle: {
    fontSize: 24,
    paddingTop: 40,
    fontWeight: 'bold',
    fontFamily: 'BadScript_400Regular',
    textAlign: 'center',
  },
  items: {
    marginTop: 95
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  }
});