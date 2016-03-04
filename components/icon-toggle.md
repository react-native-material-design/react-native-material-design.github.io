---
layout: docs
title: IconToggle
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/IconToggle.js
google: NA
---

The IconToggle component renders a touchable & toggle-able icon, consuming the full width of its parent container.

## Usage

```
import { IconToggle } from 'react-native-material-design';

render() {
    const iconStyle={
        margin: 16
    };
    const containerStyle = {
        alignItems: 'center'
    }    
	return (
		<View style={containerStyle}>
            <IconToggle
                opacity={0.2}
                color="rgba(0,255,255,.9)">
                <Icon name='menu'
                      size={24}
                      color="rgba(0,255,0,.9)"
                      style={iconStyle}
                />
            </IconToggle>
		</View>
	);
}
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
color | string | Default color for the icon | true | rgba(0,255,0,.9) |
opacity | number | When the icon's toggled, we'll draw a circle around it. This property defines parameter `alpha` for the circle's color. For example: with `color = rgba(0,255,0,.9)`, `opacity=0.1`, the circle's corlor will be `rgba(0,255,0,.1` | false | 0.1
disabled | bool | Whether to render the icon as disabled. This will prevent any onPress props being triggered | false | false
onPress | func | A function which is called when the touch of the button is released | false |
percent | number | Property to control the circle's size | false | 90|
badge | shape | Set this property if you want to have a red badge over the icon. | false | |

A `badge` is an object with following field:
```js
{
    value: PropTypes.number,
    animate: PropTypes.bool,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string
}
```
For more information about working with `badge`, you may have a look at [IconToggles.js (Demo app)](https://github.com/react-native-material-design/demo-app/blob/master/src/scenes/IconToggles.js)

## Examples
```js
render(){
    const rightIconStyle={
        margin: 16
    };
    const containerStyle = {
        alignItems: 'center',
        borderWidth: 2,
    }

    return (
        <View style={containerStyle}>
            <IconToggle
                opacity={0.2}
                percent={50}
                badge={{value: 1}}
                color="rgba(0,255,255,.9)">
                <Icon name='menu'
                      size={24}
                      color="rgba(0,255,0,.9)"
                      style={rightIconStyle}
                />
            </IconToggle>
        </View>
    );
    }
```
