import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
