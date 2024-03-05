import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';
import React from 'react';
import customData from '../../app.json';
import MainLayout from '../layouts/MainLayout';
function AboutScreen() {

    const getCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return date + '-' + month + '-' + year;
    }

    return (
        <MainLayout>
            <>
                <Text style={styles.taskText}>{customData.name}</Text>
                <Text style={styles.taskText}>HuiEn Lin</Text>
                <Text style={styles.taskText}>{getCurrentDate()}</Text>
            </>
        </MainLayout>

    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});