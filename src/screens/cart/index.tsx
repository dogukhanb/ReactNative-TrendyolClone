import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import {RouteType} from '../routes/RouteType'

type Props = <RouteType><'index'>;

const Cart: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Cart;
