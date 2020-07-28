import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 18px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f4ede8;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px 0 ${16 + getBottomSpace()}px;

  background: #392e38;
  border-top-width: 1px;
  border-color: #232129;
`;

export const CreateAccountButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #ff9000;

  margin-left: 8px;
`;
