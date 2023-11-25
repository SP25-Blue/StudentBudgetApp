import { Text, View } from 'react-native';

import React, {
    useState,
    useEffect
} from 'react';

import {
    StyleSheet,
    Pressable,
    ImageBackground,
    useWindowDimensions
} from 'react-native';

export default function DebugPageDimentionsScreen() {
    const { height, width, scale, fontScale } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Window Dimension Data</Text>
            <Text>Height: {height}</Text>
            <Text>Width: {width}</Text>
            <Text>Font scale: {fontScale}</Text>
            <Text>Pixel ratio: {scale}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 38,
        paddingVertical: 12,
        backgroundColor: 'transparent'
    },
    header: {
        fontSize: 16,
        marginVertical: 10,
    }
});
