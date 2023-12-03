import React, { useEffect, useRef, useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from '../../components/ButtonIcon/index';
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, TextInput } from 'react-native';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playersAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

type RouteParams = {
  group:string;
}

// Componente Filter envolvido em React.memo para otimização
const MemoizedFilter = React.memo(Filter);

export function NewMovimentation(){
  const [newPlayerName,setNewPlayerName] = useState('')
  const [team,setTeam] = useState('Time A')
  const [players,setPlayers] = useState<PlayerStorageDTO[]>([])
  
  const navigation = useNavigation()
  const route = useRoute()
  
  const {group} = route.params as RouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Nova Pessoa','Informe o nome da pessoa para Adicionar')
    }

    const newPlayer = {
      name:newPlayerName,
      team,
    }

    try {
      await playersAddByGroup(newPlayer,group)
      newPlayerNameInputRef.current?.blur()

      setNewPlayerName('')
      fetchPlayersByTeam();

    }catch(error) {
      if(error instanceof AppError){
        Alert.alert('Nova Pessoa',error.message)
      }else {
        console.log(error);
        Alert.alert('Nova Pessoa','Não Foi Possível Adicionar')

        
      }
    }
  }

  async function fetchPlayersByTeam(){
    try{
      const playersByTeam = await playersGetByGroupAndTeam(group,team)
      setPlayers(playersByTeam)
    }
      catch(erro){
        Alert.alert('Pessoas', 'Não foi possível carregas as pessoas')
      }
  }

  async function handlePlayerRemove(playerName: string){
    try {
      await playerRemoveByGroup(playerName,group)
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Remover Pessoa','Não foi possivel remover essa pessoa')
    }
  }

  async function groupRemove(){
  try {
  await groupRemoveByName(group)
  navigation.navigate('movimentation')
  } catch (error) {
    Alert.alert('Remover Grupo','Não foi possivel remover o grupo')
}
  }

  async function handleGroupRemove(){
    Alert.alert('Remover','Deseja Remover o Grupo?',[
      {text:'Não',style:'cancel'},
      {text:'Sim',onPress:()=>{
        groupRemove()
      }
    }
    ])
  }

  useEffect(()=>{
    fetchPlayersByTeam()
  },[team])

  return(
    <Container>
      <Header showBackButton />

      <Highlight 
      title={group}
      subtitle="Adicione a galera e separe os times" 
      />

    <Form>
      <Input 
      inputRef={newPlayerNameInputRef}
      placeholder="Nome da Pessoa"
      value={newPlayerName}
      autoCorrect={false}
      onChangeText={setNewPlayerName}
      onSubmitEditing={handleAddPlayer}
      returnKeyType='done'
      />

      <ButtonIcon 
      icon="add"
      onPress={handleAddPlayer}
      />
    </Form>

<HeaderList>
<FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
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
        keyExtractor={item => item.name}
        renderItem={({item})=> (
          <PlayerCard 
          onRemove={()=>{handlePlayerRemove(item.name)}}
          name={item.name} 
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
        onPress={handleGroupRemove}
        />
    </Container>
  )
}
