---
layout: docs
title: Icon
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/Icon.js
---

The icon component renders a single [MaterialIcon](https://design.google.com/icons). Since the icons are in a font format, they can be sized and colored without losing quality.

> Want an interactive icon? Check out the [Icon Button](/components/icon-button)!

## Usage

```
...
import { Icon } from 'react-native-material-design';

render() {
	return (
		<Icon name="menu" color="rgba(255,0,0,.9)" />
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
name | string | The [MaterialIcon](https://design.google.com/icons) name | true |
style | object | Any additional styles to be rendered with the icon | false |
size | number | The width & height the icon will be rendered at | false | 30
color | string | The color of the icon | false | #757575