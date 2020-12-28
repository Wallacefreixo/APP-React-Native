import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  forgetPassword:{
    alignItems:'flex-end',
    paddingTop: 20,
    paddingRight: 10,
  },
  txtforgetPassword:{
    fontSize: 15,
    color: "#fff",
  },
  bannerCadastrar: {
    backgroundColor: '#3B2675',
    height: 60,
    alignItems: 'center',
    justifyContent: "center",
  },
  txtbannerCadastrar: {
    color: "#fff",
    fontSize: 16
  }
});

export default styles;
