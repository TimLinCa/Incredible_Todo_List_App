import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {
    SafeAreaView,
} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);
    return (
        <MainLayout>
            <SafeAreaView>
                <ToDoList items={tasks}></ToDoList>
                <ToDoForm addTask={addTask}></ToDoForm>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Go to About"
                        onPress={() => navigation.navigate('About')}
                    />
                </View>

            </SafeAreaView>
        </MainLayout>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16
    }
});