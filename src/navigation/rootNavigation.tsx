import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from '../components/todolist';

const  HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 ,height:'100%', width:'100%' ,backgroundColor:'blue' }} >
        <ToDoList toDoItems={tasks}></ToDoList>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

const  RootNavigation: React.FC = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tasks = [{id: '1', task : 'learn today' ,completed: true },{id: '2', task : 'learn today' ,completed: false },{id: '3', task : 'learn today' ,completed: true }]

export default RootNavigation;