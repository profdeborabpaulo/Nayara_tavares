import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function NovaTarefa() {
  const [tarefa, setTarefa] = useState('');

  function salvarTarefa() {
    if (!tarefa.trim()) {
      return;
    }

    router.replace({
      pathname: '/',
      params: {
        novaTarefa: tarefa.trim(),
      },
    });
  }

  return (
    <View style={styles.container}>
      {/* ÍCONE */}
      <View style={styles.iconeContainer}>
        <Ionicons name="create-outline" size={50} color="#2196f3" />
      </View>

      {/* TÍTULO */}
      <Text style={styles.title}>Cadastrar Nova Tarefa</Text>

      {/* ORIENTAÇÃO */}
      <Text style={styles.descricao}>
        Digite abaixo a tarefa que deseja adicionar.
      </Text>

      {/* CAMPO DE TEXTO */}
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      {/* BOTÃO SALVAR */}
      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarTarefa}>
        <Ionicons
          name="save-outline"
          size={20}
          color="#fff"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.botaoTexto}>SALVAR TAREFA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  iconeContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 15,
  },
  botaoSalvar: {
    backgroundColor: '#2196f3',
    borderRadius: 8,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});