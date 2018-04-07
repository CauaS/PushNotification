import React,{ Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

image = require('../imgs/image1.jpg');

export default class ImageElement extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
                <Image 
                    source={this.props.imgsource}
                    style={styles.image}
                >
                </Image>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        backgroundColor: '#FFF'
    }
})