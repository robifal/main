import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

const App1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  };

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder='User'
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder='Senha'
      />
      <Button title="Entrar" onPress={handleLogin}
       style={styles.Button}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
});

export default App1;
