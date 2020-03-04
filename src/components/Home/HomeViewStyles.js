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
  mainActionButton: {
    width: 284,
    height: 284,
    borderRadius: 142,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00cd5e',
  },
  mainActionButtonText: {
    fontSize: 60,
    color: '#ffffff',
    fontWeight: 'bold',
  }
});

export default styles;