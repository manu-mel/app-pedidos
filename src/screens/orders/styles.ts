import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerElements = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerDistrict = styled.View`
  flex: 2;
`;

export const ContainerNumber = styled.View`
  flex: 1;
`;

export const ContainerCheckBox = styled.View`
  flex: 1;
  padding-left: 15px;
`;

export const ContainerButton = styled.View`
  flex: 2;
  padding-right: 8px;
`;

export const ItemContainer = styled.View`
  width: 100%;
  margin: 3px 0;
  padding: 0 20px;
`;

export const ItemTouchable = styled.TouchableOpacity`
  padding: 13px;
  background-color: ${({ theme }) => theme.colors.itemBackground};
  border-radius: 5px;
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.colors.textModal};
  font-size: 18px;
`;
