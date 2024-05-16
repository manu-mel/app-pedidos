import styled, { css } from 'styled-components/native';

interface Props {
  enabled?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
`;

export const SwitchComponent = styled.TouchableOpacity<Props>`
  height: 30px;
  width: 65px;
  border-radius: 15px;
  justify-content: center;
  box-shadow: 0px 1px 3px #0000005a;
  border-color: #727272;
  elevation: 6;

  ${({ enabled, theme }) =>
    enabled
      ? css`
          background-color: ${theme.colors.switchEnabledBackground};
        `
      : css`
          background-color: ${theme.colors.switchDisabledBackground};
        `}
`;

export const ToggleSwitchLeft = styled.View`
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background-color: white;
  margin-left: 2px;
`;

export const ToggleSwitchRight = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: white;
  margin-left: 35px;
`;

export const Label = styled.Text`
  padding-left: 5px;
  font-size: 18px;
  width: 100 %;
  color: ${({ theme }) => theme.colors.labelInput};
`;
