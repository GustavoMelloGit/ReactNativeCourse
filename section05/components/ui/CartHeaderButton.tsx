import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../global/theme';

export default function CartHeaderButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={{ marginRight: 15 }}>
      <Ionicons name='cart-outline' size={25} color={theme.colors.primary} />
    </TouchableOpacity>
  );
}
