import { Stack } from 'expo-router';

export default function Layout() {

return (


<Stack>

  {/* =================================================
      TELA PRINCIPAL
    ================================================= */}

  <Stack.Screen
    name="index"
    options={{
      title: 'Gerenciador de Tarefas',
    }}
  />


  {/* =================================================
      TELA DE NOVA TAREFA
    ================================================= */}

  <Stack.Screen
    name="nova-tarefa"
    options={{
      title: 'Nova Tarefa',
    }}
  />

</Stack>

);

}
