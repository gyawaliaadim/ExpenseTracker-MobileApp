import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
interface InputProps {
    label: string;
    textInputConfig?: TextInputProps;
}

const Input = ({ label, textInputConfig }: InputProps) => {
    const inputStyles: Array<any> = [styles.input];
    if (textInputConfig?.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} placeholderTextColor={Colors.gray50} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
        color: Colors.secondary500,
        fontWeight:'bold'
    },
    input: {
        borderWidth: 2,
        borderColor: Colors.secondary300,
        padding: 8,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: Colors.gray300,
        color: Colors.secondary700,

    },
    inputMultiline: {
        minHeight: 100,
        maxHeight: 200,
        textAlignVertical: 'top',
    }
});

export default Input;