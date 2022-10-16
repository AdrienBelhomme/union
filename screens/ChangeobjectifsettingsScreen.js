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

const ChangeobjectifsettingsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdateObjectifPATCH =
    Get$UpdateDataApi.useUpdateObjectifPATCH();

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
        {/* q objectfif */}
        <Text
          style={[
            styles.Text4fac19da,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Quel est votre objectif ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <RadioButtonGroup
          onValueChange={newRadioButtonGroupValue => {
            try {
              setGlobalVariableValue({
                key: 'objectif',
                value: newRadioButtonGroupValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          value={radioButtonGroupValue3}
        >
          {/* se muscler */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow22921179,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Se muscler'}
            value={'se muscler'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* se detendre */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRowe58b3f7d,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Se détendre'}
            value={'se detendre'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* etre en bonne sante */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRowe58b3f7d,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Être en bonne santé'}
            value={'bonne sante'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* Perdre du poids */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRowe58b3f7d,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Perdre du poids'}
            value={'Perdre du poids'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* Ameliorer sa souplesse */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRowe58b3f7d,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Améliorer sa souplesse'}
            value={'souplesse'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* Se tonifier */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRowe58b3f7d,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Se tonifier'}
            value={'tonifier'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
          />
          <Spacer top={'8%'} right={8} left={8} />
          <Spacer top={'8%'} right={8} left={8} />
        </RadioButtonGroup>
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await get$UpdateDataUpdateObjectifPATCH.mutateAsync({
                  id: Constants['id'],
                  objectif: Constants['objectif'],
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
  RadioButtonRow22921179: {
    fontSize: 56,
    marginBottom: '4%',
    marginTop: '4%',
  },
  RadioButtonRowe58b3f7d: {
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

export default withTheme(ChangeobjectifsettingsScreen);
