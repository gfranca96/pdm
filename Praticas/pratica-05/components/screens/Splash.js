import { View, Text, ActivityIndicator } from 'react-native';
import Titulo from '../Titulo';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Titulo>Meu App</Titulo>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Splash;
