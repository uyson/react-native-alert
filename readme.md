### react-native-alert

#### Features
1. Pure javascript solution.


thanks to https://github.com/magicismight/react-native-root-toast.git
### Install 
`npm install rn-alert`

### How to use

```
import Alert from 'rn-alert';
#set custom text style , is just need to set font
# not require
var styles = StyleSheet.create({
	alertTextStyle : {
		fontFamily: "Arial",//just set global fontFamily
	},
})
Alert.setTextStyle(styles.alertTextStyle);

# call alert
Alert.alert(
	'title',  
	'message',
	[
		{
			text: 'button text',
			onPress: ()=>{
				console.log('button press action')
			}
		},
	]
)
```
	
	
	
	
