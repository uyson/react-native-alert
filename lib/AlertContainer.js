var React = require('react');
var ReactNative = require('react-native');

import {
	Component,
	PropTypes,
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TouchableWithoutFeedback,
	PixelRatio,
} from 'react-native';

const DIMENSION = Dimensions.get('window');
const WINDOW_WIDTH = DIMENSION.width;
const WINDOW_HEIGHT = DIMENSION.height;
const BORDER_WIDTH = 1 / PixelRatio.get();
const BORDER_COLOR = '#dbdbdf';
const textStyle  = {
	fontFamily: "Arial",
}
let styles = StyleSheet.create({
	defaultStyle: {
		position: 'absolute',
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		left: 0,
		top: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgba(0,0,0, 0.3)'
	},
	containerStyle: {
		marginHorizontal: 40,
		paddingTop: 20,
		backgroundColor: '#fff',
		flex: 1,
		borderRadius: 12,
	},
	title: {
		textAlign: 'center',
		marginHorizontal: 20,
		fontSize: 16,
		fontWeight: 'bold',
		lineHeight: 22,
		backgroundColor: 'transparent',
		marginBottom: 10,
	},
	message: {
		textAlign: 'center',
		fontSize: 14,
		marginHorizontal: 16,
		marginBottom: 25,
	},
	button: {
		height: 44,
		borderColor: BORDER_COLOR,
		justifyContent: 'center',
		// backgroundColor: 'red',
		backgroundColor: 'transparent',
	},
	buttonText: {
		textAlign: 'center',
		backgroundColor: 'transparent',
		fontSize: 16,
		fontWeight: 'bold',
	},
	doubleButton: {
		flex: 1,
	},
	textStyle: {},
});

class AlertContainer extends Component {
	static displayName = 'AlertContainer';

	static propTypes = {
		...View.propTypes,
		children: PropTypes.string.isRequired,
		message: PropTypes.string,
		buttons: PropTypes.array,
		textStyle: Text.propTypes.style,
	};

	static defaultProps = {
		message: null,
		buttons: [],
		textStyle: styles.textStyle
	};

	constructor() {
		super(...arguments);
	}

	_root = null;
	_renderSigleButton(button) {
		return (
			<TouchableWithoutFeedback onPress={() => {
				if(button.onPress)
					button.onPress()
				this.props.close && this.props.close()
			} }>
				<View style={[styles.button, {
					borderTopWidth: BORDER_WIDTH,
				}]}>
					<Text style={[styles.buttonText, this.props.textStyle]}>{button.text}</Text>
				</View>
			</TouchableWithoutFeedback>
				)
	}
	_renderDoubleButton(buttons) {
		return (
			<View style={{
				borderTopWidth: BORDER_WIDTH,
				borderColor: BORDER_COLOR,
				flexDirection: 'row',
			}}>
				<TouchableWithoutFeedback onPress={() => {
					if(buttons[0].onPress)
						buttons[0].onPress()
					this.props.close && this.props.close()
				} }>
					<View style={[styles.button, { flex: 1 }]}>
						<Text style={[styles.buttonText, this.props.textStyle]}>{buttons[0].text}</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => {
					if(buttons[1].onPress)
						buttons[1].onPress()
					this.props.close && this.props.close()
				} }>
					<View style={[styles.button, {
						borderLeftWidth: BORDER_WIDTH,
						flex: 1,
					}]}>
						<Text style={[styles.buttonText, this.props.textStyle]}>{buttons[1].text}</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
	_renderMoreThan2Buttons(buttons) {
		return buttons.map((button, i) => {
			return (
				<TouchableWithoutFeedback key={i} onPress={() => {
					if(button.onPress)
						button.onPress()
					this.props.close && this.props.close()
				} }>
					<View style={[styles.button, {
						borderTopWidth: BORDER_WIDTH,
					}]}>
						<Text style={[styles.buttonText,this.props.textStyle, this.props.textStyle]}>{button.text}</Text>
					</View>
				</TouchableWithoutFeedback>
			)
				})
	}
	_renderButtons(buttons) {
		console.log(buttons, 'buttons')
		switch (buttons.length) {
			case 0:
				return this._renderSigleButton({
					text: "OK",
					onPress: () => { }
				})
			case 1:
				return this._renderSigleButton(buttons[0])
			case 2:
				return this._renderDoubleButton(buttons)
			default:
				return this._renderMoreThan2Buttons(buttons)
		}
	}
	render() {
		let {props} = this;
		return <View
			style={[
				styles.defaultStyle,
			]}
			>

			<View
				style={[
					styles.containerStyle,
				]}

				ref={ele => this._root = ele}
				>
				<Text style={[
					styles.title,
					props.textStyle,
				]}>
					{props.children}
				</Text>
				{props.message ? <Text style={[styles.message, props.textStyle,]}>{props.message}</Text> : null}
				{this._renderButtons(props.buttons) }
			</View>
		</View>;
	}
}

export default AlertContainer;
