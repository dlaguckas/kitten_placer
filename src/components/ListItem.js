import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';


class ListItem extends Component {

    render() {
        const {textStyle, containerStyle} = styles;
        const {source, kittenName, desc} = this.props.visibleKitten.item.kitten;
        const {id} = this.props.visibleKitten.item;
        return (
            <TouchableWithoutFeedback
                onPress={()=> {
                    this.props.selectKitten(id);
                    Actions.kittenDetails({id, source, kittenName, desc});
                }}
            >
                <View style={containerStyle}>
                    <Image 
                        style={{height: 250}}
                        source={{uri: source}}
                    />
                    <Text style={textStyle}>{kittenName}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles={
    textStyle: {
        fontSize: 22,
        paddingTop: 5
    },
    containerStyle: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default connect(null, actions)(ListItem);