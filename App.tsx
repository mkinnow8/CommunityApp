import React from 'react';
import {store} from './src/redux/store';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
