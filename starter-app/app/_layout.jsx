import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack 
        screenOptions={{
        headerStyle: { backgroundColor: '#0a015e' }, // Global Dark-purple Header
        headerTintColor: '#e9e9e9',                    // White Back Button/Title
        headerTitleStyle: { fontWeight: 'bold' },
      }}
      >
        <Stack.Screen name="index" options={{ title: 'App Name' }} />
        <Stack.Screen name="about" options={{ title: 'About Us' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact Us' }} />
      </Stack>
      <Text style={styles.footer}>Footer</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    paddingBottom: 20,
  },
});
