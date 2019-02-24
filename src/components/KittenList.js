import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, NetInfo } from 'react-native';
import { kittensFetch, kittensCreate } from '../actions';
import ListItem from './ListItem';
import { Button } from './Button';

class KittenList extends Component {
    componentWillMount() {
        NetInfo.isConnected.fetch().then(isConnected => {
            isConnected ? null : alert('No Internet connection', 'really');
        });
        const { kittens, kittensCreate } = this.props;
        if (kittens==null) kittensCreate();
    }

    renderItem(selection) {
        return (
            <Button
                onPress={() => {
                    if(this.props.kittens!==null) {
                        this.props.kittensFetch(this.props.kittens, selection.item)
                    }
                }}
                title={selection.item}
                showing={selection.item==this.props.listLength ? true : false }
            />
        )
    }

    countSelect() {
        return (
            <View>
                <FlatList
                    style= {{
                        padding: 10,
                        backgroundColor: '#fff',
                    }}
                    horizontal={true}
                    data={[30,50,100]}
                    renderItem={this.renderItem.bind(this)}
                    ListHeaderComponent = {<Text style={{ fontSize: 20}}>Showing:</Text>}
                 />
            </View>
        );
    }

    render() {
        return (
            <View>                
                <FlatList 
                    data= {this.props.visibleKittens}
                    renderItem={(visibleKitten) => <ListItem visibleKitten={visibleKitten} />}
                    keyExtractor={(visibleKitten) => visibleKitten.id.toString()}
                    ListHeaderComponent = {this.countSelect.bind(this)}
                    ListFooterComponent = {this.countSelect.bind(this)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { kittens, visibleKittens, listLength, loading } = state.kitten;
    return { kittens, visibleKittens, listLength, loading };
};

export default connect(mapStateToProps, { kittensFetch, kittensCreate })(KittenList);
