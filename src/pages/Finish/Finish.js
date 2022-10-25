import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

const Finish = () => {
	return (
		<View style={styles.container}>
			<Animatable.View
				animation="fadeInLeft"
				delay={300}
				style={styles.containerHeader}
			>
				<Text style={styles.message}>Obrigado</Text>
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
		backgroundColor: "	#98FB98",
	},
	containerHeader: {
		marginTop: "4%",
		marginBottom: "8%",
		paddingStart: "2%",
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
	registerText: {
		color: "#9370DB",
	},
});

export default Finish;
