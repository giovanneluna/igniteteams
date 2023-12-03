import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';
import { Loading } from '@components/Loading';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleMovimentation() {
    navigation.navigate('movimentation');
  }
  

  return (
    <Container>
      <Highlight 
        title="Hi, User"
        subtitle="Movimentação Mensal"
      />

      <Button 
        title='Cadastrar Movimentação'
        onPress={handleMovimentation}
      />
    </Container>
  );
}