import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./component/Screen1";
import Screen2 from "./component/Screen2";
import Screen3 from "./component/Screen3";
import Screen4 from "./component/Screen4";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
                <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
                <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
                <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}