import React from 'react'
import Realm from 'realm'
import { View, FlatList, Text, TextInput, Button, StyleSheet } from 'react-native'

import { todoContext, Todo } from './realm'
import { useRealm } from '@realm/react'
const { useQuery } = todoContext

export const TodoList = () => {

    const todos = useQuery(Todo)
    const { useRealm } = todoContext

    const realm = useRealm()

    console.log('todos.length: ', todos.length)

    const addTodo = () => {

        realm.write(() => {
            realm.create('Todo', {
                _id: new Realm.BSON.ObjectId(),
                description: 'youwser',
                completed: false,
                createdAt: new Date()
            })
        })
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <Text>{item.description}</Text>}
            >

            </FlatList>

            <Button title='press' onPress={() => addTodo()} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'stretch',
        flex: 1
    }
});