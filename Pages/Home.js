import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);    
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Text style={styles.title}>ContestBuzz</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.btn}>
            <Button
            title="Codeforces"
            onPress={() => navigation.navigate('Codeforces')}
            color="#FFC512"
            />
        </View>
        <View style={styles.btn}>
            <Button
            title="Codechef"
            onPress={() => navigation.navigate('Codechef')}
            color="#FFC512"
            />
        </View>
        <View style={styles.btn}>
            <Button
            title="Leetcode"
            onPress={() => navigation.navigate('Leetcode')}
            color="#FFC512"
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    padding: 10
  },
  btn: {
    margin: 6,
  }
});