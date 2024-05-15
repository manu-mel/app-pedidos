import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  height: 100%;
`;

export const ContainerElements = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ContainerDistrict = styled.View`
  flex: 2;
`;

export const ContainerNumber = styled.View`
  flex: 1;
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
