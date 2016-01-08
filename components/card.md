---
layout: docs
title: Card
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/Card/index.js
google: https://www.google.com/design/spec/components/cards.html
---

The Card component contains subcomponents (Media, Body & Actions) to provide the styles and functionality of the native components.

## Usage

```
...
import { Card, Button } from 'react-native-material-design';

render() {
	return (
            <View>
                <Card>
                    <Card.Media
                        image={<Image source={require('./../img/welcome.jpg')} />}
                        overlay
                    />
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button value="ACTION" />
                    </Card.Actions>
                </Card>
            </View>
	);
}
...
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
elevation | number | The elevation the entire card is given (if not compatible, a border is supplied) | false | 2
children | node | The React components rendered inside of the card. | true | 

## Media

### Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
image | [Image](https://facebook.github.io/react-native/docs/image.html) | An native `Image` component | true | 
height | number | The height a which the component is rendered. | false | 150
overlay | bool | If true, any children are rendered with a black opaque background. | false | false
children | node | React components which are rendered at the bottom of the media image | false |

