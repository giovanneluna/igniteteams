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

export function Movimentation() {
  const [movimentation,setMovimentation] = useState('')
  const navigation = useNavigation()
  async function handleNewMovimentation(){
  navigation.navigate('newMovimentation', {movimentation})
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

        <Button 
        style={{marginTop:20}}
        title='Criar'
        onPress={handleNewMovimentation}
        />
      </Content>
      
    </Container>
  )
}