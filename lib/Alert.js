var React = require('react');
var ReactNative = require('react-native');

import {
	Component,
	PropTypes,
} from 'react';

import {
	View,
} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import AlertContainer from './AlertContainer';
const _alerts = []

class Alert extends Component {
	static displayName = 'Alert';
	static propTypes = AlertContainer.propTypes;
	static defaultProps = AlertContainer.defaultProps;
	static _textStyle = null;
	static setTextStyle = (style) => {
		Alert._textStyle = style;
	}
	static alert = (title , message = null, buttons = []) => {
		let alert = null;
		return alert = new RootSiblings(<AlertContainer
			message={message}
			buttons={buttons}
			visible={true}
			textStyle={Alert._textStyle}
			close={()=>{
			alert && Alert.hide(alert)	
			}}
		>
			{title}
		</AlertContainer>);
	};

	static hide = alert => {
		if (alert instanceof RootSiblings) {
			alert.destroy();
		} else {
			console.warn(`Alert.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof alert}\` instead.`);
		}
	};

	_alert = null;

	componentWillMount = () => {
		this._alert = new RootSiblings(<AlertContainer
			textStyle={Alert._textStyle}
			{...this.props}
		/>);
	};

	componentWillReceiveProps = nextProps => {
		this._alert.update(<AlertContainer
			textStyle={Alert._textStyle}
			{...nextProps}
		/>);
	};

	componentWillUnmount = () => {
		this._alert.destroy();
	};

	render() {
		return null;
	}
}

export {
	RootSiblings as Manager
};
export default Alert;
