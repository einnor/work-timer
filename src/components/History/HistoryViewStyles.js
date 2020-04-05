import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 13,
    height: 60,
	},
	itemNameContainer: {
		flex: 4,
	},
  itemNameText: {
    fontSize: 18,
  },
  itemDetailsContainer: {
		flex: 2,
		alignItems: 'flex-end',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	itemDetailsText: {
		fontSize: 14,
	},
	header: {
		fontSize: 40,
		textAlign: 'center',
	},
});

export default styles;