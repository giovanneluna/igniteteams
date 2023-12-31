import { useNavigation } from '@react-navigation/native';
import { BackIcon, Container, Logo, BackButton } from './style';
import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean
}
export function Header({showBackButton = false}: Props) {
  const navigation = useNavigation()
  function handleGoBack(){
    navigation.goBack();
  }
  return (
    <Container>
      {
        showBackButton &&
      <BackButton onPress={handleGoBack}>
      <BackIcon  />
      </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  )
}