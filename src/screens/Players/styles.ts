import { SafeAreaView } from "react-native-safe-area-context"
import { useTheme } from "styled-components"
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_600};
  padding: 24px;
`
export const Form = styled.View`
  width: 100%;
  background-color: ${() => useTheme().COLORS.GRAY_700};

  flex-direction: row;

  padding-right: 10px;
  border-radius: 6px;
`
export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`
export const NumbersOfPlayers = styled.Text`
  color: ${() => useTheme().COLORS.GRAY_200};
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  font-size: ${() => useTheme().FONT_SIZE.SM}px;
`
