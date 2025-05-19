import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('');
  const [presionado, setPresionado] = useState(false);

  const handleContactar = () => {
    Alert.alert("Mensaje enviado", mensaje || "No escribiste nada.");
  };
  imgLocal = require('./assets/codigo.png')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008B8B" barStyle="light-content" />
      <ImageBackground
        source={imgLocal}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.imgur.com/7k12EPD.png' }}
            style={styles.profile}
          />
          <Text style={styles.name}>Federico Azubel</Text>
          <Text style={styles.title}>Desarrollador Frontend</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribí un mensaje"
            value={mensaje}
            onChangeText={setMensaje}
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.button} onPress={handleContactar}>
            <Text style={styles.buttonText}>Contactar</Text>
          </TouchableOpacity>

          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              pressed ? styles.pressablePressed : null
            ]}
            onPressIn={() => setPresionado(true)}
            onPressOut={() => setPresionado(false)}
          >
            <Text
              style={[
                styles.portfolioText,
                presionado ? styles.portfolioTextPressed : null
              ]}
            >
              Ver Portfolio
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: 300,
    alignItems: 'center',
    elevation: 10
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: '#000'
  },
  button: {
    backgroundColor: '#00bcd4',
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  pressable: {
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  pressablePressed: {
    backgroundColor: '#ddd'
  },
  portfolioText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  },
  portfolioTextPressed: {
    color: 'blue'
  }
});
