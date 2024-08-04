import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType'

type Props = <RouteType><'index'>;

const Profile: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyComponent</Text>
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

export default Profile;
