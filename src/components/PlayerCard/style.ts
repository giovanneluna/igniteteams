import styled, { useTheme } from "styled-components/native"
import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${() => useTheme().COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
  padding-right: 10px;
`

export const Name = styled.Text`
  flex: 1;

  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  color: ${() => useTheme().COLORS.GRAY_200};
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
`
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`
