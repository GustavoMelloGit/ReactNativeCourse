import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  Platform,
} from 'react-native';

interface Props extends TouchableOpacityProps, TouchableNativeFeedbackProps {
  children: ReactNode;
}
export default function Touchable({ children, ...rest }: Props) {
  const TouchableComponent: any =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return <TouchableComponent {...rest}>{children}</TouchableComponent>;
}
