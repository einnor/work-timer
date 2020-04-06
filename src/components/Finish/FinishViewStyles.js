import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
	},
	innerContainer: {
		flex: 4,
		justifyContent: 'space-between',
	},
	header: {
		fontSize: 40,
		textAlign: 'center',
		flex: 2,
	},
	subHeader: {
		fontSize: 40,
		textAlign: 'center',
		flex: 2,
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