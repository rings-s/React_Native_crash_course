# components in react native 


# Text Component
    - All text displayed in your UI must be wrapped in a <Text> component. Failing to do so will cause your app to crash. It is the closest equivalent to the <p> tag on the web. Source: From Web to Native

    - Unlike HTML, you cannot put a string directly inside a <View>.
    Wrong: <View>Hello</View> (Crash)
    Right: <View><Text>Hello</Text></View>




# view component
    - <View> is the React Native equivalent of <div> on the web. It is used for layout and styling — wrapping and grouping other components together. Source: From Web to Native
    - Layout is Flexbox by Default


```jsx
import { View, Text } from "react-native";

export function MyTextComponent() {
  return (
    <View>
      <Text>Hello, native!</Text>
    </View>
  );
}
```


# StyleSheet Component 
- React Native has no global CSS. All styles are written in JavaScript and passed via a style prop. StyleSheet.create() is used to define and organize your styles in one place. Source: React Native styling

```jsx
import { View, Text, StyleSheet } from "react-native";

export function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  greeting: {
    fontSize: 24,
  },
});
```



# image Component 
The <Image> component lets you render images from a URL or a local file. It is the closest equivalent to the <img> tag on the web. Source: From Web to Native

```jsx
import { Image } from "react-native";

// From a URL:
export function MyImage() {
  return <Image source={{ uri: "https://domain.com/static/my-image.png" }} />;
}

// From a local file:
const imageSource = require("../assets/my-image.png");
export function MyLocalImage() {
  return <Image source={imageSource} />;
}

```


- Tip: Many Expo apps use Source: expo-image instead of the built-in Image, as it offers better performance, caching, and additional image format support. Source: Build a screen


use this example for expo-image:
https://docs.expo.dev/tutorial/build-a-screen/


## Expo-Image

```jsx
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://picsum.photos"
        placeholder={{ blurhash: 'L6PZf6ay1jPn~qj[f6ay1jPn~qj[' }}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
```

