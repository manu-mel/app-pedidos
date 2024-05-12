import styled, { css } from 'styled-components/native';

interface CheckboxProps {
  checked: boolean;
}

export const Container = styled.View`
  align-items: center;
  padding-top: 2%;
`;

export const ContainerElements = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxElement = styled.TouchableOpacity<CheckboxProps>`
  height: 20px;
  width: 20px;
  border: 1px;
  border-radius: 3px;

  ${({ checked, theme }) =>
    checked
      ? css`
          background-color: ${theme.colors.checkboxBackgroundChecked};
        `
      : css`
          background-color: ${theme.colors.checkboxBackgroundUnchecked};
        `}
`;

export const Label = styled.Text`
  height: 24px;
  font-size: 19px;
  color: ${({ theme }) => theme.colors.labelInput};
  margin-left: 5px;
`;
