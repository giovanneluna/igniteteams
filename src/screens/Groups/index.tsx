import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups,setGroups] = useState<string[]>([])
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma"/>

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
        <GroupCard 
        title={item}
        // onPress={''}
         />
        )}
        contentContainerStyle={groups.length === 0 && {flex:1}}
        ListEmptyComponent={()=> (
        <ListEmpty 
        message='Ops, parece que você não possui nenhuma turma cadastrado' 
        />
        )}
      />
      <Button
      title='Criar Nova Turma'
      type='SECONDARY'
      />
    </Container>
  );
}
