import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens Import
import CreateAccount from "./src/screens/CreateAccount";
import WalkThroughScreen from "./src/screens/WalkThroughScreen";

// Components Import

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Stack.Navigator>
          {/* WalkThroughScreen  */}
          <Stack.Screen
            name="WalkThroughScreen"
            component={WalkThroughScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
