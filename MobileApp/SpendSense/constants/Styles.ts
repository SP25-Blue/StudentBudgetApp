import { StyleSheet } from 'react-native';


export const imageStyles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    }
})


export const textStyles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        color: '#1EAEFF',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center'
    },
    button: {
        color: '#FFFFFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    sectionHeader: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


export const buttonStyles = StyleSheet.create({
    active: {
        width: 312,
        paddingVertical: 16,
        paddingHorizontal: 44,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 16,
        backgroundColor: '#38B7FE',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        shadowColor: '#00FF00',
        opacity: 1
    },
    pressed: {
        width: 312,
        paddingVertical: 16,
        paddingHorizontal: 44,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 16,
        backgroundColor: '#38B7FE',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        shadowColor: '#00FF00',
        opacity: 0.5
    },
})


export const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        direction: 'ltr',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap'
    },
    flatlist: {
        width: '100%',
    },
    clearContainer: {
        borderRadius: 16,
        backgroundColor: '#F0F0F0',
        margin: 16,
        padding: 8,
    }
});


export const inputStyles = StyleSheet.create({
    text: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
});

