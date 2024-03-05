import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';
function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.footer}> cprg303 - B</Text>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flex: 1,
        alignContent: "center",
    },
    footer: {
        backgroundColor: "#ecf0f1",
        alignItems: "center",
        alignSelf: "center",
    }
});