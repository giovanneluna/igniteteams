import { useTheme } from "styled-components"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_600};
  padding: 24px;
`
//@ts-ignore
export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
}))``
