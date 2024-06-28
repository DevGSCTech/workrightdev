import { StyleSheet, Text, View } from 'react-native';

import PaymentScreenInfo from '@/components/PaymentScreenInfo';


export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments Screen</Text>
      <View style={styles.separator} />
      <PaymentScreenInfo path="app/(tabs)/four.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

