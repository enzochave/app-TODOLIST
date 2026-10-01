import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(230, 17, 17, 0.67)'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 40
    },
    subtitle: {
        fontSize: 14,
        color: '#ece00a',
        marginBottom: 20
    },
    inputRow: {
        flexDirection: 'row',
        marginBottom: 20
    },
    input: {
        flex: 1,
        backgroundColor: '#d4d7e8',
        padding: 12,
        borderRadius: 8,
        fontSize: 16
    },
    addButton: {
        backgroundColor: '#0c00eb',
        width: 50,
        marginLeft: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        color: '#dce5e7',
        fontSize: 24,
        fontWeight: 'bold'
    }
})