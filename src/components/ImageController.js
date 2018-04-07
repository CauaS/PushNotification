
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal
} from 'react-native';

import ImageElement from './ImageElement.js';

export default class App extends Component {

    state ={
        modalVisible: false,
        modalImage: require('../imgs/image1.jpg'),
        images: [
            require('../imgs/image1.jpg'),
            require('../imgs/image2.jpg'),
            require('../imgs/image3.jpg'),
        ]
    }

    setModalVisible(visible, imageKey) {
        console.log(imageKey);
        this.setState({ modalImage: this.state.images[imageKey] });
        console.log('Modal Image: '+this.state.modalImage);
        this.setState({ modalVisible: visible });
    }

    getImage() {
       return this.state.modalIamge;
    }

    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback 
                        key={key} 
                        onPress={() => { this.setModalVisible(true, key)}}> 
                        <View style={styles.imagewrap}>
                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>

        });

        return (
             <View style={styles.container}>

                 <Modal style={styles.modal} 
                        animationType={'fade'}
                        transparent={true} 
                        visible={this.state.modalVisible}
                        onRequestClose={() => {}}>

                        <View style={styles.modal}>
                            <Text style={styles.text}
                                onPress={() => {this.setModalVisible(false)}}>
                                Close
                            </Text>
                             <ImageElement imgsource={this.state.modalImage}></ImageElement>
                        </View>
                 </Modal>
                 {images}
             </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',
        // For iOS status bar, we need a marginTop of 20.
       // marginTop: 20,
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3) - 12,
        width: (Dimensions.get('window').width/2) - 4,
        backgroundColor: '#fff',
    }, 
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: { 
       color: '#fff',
    }

});
