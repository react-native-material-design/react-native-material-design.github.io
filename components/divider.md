---
layout: docs
title: Divider
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/Divider.js
google: https://www.google.com/design/spec/components/dividers.html#
---

The divider component is used to break up the flow of content into sections or invidual items in a list. For proper usage of when to use a divider in your app, refer to the Material Design guidelines.

## Usage

```
...
import { Divider } from 'react-native-material-design';

render() {
	return (
		<View>
			<Divider />
			<Divider inset />
		</View>	
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
inset | bool | Whether to add a left set margin to the divider | false | false
