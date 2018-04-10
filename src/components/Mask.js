import React, { Component } from 'react'
import { View, Button, Text } from 'react-native';

// import the component
import { TextInputMask } from 'react-native-masked-text'

export default class Mask extends Component {
	constructor(props) {
        super(props)
        
        this.state = {
            valor: ''
        }
    } 
    
	isValid() {
		// isValid method returns if the inputed value is valid.
		// Ex: if you input 40/02/1990 30:20:20, it will return false
		//	   because in this case, the day and the hour is invalid.
		let valid = this.refs['myDateText'].isValid();
		// get converted value. Using type=datetime, it returns the moment object.
		// If it's using type=money, it returns a Number object.
        let rawValue = this.refs['myDateText'].getRawValue();
    }

    onChangeText(texto) {
        console.log('Chamou a função' + texto);
        this.setState({ valor: texto})       
    }


	render() {
		// the type is required but options is required only for some specific types.
		return (
            <View>
                <TextInputMask
                    ref={'myDateText'}
                    type={'only-numbers'}
                    
                    options={{
                        //format: 'DD-MM-YYYY HH:mm:ss'
                        //format: 'R$ 0,00'
                    }}
                    onChangeText={texto => this.onChangeText(texto)}
                    value={this.state.valor}
                />

                <Button
                    title='Title'
                    onPress={this.onChangeText}
                />
                <Text>{this.state.valor}</Text>
            </View>
		);
	}
}