import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonComponent from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import TextInputComponent from '../../../components/ui/TextInput';
import theme from '../../../global/theme';
import AuthenticationStackParamList from '../../../models/AuthenticationRoute';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../store/auth';
import { IAuthentication } from '../../../models/store';

type Props = StackScreenProps<AuthenticationStackParamList, 'authentication'>;

export default function AuthenticationScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const text = isLogin ? 'Login' : 'Signup';
  const dispatch = useDispatch();

  function handleSwitchMode() {
    setIsLogin((prev) => !prev);
  }

  function handleSubmit() {
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    const userData: IAuthentication = {
      email,
      password,
    };
    if (isLogin) {
      return;
    }
    try {
      dispatch(signUp(userData));
    } catch (e: any) {
      Alert.alert(e.message);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.accent]}
        start={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.cardContainer}>
            <Card>
              <View style={styles.card__inner}>
                <TextInputComponent
                  label='E-mail'
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize='none'
                  keyboardType='email-address'
                  placeholder='E-mail'
                />
                <TextInputComponent
                  label='Password'
                  value={password}
                  onChangeText={setPassword}
                  textContentType='password'
                  autoCompleteType='password'
                  secureTextEntry
                  placeholder='password'
                />
                <View style={styles.actions}>
                  <ButtonComponent
                    title={isLogin ? `Switch to ${text}` : `Switch to ${text}`}
                    onPress={handleSwitchMode}
                    color={theme.colors.accent}
                  />
                  <ButtonComponent title={text} onPress={handleSubmit} />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
