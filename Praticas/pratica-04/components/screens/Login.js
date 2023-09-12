import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input}
        placeholder={'email'} 
        keyboardType={'email'} 
      />
      <TextInput style={styles.input}
        placeholder={'Senha'} 
        secureTextEntry={true}
      />
      <Button title={'Entrar'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
  },

  input:{
    widht: '100%',
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },

})

export default Login;
