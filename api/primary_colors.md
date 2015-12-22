---
layout: docs
title: PRIMARY_COLORS
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/config.js
---

The `PRIMARY_COLORS` array is often used internally for PropType validation. It contains an array of Material Design paper color names, which can be found [here](#). Any of these can be used in the `primary` prop on supporting components.

The default color mapping for each color is '500', however some components need to use a darker or lighter version of the color, which the [COLOR](/api/color) API handles.

## Usage

Although this API is often used for reference, it does have it's uses, hence why it is externally exposed:

```
...
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';

render() {
	return (
		<View style={styles.container}>
            {PRIMARY_COLORS.map((color) => {
                return (
                    <TouchableHighlight 
                    	key={color} 
                    	onPress={() => { console.log(`Selected ${color}`) }}
                    >
                        <View style={[styles.item, { backgroundColor: COLOR[`${color}500`].color }]}>
                            <Text style={styles.text}>{color}</Text>
                        </View>
                    </TouchableHighlight>
                );
            })}
        </View>
	);
}
...
```
