import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType'

type Props = <RouteType><'index'>;

const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Home;
