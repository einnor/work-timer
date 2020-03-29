import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeHeader: {
    textAlign: 'center',
    fontSize: 40,
    color: '#000000',
    marginTop: 50,
  },
  buttonView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  finishButton: {
    textTransform: 'uppercase',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ea4c4c',
  }
});

export default styles;