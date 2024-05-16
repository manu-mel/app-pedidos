import styled, { css } from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundModal};
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.containerModal};
  border-radius: 3px;
  padding: 15px;
  max-height: 600px;
  width: 350px;

  ${css`
    box-shadow: 0px 1px 3px #0000005a;
    border-color: #727272;
    elevation: 6;
  `}
`;

export const ModalItemContainer = styled.View`
  width: 100%;
  margin: 3px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.containerItemModal};
  padding: 0 20px;
`;

export const ModalItemTouchable = styled.TouchableOpacity`
  padding: 13px 0;
`;

export const ModalItemText = styled.Text`
  color: ${({ theme }) => theme.colors.textModal};
  font-size: 18px;
`;
