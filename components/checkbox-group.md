---
layout: docs
title: Checkbox Group
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/CheckboxGroup.js
---

A container which renders a collection of checkboxes 

> If you're looking to use an individual checkbox, check out the [Checkbox](/components/checkbox) component.

## Usage

```
...
import { CheckboxGroup } from 'react-native-material-design';

render() {
	return (
		<CheckboxGroup
			onSelect={(values) => { console.log(`${values} are currently selected`)}}
			checked={[1, 3]}
			items={[{
				value: 1, label: 'Checkbox 1'
			}, {
				value: 2, label: 'Checkbox 2'
			}, {
				value: 3, label: 'Checkbox 3 Disabled', disabled: true
			}]}
		/>
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
theme | [THEME_NAME](/api/theme_name) |  | false | light
primary | [PRIMARY_COLORS](/api/primary_colors) |  | false | [PRIMARY](/api/primary)
onSelect | func | Called when a checkbox item is selected. An array of currently selected items is returned | false |
checked | array | An array of item values which are checked on component mount | false |
items <br /> *value* <br /> *label* <br /> *disabled* | array | An array of checkbox objects <br /> *The value of the checkbox returned in the onSelect array* <br /> *The supporting text of the checkbox* <br /> *Whether the checkbox is rendered as disabled. Will not respond to touches* | false |