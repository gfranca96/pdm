import { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        label={'Email'}
        mode={'outlined'}
        value={'email'}
        onChangeText={(text) => setEmail(text)}
        keyboardType={'email-adress'}
      />
      <TextInput
        label={'Senha'}
        mode={'outlined'}
        value={'senha'}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={'email-adress'}
      />
      <Button mode={'contained'} onPress={props.onLogin}>
        Entrar
      </Button>
    </View>
  );
};

export default Login;
