import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#5D41AF',
  },
  content: {
    flex:2,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop:40,
  },
  icon:{
    margin:20,
  },
  titulo:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
    paddingBottom: 30,
  },
  input: {
    position: 'relative',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 15,
    padding: 18,
    paddingLeft: 45,
    color: "#fff",
    fontSize: 16,
  },
  iconInput:{
    position: 'absolute',
    top: 18,
    left: 20,
  },
  iconVisiblePassword:{
    position: 'absolute',
    top: 18,
    right: 20,
  },
  error: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: 20,
    paddingLeft: 8,
  },
  haveAccount:{
    alignItems:'flex-end',
    paddingTop: 20,
    paddingRight: 10,
  },
  txthaveAccount:{
    fontSize: 15,
    color: "#fff",
  },
});