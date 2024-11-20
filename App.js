import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Button } from 'react-native';
import { Formulario } from './hooks/registro'; 
import AssetExample from './components/AssetExample';

export default function App() {
  const {
    nombre, setNombre,
    apellido, setApellido,
    correo, setCorreo,
    cedula, setCedula,
    contrasenia, setContrasenia,
    vcontrasenia, setVContrasenia,
    Registro
  } = Formulario();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AssetExample />

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Apellido:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu apellido"
            value={apellido}
            onChangeText={setApellido}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cédula:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu cédula"
            value={cedula}
            onChangeText={setCedula}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu correo"
            value={correo}
            onChangeText={setCorreo}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu contraseña"
            value={contrasenia}
            onChangeText={setContrasenia}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Verifica tu contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="Reingresa tu contraseña"
            value={vcontrasenia}
            onChangeText={setVContrasenia}
            secureTextEntry={true}
          />
        </View>

        <Button title="Registrar" onPress={Registro} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  scrollContent: {
    padding: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 5,
    padding: 10,
  },
});
