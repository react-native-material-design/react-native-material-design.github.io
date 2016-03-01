---
layout: docs
title: List
github: https://github.com/react-native-material-design/react-native-material-design/blob/master/lib/List.js
google: https://www.google.com/design/spec/components/lists.html
---

The List component generates multiple line items vertically based on a data source.

## Usage

```
...
import React, { Component, ScrollView } from 'react-native';
import { List } from 'react-native-material-design';
const data = {
    items: [
        {
            text: 'Item A',
            text: 'Item B',
            text: 'Item C',
            text: 'Item D',
        }
    ]
};

class Demo extends Component {
    render() {
        return (
            <ScrollView>
                {data.items.map(item, index) => (
                    <List key={index} primaryText={item.text}/>
                )}
            </ScrollView>
        );
    }
}
```

## Props

Prop | Type | Description | Required | Default
--- | --- | --- | --- | ---
primaryText | string | Main text | true |
secondaryText | string | Optional text | false |
captionText | string | | false |
secondaryTextMoreLine | shape | | false |
leftIcon | [Icon][icon] | Icon that appears on the left of the Text | false |
rightIcon | [Icon][icon] | Icon that appears on the right of the Text | false |
leftAvatar | [Avatar][avatar] | Avatar that appears on the left of the Text | false |
rightAvatar | [Avatar][avatar] | Avatar that appears on the right of the Text | false |
lines | number | Number of lines | false | 1
primaryColor | string | Primary color of the text | false | rgba(0,0,0,.87)
onPress | func | Function to be called when the user press the item | false |
onLeftIconClick | func | Function to be called when the user click on the Left Icon | false |
onRightIconClick | func | Function to be called when the user click on the Right Icon | false |

[icon]: http://react-native-material-design.github.io/components/icon
[avatar]: http://react-native-material-design.github.io/components/avatar
