import { Header } from '@components/Header'
import {Container, Content, Icon} from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group,setGroup] = useState('')
  const navigation = useNavigation()
  async function handleNew(){
    try{
      if(group.trim().length === 0)
      {
        return Alert.alert('Novo Grupo','Informe o nome da Turma')
      }

      await groupCreate(group)
      navigation.navigate('players',{group: group})

    }catch(error){
      if(error instanceof AppError) {
        Alert.alert('Novo Grupo',error.message)
      }
      else {
        Alert.alert('Novo Grupo','Não Foi possível criar um novo Grupo')
      }
      
    }
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