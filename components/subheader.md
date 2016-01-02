---
layout: docs
title: Subheader
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/Subheader.js
google: https://www.google.com/design/spec/components/subheaders.html
---

A Subheader is a text based component with set styling, commonly used to identify specific sections within your app.

## Usage

```
...
import { Subheader } from 'react-native-material-design';

render() {
	return (
		<View>
			<Subheader text="Normal Subheader"/>
            <Subheader text="Normal Subheader with color" color="paperRed" />
            <Subheader text="Normal Subheader" inset />
            <Subheader text="Normal Subheader with color" color="paperOrange" inset />
		</View>	
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
text | string | The Subheader text | true |
color | string | The color of the text | false | rgba(0,0,0,.54)
inset | bool | Whether the Subheader is set in a fixed distance from the left (72dp) | false | false
theme | [THEME_NAME](/api/theme_name) |  | false | light
