---
layout: docs
title: THEME_NAME
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/config.js
---

The `THEME_NAME` array is mainly used for internal PropType validation. Currently only two themes are supported (light & dark).  When passing in a theme type to a prop it may be rendered differently.

The difference between the light & dark theme is the background on which a component is on top of.

## Usage

Although this API is often used for reference, it does have it's uses, hence why it is externally exposed:

```
...
import { THEME_NAME } from 'react-native-material-design';

render() {
	return (
		<View style={styles.container}>
            {THEME_NAME.map((theme) => {
                return (
                    <Text onPress={(theme) => { console.log(`Selected theme ${theme}) }>{theme}</Text>
                );
            })}
        </View>
	);
}
...
```
