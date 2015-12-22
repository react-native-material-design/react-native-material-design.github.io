---
layout: docs
title: Button
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/Button.js
google: https://www.google.com/design/spec/components/buttons.html
---

The button component renders a touchable button with consumes the full width of it's parent container. 

## Usage

```
...
import { Button } from 'react-native-material-design';

render() {
	return (
		<View>
			<Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
			<Button value="NORMAL RAISED" raised={true} onPress={()=> console.log("I pressed a raised button")} />
		</View>	
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
value | string | The text which is rendered inside of the button | true | 
theme | [THEME_NAME](/api/theme_name) |  | false | light
primary | [PRIMARY_COLORS](/api/primary_colors) |  | false | [PRIMARY](/api/primary)
overrides <br /> *textColor* <br /> *backgroundColor* <br /> *rippleColor* | object <br /> *string* <br /> *string* <br /> *string* | An object to override any colors <br /> *Override the text color of the button* <br /> *Override the background color of the button* <br /> *Override the ripple color of the button* | false <br /><br /><br /><br /> | 
disabled | bool | Whether to render the button as disabled. This will prevent any onPress props being triggered | false | false
onPress | func | A function which is called when the touch of the button is released | false | 
