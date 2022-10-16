import React from 'react';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text } from 'react-native';

const ChangeniveausettingsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdateNiveauPATCH =
    Get$UpdateDataApi.useUpdateNiveauPATCH();

  const [ageInputValue, setAgeInputValue] = React.useState('');
  const [inputNameValueOk, setInputNameValueOk] = React.useState('');
  const [nameInputValue, setNameInputValue] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue3, setNumberInputValue3] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [radioButtonGroupValue3, setRadioButtonGroupValue3] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [textInputValue4, setTextInputValue4] = React.useState('');
  const [textInputValue5, setTextInputValue5] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Spacer top={'8%'} right={8} left={8} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewd8e6b79eContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Spacer top={'8%'} right={8} left={8} />
        {/* q niveau */}
        <Text
          style={[
            styles.Text4fac19da,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Quel est votre niveau de fitness ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <RadioButtonGroup
          onValueChange={newRadioButtonGroupValue => {
            try {
              setGlobalVariableValue({
                key: 'niveau',
                value: newRadioButtonGroupValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          direction={'vertical'}
        >
          {/* debutant */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow4087fa7e,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Débutant'}
            value={'debutant'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
          />
          {/* intermediaire */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow4087fa7e,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Intermédiaire'}
            value={'intermediaire'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
          />
          {/* avance */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow4087fa7e,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Avancé'}
            value={'avance'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
          />
          {/* expert */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow4087fa7e,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Expert'}
            value={'expert'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
          />
          <Spacer top={'8%'} right={8} left={8} />
          <Spacer top={'8%'} right={8} left={8} />
          {/* Valider */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  await get$UpdateDataUpdateNiveauPATCH.mutateAsync({
                    id: Constants['id'],
                    niveau: Constants['niveau'],
                  });
                  navigation.navigate('ProfilScreen');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={[
              styles.ButtonSolid25cd6f2c,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Valider'}
            loading={false}
          />
        </RadioButtonGroup>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid25cd6f2c: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    height: 192,
    textAlign: 'center',
  },
  RadioButtonRow4087fa7e: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: '4%',
    marginTop: '4%',
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text4fac19da: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
  },
});

export default withTheme(ChangeniveausettingsScreen);
