import { View, StyleSheet } from 'react-native';
import Rotas from './routes/navigation';

export default function Index() {
  return (
    <View style={styles.container}>
      <Rotas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // <--- Isso faz a View ocupar a tela toda
  },
});