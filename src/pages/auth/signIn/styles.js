import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  titulo:{
    fontSize: 30,
    padding: 20,
  },
  logo: {
    width: 200,
    height: 130,
    marginBottom: 20
  },
  input: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    color: "#FE486B",
    backgroundColor: "#E7E7E8",
    fontSize: 16,
  },
  botaoCadastro: {
    width: 300,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
  },
  textoBotaoCadastro: {
    color: "#333",
    fontSize: 16

  }
});