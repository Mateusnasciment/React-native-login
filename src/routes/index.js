import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Este navegador usa as APIs nativas UINavigationController no iOS e Fragment no Android para que a navegação construída com createNativeStackNavigato
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Finish";

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="SignIn"
				component={SignIn}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Finish"
				component={Finish}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default Routes;
