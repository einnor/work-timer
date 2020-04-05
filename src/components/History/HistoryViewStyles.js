import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 13,
    height: 60,
  },
  historyItemNameText: {
    fontSize: 18,
  },
  historyItemDetailsContainer: {
		flex: 2,
		alignItems: 'flex-end',
		flexDirection: 'column',
		justifyContent: 'space-between',
  },
});

export default styles;