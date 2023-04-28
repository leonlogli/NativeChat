import { StyleSheet, StatusBar, View } from 'react-native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
