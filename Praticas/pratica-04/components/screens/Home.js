import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', item: '1' },
  { id: '2', item: '2' },
  { id: '3', item: '3' },
  { id: '4', item: '4' },
  { id: '5', item: '5' },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text>Home</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Home</Text>
      </View>
      <FlatList data={data} renderItem={renderItem} />
      <Button title={'Adicionar'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },

  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },

  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  listItem: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '%cccccc',
  },
});

export default Home;
