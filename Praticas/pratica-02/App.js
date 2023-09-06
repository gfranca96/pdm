import React from 'react';
import Box from './components/Box';
import { StyleSheet, View } from 'react-native';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'aliceblue',
    },

    flexColumn: {
      flexDirection: 'Columun',
    },

    flexRow: {
      flexDirection: 'row',
    },

    flexColumnReverse: {
      flexDirection: 'column-reverse',
    },

    flexRowReverse: {
      flexDirection: 'row-reverse',
    },

    justifyStart: {
      justifyContent: 'flexstart',
    },

    justifyCenter: {
      justifyContent: 'center',
    },

    justifyEnd: {
      justifyContent: 'flex-end',
    },

    justifySpaceBetween: {
      justifyContent: 'space-between',
    },

    justifySpaceAround: {
      justifyContent: 'space-around',
    },

    justifySpaceEvenly: {
      justifyContent: 'space-evenly',
    },

    alignStart: {
      alignItems: 'flex-start',
    },

    alignCenter: {
      alignItems: '‘center’',
    },

    alignEnd: {
      alignItems: 'flex-end',
    },

    alignStretch: {
      alignItems: 'stretch',
    },
  });

  return (
    <View
      style={[
        styles.container,
        styles.flexColumn,
        styles.flexRow,
        styles.flexColumnReverse,
        styles.flexRowReverse,
        styles.justifyStart,
        styles.justifyCenter,
        styles.justifyCenter,
        styles.justifyEnd,
        styles.justifySpaceBetween,
        styles.justifySpaceAround,
        styles.justifySpaceEvenly,
        styles.alignStart,
        styles.alignCenter,
        styles.alignEnd,
        styles.alignStretch,
      ]}>
      <Box text="Cor vermelha" color="red" size={50} />
      <Box text="Cor verde" color="green" size={150} />
      <Box text="Cor azul" color="blue" size={200} />
    </View>
  );
};

export default App;
