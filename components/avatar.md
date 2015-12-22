---
layout: docs
title: Avatar
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/Avatar.js
---

The avatar component renders either an Icon or Image within circular container.

> If a `src` and `icon` are both supplied, the `src` will be preferred.

## Usage

```
...
import { Avatar } from 'react-native-material-design';

render() {
	return (
		<View>
			<Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg" />
			<Avatar icon="phone" backgroundColor="paperRed" size={120} />
		</View>	
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
icon | string | The [MaterialIcon](https://design.google.com/icons) name | false |
src | string | The URL of the image source | false | 
size | number | The width and height the avatar will be rendered at | false | 40
color | string | The color of the icon | false | #ffffff
backgroundColor | string | The color of the avatar | false | paperGrey500
