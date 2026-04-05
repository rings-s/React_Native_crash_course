Here is the updated Lesson 1 guide. I have used specific Markdown code blocks for every command to ensure they are easy to copy and paste for your future projects.
## Lesson 1: React Native & Expo Router Setup
This guide covers the essential steps to initialize an Expo project, configure file-based routing, and enable web support.
------------------------------
## 1. Project Initialization
To start a new project with the latest version of Expo, use the following command:
```
npx create-expo-app@latest
```
Note: This creates the "blank" template which serves as your clean starting point.
------------------------------
## 2. Developer Productivity
To speed up your coding, install the ES7+ React/Redux/React-Native snippets extension in your editor.

* Snippet to remember: Type rnfes and press Tab.
* Result: Automatically generates a React Native Functional Export with Stylesheet template.

------------------------------
## 3. Expo Router Installation
Follow these steps to transition from a "blank" app to a routed app.
## Step 1: Install Dependencies
Run this command to install the Router and its required peer libraries:
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```
## Step 2: Set the Entry Point
Open your package.json and change the "main" field. This tells Expo to use the Router logic:

"main": "expo-router/entry"

## Step 3: Modify app.json
Add the following configuration to enable deep linking, typed routes, and the Router plugin:
```json
{
  "expo": {
    "scheme": "starter-app",
    "plugins": ["expo-router"],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

Tip: The scheme (e.g., "starter-app") is a unique string that allows your app to open via a link (like starter-app://).

------------------------------
## 4. Web Support Setup
By default, the blank template is mobile-only. To run your app in a browser, you must install the web engine:
Install web packages:
```
npx expo install react-native-web react-dom @expo/metro-runtime
```
Update app.json:
Ensure your web section is using the Metro bundler:
```json
"web": {
  "bundler": "metro"
}
```

------------------------------
## 5. Running the Project
Once everything is configured, start your development server using a tunnel to work across devices, make sure to be on the same network:


npx expo start --tunnel


* Press a for Android.
* Press i for iOS.
* Press w for Web.
* Press c to clear the cache if you encounter unexpected errors.
* Press shift + m for more options.

Should we move on to Lesson 2: Organizing your app folder and creating your first pages?

