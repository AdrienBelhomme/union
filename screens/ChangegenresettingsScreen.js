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

const ChangegenresettingsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdateGenrePATCH =
    Get$UpdateDataApi.useUpdateGenrePATCH();

  const [ageInputValue, setAgeInputValue] = React.useState('');
  const [inputNameValueOk, setInputNameValueOk] = React.useState('');
  const [nameInputValue, setNameInputValue] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
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
        {/* q genre */}
        <Text
          style={[
            styles.Text4fac19da,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Quel est votre genre ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        {/* genre */}
        <Text style={{ color: theme.colors.strong }}>
          {
            'Nous utilisons cette information pour calculer le plus pr??cis??ment possible vos d??penses en calories durant un entra??nement.'
          }
        </Text>

        <RadioButtonGroup
          onValueChange={newRadioButtonGroupValue => {
            try {
              setGlobalVariableValue({
                key: 'genre',
                value: newRadioButtonGroupValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          value={radioButtonGroupValue}
          direction={'vertical'}
        >
          {/* feminin */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow89a2e67f,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'F??minin'}
            value={'feminin'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
          />
          {/* masculin */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow89a2e67f,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Masculin'}
            value={'masculin'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
          />
          {/* nonBinaire */}
          <RadioButtonRow
            style={[
              styles.RadioButtonRow89a2e67f,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Non-binaire'}
            value={'non-binaire'}
            color={theme.colors.primary}
            unselectedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
          />
        </RadioButtonGroup>
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await get$UpdateDataUpdateGenrePATCH.mutateAsync({
                  genre: Constants['genre'],
                  id: Constants['id'],
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
  RadioButtonRow89a2e67f: {
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

export default withTheme(ChangegenresettingsScreen);
