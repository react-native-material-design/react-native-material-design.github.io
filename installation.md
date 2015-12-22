---
layout: docs
title: Installation
---

Install the library:

```
npm i react-native-material-design --save
```

Copy the `MaterialIcons` font file from [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#android) to your local working directory:

`./node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf` -> `./android/app/src/main/assets/fonts`.

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
