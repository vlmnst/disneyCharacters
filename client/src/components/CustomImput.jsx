import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomImput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.conteiner}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10 ,
    marginVertical: 10
  },
  input: {
    padding: 5
  }
})

export default CustomImput