import { View, StyleSheet } from 'react-native';

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        marginVertical: 16,
        height: 1,
        width: '80%',
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});