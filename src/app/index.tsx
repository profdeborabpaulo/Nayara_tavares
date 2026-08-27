// Importando os componentes do React-Native
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import { useState } from 'react';
import Saudacao from '@/components/teste'

export default function HomeScreen( ){
  const[tarefa, setTarefa] = useState('');
  const[tarefas, setTarefas] = useState([
    'Estudar React-Native',
    'Aprender a usar useState',
    'Criar a primeira tela',
  ]);

// Criar a função chamada adicionarTarefa
  return(
    <View style={styles.container}>
      <Text style = {styles.title}>Gerenciador de Tarefas</Text>
      <TextInput style ={styles.input}placeholder='Digite uma Tarefa:'/>

    </View>

  )
}

//Criando o Estilo para o index.tsx
const styles=StyleSheet.create({

  container:{
    flex:1,
    padding:20,
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  
  input:{
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding:12,
  },


});
