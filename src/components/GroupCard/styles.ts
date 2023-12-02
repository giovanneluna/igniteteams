import { TouchableOpacity } from "react-native"
import { useTheme } from "styled-components/native"
import styled from "styled-components/native"
import { UsersThree } from "phosphor-react-native"

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${() => useTheme().COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  color: ${() => useTheme().COLORS.GRAY_200};
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
`
//@ts-ignore
export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`
