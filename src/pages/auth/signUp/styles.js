import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    color: "#FE486B",
    backgroundColor: "#E7E7E8",
    fontSize: 16,
  },
  error: {
    color: "#000",
    fontSize: 16,
    paddingBottom: 20,
    width: 300,
  }
});

export default styles;
