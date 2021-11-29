import React from 'react';
import { View, Text, Switch } from 'react-native';
import theme from '../../global/theme';
import { styles } from './styles';

interface IFilterSwitchProps {
  text: string;
  state: boolean;
  onChange: (value: boolean) => void;
}
export default function FilterSwitch(props: IFilterSwitchProps): JSX.Element {
  const { text, state, onChange } = props;
  return (
    <View style={styles.filterContainer}>
      <Text>{text}</Text>
      <Switch
        value={state}
        trackColor={{ true: theme.colors.primary, false: '#cecece' }}
        thumbColor='#fff'
        onValueChange={onChange}
      />
    </View>
  );
}
