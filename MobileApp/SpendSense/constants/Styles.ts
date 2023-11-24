import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
});

export const pressableStyles = StyleSheet.create({
    // Add styles specific to your Pressable component
    // For example:
    pressed: {
        backgroundColor: 'darkblue',
    },
});