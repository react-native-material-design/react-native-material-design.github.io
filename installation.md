---
layout: docs
title: Installation
---

Install the library:

```
npm i react-native-material-design --save
```

Follow the [Android installation instructions](https://github.com/oblador/react-native-vector-icons#android) on the [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) library, which consists of adding the following to your `./android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

_Note: It's possible that the instructions on the react-native-vector-icons page differ from what is above. If that's the case, follow those instructions, and please file an issue with us to update it here._

Import any required components into your project:

```
import { Button, Card } from 'react-native-material-design';
```

> You may need to restart your packager in order for the icons to render.

## Dependencies

There are currently only two dependencies which this library needs:

- [react-native-material-design-styles](https://www.npmjs.com/package/react-native-material-design-styles)

Provides the colors and typography for Material Design.

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

Provides a component to render MaterialIcons from Google.
