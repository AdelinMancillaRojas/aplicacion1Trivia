import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function App() {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState('first');
  const [result, setResult] = useState('')

  const isCorrect = (newValue) => {
    setChecked(newValue)
    if (newValue === 'Cristobal Colon') {
      setResult("Es Correcto!")
    } else {
      setResult("Es Incorrecto!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trivia</Text>
      <SafeAreaView>
        <Text style={styles.colorTextWhite}>Escribe tu nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder='Nombre'
        />
      </SafeAreaView>
      <Text style={styles.title}> ¿Quien descubrio america? </Text>
      <View style={styles.optionContainer} >
        <RadioButton
          color='#fff'
          value="Michael Jackson"
          status={checked === 'Michael Jackson' ? 'checked' : 'unchecked'}
          onPress={() => isCorrect('Michael Jackson')}
        />
        <Text style={styles.colorTextWhite}>Michael Jackson</Text>
      </View>
      <View style={styles.optionContainer} >
        <RadioButton
          color='#fff'
          value="Cristobal Colon"
          status={checked === 'Cristobal Colon' ? 'checked' : 'unchecked'}
          onPress={() => isCorrect('Cristobal Colon')}
        />
        <Text style={styles.colorTextWhite}>Cristobal Colon</Text>
      </View>
      <View style={styles.optionContainer} >
        <RadioButton
          color='#fff'
          value="Cr7 (El Bicho)"
          status={checked === 'Cr7 (El Bicho)' ? 'checked' : 'unchecked'}
          onPress={() => isCorrect('Cr7 (El Bicho)')}
        />
        <Text style={styles.colorTextWhite}>Cr7 (El Bicho)</Text>
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.colorTextWhite}>Los resultados se muestran aqui:</Text>
        <Text style={styles.colorTextWhite}>Nombre: {text}</Text>
        <Text style={styles.colorTextWhite}>Resultado: {result}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005eff',
    margin: 15,
    padding: 20
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  colorTextWhite: {
    color: 'white',
  },
  optionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  resultsContainer: {
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
});
