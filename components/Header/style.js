import { StyleSheet } from 'react-native';
//import logo from 'assets/images/logo.png';
//import { Logo } from "/assets/images/logo.png";

const styles = StyleSheet.create({
  container: {
    position: 'center',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});

export default styles;

