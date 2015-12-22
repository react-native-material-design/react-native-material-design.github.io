---
layout: docs
title: Checkbox
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/Checkbox.js
---

A standalone checkbox component.

> If you're looking to use multiple checkboxes in the same "form", check out the [Checkbox Group](/components/checkbox-group) component.

## Usage

```
...
import { Checkbox } from 'react-native-material-design';

render() {
	return (
		<View>
			<Checkbox value="accepted" label="I agree to the terms and conditions" />
		</View>	
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
label | string | The supporting text of the checkbox, which is triggers a "check" when pressed | false |
theme | [THEME_NAME](/api/theme_name) |  | false | light
primary | [PRIMARY_COLORS](/api/primary_colors) |  | false | [PRIMARY](/api/primary)
value | string, number | The value which is passed back to the onCheck function when checked | true | 
checked | bool | If true, the checkbox is checked when the component is mounted | false | false
disabled | bool | Whether to render the checkbox as disabled. If disabled the component will not respond to any touches | false | false
onCheck | func | Called when the checkbox is checked. The value of the checkbox is passsed into this function | false |