import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons: string[][] = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
    ['=']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      {buttons.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((btn) => (
            <TouchableOpacity key={btn} style={styles.button} onPress={() => handlePress(btn)}>
              <Text style={styles.buttonText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  input: {
    fontSize: 32,
    textAlign: 'right',
    marginBottom: 10
  },
  result: {
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 20,
    color: 'gray'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  button: {
    flex: 1,
    margin: 4,
    backgroundColor: '#eee',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 24
  }
});
