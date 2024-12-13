import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import ValvulasList from './src/components/valvulasList';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <ValvulasList />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
