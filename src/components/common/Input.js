import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const INPUT = ({label, value, onChangeText, placeholder,type,secureTextEntry, error }) => {
  return(
    <View>
        <FormLabel>{label}</FormLabel>
        <FormInput
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        />
        <FormValidationMessage>{error}</FormValidationMessage>
    </View>
  );
}

const styles = {
  inputStyle: {
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23,
    flex:2
  },
  labelStyle:{
    fontSize:18,
    paddingLeft:20,
    flex:1
  },
  containerStyle:{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
};

export { INPUT };
