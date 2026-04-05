
# Lesson 4: Layouts & Stack Navigation


------------------------------
### 1. The Root Layout (_layout.jsx)
In Expo Router, any file named _layout.jsx acts as a wrapper for all the pages in that directory. It allows you to share components (like a Header or Footer) across every screen.

### Using the Slot Component
The <Slot /> is a simple placeholder. It tells the router: "Render the current child page here."

```jsx
import { StyleSheet, Text, View } from 'react-native';
import { Slot } from 'expo-router';
export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Global App Header</Text>
      
      {/* This renders index.js, profile.js, etc. */}
      <Slot />
      
      <Text style={styles.footer}>© 2024 My App</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 50,
    backgroundColor: '#eee',
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 20,
  }
});
```

------------------------------
### 2. Moving to Stack Navigation
While Slot is basic, the <Stack /> component provides the Native Mobile experience. It automatically adds a Header Bar and manages the "Back" button history.
### The "Stack" Mental Model
Imagine a deck of cards:

* Push: When you navigate to a new screen, you place a new card on top of the current one.
* Pop: When you press "Back," the top card is removed, revealing the card underneath.

------------------------------
### 3. Screen Configuration (Stack.Screen)
You can use screenOptions for Global styles (all pages) and <Stack.Screen /> for Local settings (specific pages).

```jsx
import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1E90FF' }, // Global Blue Header
        headerTintColor: '#fff',                    // White Back Button/Title
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Example: Specifically changing the Home screen title */}
      <Stack.Screen 
        name="index" 
        options={{ title: 'Home Feed' }} 
      />

      {/* Example: Hiding the header for a Login screen */}
      <Stack.Screen 
        name="login" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
```

------------------------------
### 4. Summary of Key Components

| Component | Purpose |
|---|---|
| _layout.jsx | The entry file that wraps all pages in a folder. |
| <Slot /> | A basic placeholder for page content (no native header). |
| <Stack /> | The navigator that provides the Top Bar and Back functionality. |
| <Stack.Screen /> | Used to change titles, hide headers, or add buttons to the bar. |

------------------------------
### 5. Important Note on File Naming

* All these files must live inside the app folder.
* _layout.jsx affects everything in the same folder level.
* index.jsx is always your default "Home" screen.

