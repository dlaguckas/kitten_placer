import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

class KittenDetails extends Component {
    
    render() {
        const { id, source, kittenName, desc } = this.props;
        const { containerStyle, textStyle, descStyle } = styles
        return (
            <ScrollView>
                    <Image 
                        style={{ height: 300}}
                        source={{uri: source}}
                    />
                <View style={containerStyle}>
                    <Text style={textStyle}>{kittenName}</Text>
                    <Text style={descStyle}>{desc}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
      padding: 10,
      backgroundColor: '#fff',
    },
    textStyle: {
        fontSize: 22,
        paddingTop: 5
    },
    descStyle: {
        fontSize: 18
    }
  };

export default KittenDetails;
