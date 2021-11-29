import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import FilterSwitch from '../../components/FilterSwitch';
import SaveButton from '../../components/Header/SaveButton';
import { DrawerParamList } from '../../routes';
import { setFilters } from '../../store/actions/meals';
import { styles } from './styles';

type DrawerProps = DrawerScreenProps<DrawerParamList, 'Filter'>;

export default function FiltersScreen(props: DrawerProps): JSX.Element {
  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const { navigation } = props;
  const dispatch = useDispatch();

  const saveFilters = (): void => {
    const appliedFilters = {
      glutenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton onPress={saveFilters} />,
    });
  }, [isGluttenFree, isLactoseFree, isVegan, isVegetarian]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        text='Gluten-free'
        state={isGluttenFree}
        onChange={setIsGluttenFree}
      />
      <FilterSwitch
        text='Lactose-free'
        state={isLactoseFree}
        onChange={setIsLactoseFree}
      />
      <FilterSwitch
        text='Vegan'
        state={isVegetarian}
        onChange={setIsVegetarian}
      />
      <FilterSwitch text='Vegetarian' state={isVegan} onChange={setIsVegan} />
    </View>
  );
}
