import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// PRINCIPAL
import Bienvenido from "@pages/bienvenido"

// LOGIN
import Login from "@pages/login"

// DASHBOARD
import Dashboard from "@pages/dashboard"

export default function RootLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen  name="bienvenido" component={Bienvenido} />

      <Stack.Screen  name="login" component={Login} />

      <Stack.Screen  name="dashboard" component={Dashboard} />

    </Stack.Navigator>
  );
}