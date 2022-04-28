import React from 'react';
import { FlatList, Text, View } from 'react-native';
 
interface toDoListProps {
    toDoItems : toDoListItem[],
} 

interface toDoListItem {
    id : string,
    task: string,
    completed : boolean
} 

interface toDoListItemProps {
    item : toDoListItem,
    index : number,
}

const ToDoList: React.FC<toDoListProps> = ({ toDoItems}) => {
    
    return (
        <View style={{ height:'100%', width:'100%' }}>
            <FlatList keyExtractor={(item) => item.id} renderItem={ToDoItem} data={toDoItems}></FlatList>
        </View>
    )
}

const ToDoItem : React.FC<toDoListItemProps> = ({item, index }) => {

    return (
        <View style={{height:500 , width: 500, alignItems:'center', justifyContent:'center' , backgroundColor: item.completed? 'blue' : 'pink'}}><Text>{item.task}</Text></View>
    )
}

export default ToDoList;

