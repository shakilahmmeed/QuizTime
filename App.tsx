import { StyleSheet, Text, View } from "react-native";
import { styled, withExpoSnack } from "nativewind";

const StyledText = styled(Text);
const StyledView = styled(View);

function App() {
	return (
		<StyledView style={styles.container}>
			<StyledText className="text-red-600 font-semibold">
				This is quiz app 23
			</StyledText>
		</StyledView>
	);
}

export default withExpoSnack(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
