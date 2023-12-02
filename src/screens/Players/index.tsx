import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from '../../components/ButtonIcon/index';
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from 'react-native';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

// Componente Filter envolvido em React.memo para otimização
const MemoizedFilter = React.memo(Filter);

export function Players(){
  const [team,setTeam] = useState('Time A')
  const [players,setPlayers] = useState([])
  
  return(
    <Container>
      <Header showBackButton />

      <Highlight 
      title="Nome da Turma"
      subtitle="Adicione a galera e separe os times" 
      />

    <Form>
      <Input 
      placeholder="Nome da Pessoa"
      autoCorrect={false}
      />

      <ButtonIcon 
      icon="add"

      />
    </Form>

<HeaderList>
      <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <MemoizedFilter 
            title={item} 
            isActive={item === team}
            onPress={()=>setTeam(item)}
          />
        )}
        horizontal
      />

      <NumbersOfPlayers>
       {players.length}
      </NumbersOfPlayers>
</HeaderList>

       <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({item})=> (
          <PlayerCard 
          onRemove={()=>{}}
          name={item} 
          />
        )}
        ListEmptyComponent={()=> (
          <ListEmpty 
          message='Não há pessoas nesse time' 
          />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            {
              paddingBottom:100
            },
              players.length === 0 && {flex:1}
          ]}
        />
        <Button title='Remover Turma'
        type='SECONDARY'
        />
    </Container>
  )
}
