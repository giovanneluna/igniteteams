import { Header } from '@components/Header'
import {Container, Content, Icon} from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export function NewGroup() {
  const [group,setGroup] = useState('')
  const navigation = useNavigation()
  function handleNew(){
    navigation.navigate('players',{group: group})
  }
  return (
    <Container>
      <Header showBackButton />
      
      <Content>
        <Icon />
        <Highlight 
        title='Nova Turma'
        subtitle='Cria a turma para adicionar as pessoas'
        />

        <Input 
          placeholder='Nome da Turma'
          onChangeText={setGroup}
        />

        <Button 
        style={{marginTop:20}}
        title='Criar'
        onPress={handleNew}
        />
      </Content>
      
    </Container>
  )
}