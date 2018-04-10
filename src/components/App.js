import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Picker, 
    AppState, 
    Button
} from 'react-native';

import PushController from './PushController.js';
import PushNotification  from 'react-native-push-notification';
import { Actions } from 'react-native-router-flux';
import Mask from './Mask.js';


export default class App extends Component {

    constructor(props) {
        super(props);


        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.functionOnPress = this.functionOnPress.bind(this);
        this.functionOnPressTwo = this.functionOnPressTwo.bind(this);

        this.state = {
            seconds: 1
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange); 
    }

    handleAppStateChange(appState) {
        
        if (appState === 'background') {
            console.log(appState);
            PushNotification.localNotificationSchedule({
                message: 'My Notification Message in '+ this.state.seconds + 'seconds', 
                date: new Date(Date.now() + (this.state.seconds * 1000)),
                vibrate: false
              });
        } else {
            console.log(appState);
            PushNotification.localNotificationSchedule({
                message: 'My notification in '+ this.state.seconds + 'seconds',
                date: new Date(Date.now() + (this.state.seconds * 1000)),
                vibrate: false
            });
        }
    }
    functionOnPress() {
        PushNotification.localNotificationSchedule({
            message: 'My Notification Message in '+ this.state.seconds + 'seconds', 
            date: new Date(Date.now() + (this.state.seconds * 1000)),
            vibrate: false
          });
    } 
    
    functionOnPressTwo() {
        PushNotification.localNotification({
            message: 'My notification now!',
            subText: "This is a subText",
            color: "red",
            tag: 'some_tag',
            group: "group",
            vibrate: false
        })
    }
         
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Choose some value to start this game...
                </Text>

                <Picker
                    style={styles.picker}
                    selectedValue={this.state.seconds}
                    onValueChange={(seconds) => this.setState({ seconds })}
                >
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                </Picker>
                <View style={styles.button}>
                    <Button
                        title='Press me!'
                        onPress={this.functionOnPress}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title='Press me now!'
                        onPress={this.functionOnPressTwo}
                    />
                </View>
                <PushController />
                <Button 
                    title='Push Gallery!'
                    onPress={() => console.log(Actions.ImageController())}
                />
                <Mask />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    picker: {
        width: 100
    },
    button: {
        marginBottom: 5
    }
})
