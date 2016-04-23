/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';


import Alert from "react-native-alert"

var styles = StyleSheet.create({
	alertTextStyle : {
		fontFamily: "Arial",//just set global fontFamily
	},
})
Alert.setTextStyle(styles.alertTextStyle);
class Example extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={()=>{
					let toast = Alert.alert('title', 'message', [
						{
							text: "OK",
							onPress: ()=>{}
						},
						{
							text: "cancel",
							onPress: ()=>{}
						}
					]);
				}}>
					<Text>Click Me</Text>
				</TouchableOpacity>
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
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('Example', () => Example);
