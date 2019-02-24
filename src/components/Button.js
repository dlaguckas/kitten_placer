import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title, showing }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, showing ? {backgroundColor: '#007aff'} : {backgroundColor: '#fff'}]}
    >
      <Text style={[textStyle, showing ? {color: '#fff'} : {color: '#007aff'}]}>
          {title}  
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonStyle: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center'
  }
};

export { Button };