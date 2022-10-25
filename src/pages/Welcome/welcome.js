import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

const SignUp = () => {
	return (
		<View style={styles.container}>
			<Animatable.View
				animation="fadeInLeft"
				delay={300}
				style={styles.containerHeader}
			>
				<Text style={styles.message}>Cadastre(se)</Text>
			</Animatable.View>

			<Animatable.View
				animation="fadeInUp"
				delay={300}
				style={styles.containerForm}
			>
			</Animatable.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#00BFFF",
	},
	containerHeader: {
		marginTop: "14%",
		marginBottom: "8%",
		paddingStart: "5%",
	},
	message: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#fff",
	},
	title: {
		fontSize: 40,
		marginTop: 48,
	},
	buttonText: {
		color: "#fff",
		fontSize: 28,
		fontWeight: "center",	
	},
	buttonRegister: {
		marginTop: 14,
		alignSelf: "center",
	},
	registerText: {
		color: "#4169E12",
	},
});

export default SignIn;
