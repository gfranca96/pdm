import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Meu App" />
        <Appbar.Action icon="exit-outline" onPress={() => {}} />
      </Appbar.Header>
    </View>
  );
};

export default Home;
