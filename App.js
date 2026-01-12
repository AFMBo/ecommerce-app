import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./context/AppContext";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
