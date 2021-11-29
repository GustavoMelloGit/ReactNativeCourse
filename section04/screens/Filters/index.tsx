import { DrawerScreenProps } from '@react-navigation/drawer';
import React, {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import { View, Text } from 'react-native';
import FilterSwitch from '../../components/FilterSwitch';
import SaveButton from '../../components/Header/SaveButton';
import { DrawerParamList } from '../../routes';
import { styles } from './styles';

type DrawerProps = DrawerScreenProps<DrawerParamList, 'Filter'>;

export default function FiltersScreen(props: DrawerProps): JSX.Element {
  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const { navigation } = props;

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton onPress={saveFilters} />,
    });
  }, []);

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
