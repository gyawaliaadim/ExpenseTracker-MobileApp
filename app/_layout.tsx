import "@/app/global.css";
import { ExpensesContextProvider } from "@/store/expenses-context";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "react-native";


export default function RootLayout() {
  return (
    <ExpensesContextProvider>
      <StatusBar barStyle="light-content" />

      <Redirect href="/(tabs)/recent" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="manageExpenses"
          options={{
            presentation: "modal",
          }} />
      </Stack>


      {/* <Slot /> */}
    </ExpensesContextProvider>
  );
}
