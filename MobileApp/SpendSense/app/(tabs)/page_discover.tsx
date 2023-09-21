import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import React from 'react';
import {
    StyleSheet,
    Button,
    SafeAreaView,
    Alert,
    Pressable
} from 'react-native';

export default function PageDiscoverScreen() {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to Spend Sense
            </Text>
            <Button
                title="Log In"
                color="#186FF2"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                title="Create Account"
                color="#186FF2"
                accessibilityLabel="Learn more about this purple button"
            />
            <Pressable
                onPressIn={() => {
                }}
                onPress={() => {

                }}
                style={({ pressed }) => [
                    styles.button1,
                    {
                        opacity: pressed ? 0.5 : 1
                    }
                ]}>
                {({ pressed }) => (
                    <Text>{pressed ? 'Pressed!!' : 'Press Me'}</Text>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: '800',
        color: '#186FF2',
    },
    button1: {
        display: 'flex',
        width: 311,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 44,
        paddingRight: 44,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 16,
        backgroundColor: '#38B7FE',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        shadowColor: '#00FF00',
    },
    button2: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 44,
        paddingRight: 44,
        borderRadius: 16,
        backgroundColor: '#ffB7FE'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
