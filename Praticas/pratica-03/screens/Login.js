import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} 
        source={require('../assets/snack-icon.png')} 
      />
      <Text style={styles.title}>
        Login
      </Text>
      <TextInput style={styles.input} 
        placeholder={'E-mail'} 
        keyboardType={'email-address'} 
      />
      <TextInput style={styles.input}
        placeholder={'Senha'} 
        secureTextEntry={true} 
      />
      <Button title="Entrar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    height: 72,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 400,
    textAlign: 'center',
    paddingBottom: 24,
  },
  input: {
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 16,  
  }
});

export default Login;
