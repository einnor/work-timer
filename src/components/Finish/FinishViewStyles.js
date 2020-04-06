import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
	},
	headerContainer: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		fontSize: 40,
		textAlign: 'center',
		flex: 0.5,
	},
	subHeader: {
		fontSize: 40,
		textAlign: 'center',
	},
	activityNameLabel: {
		fontSize: 16,
	},
	activityNameInput: {
		borderRadius: 5,
		borderColor: '#848484',
		borderWidth: 1,
		height: 44,
		marginTop: 7
	},
	actionButtonsContainer: {
		marginTop: 65,
		flexDirection: 'row',
		justifyContent: "space-between"
	},
});

export default styles;