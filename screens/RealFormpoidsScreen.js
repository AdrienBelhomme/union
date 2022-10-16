import React from 'react';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  NumberInput,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text } from 'react-native';

const RealFormpoidsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdatePoidsPATCH =
    Get$UpdateDataApi.useUpdatePoidsPATCH();

  const [ageInputValue, setAgeInputValue] = React.useState('');
  const [inputNameValueOk, setInputNameValueOk] = React.useState('');
  const [nameInputValue, setNameInputValue] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue3, setNumberInputValue3] = React.useState('');
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
        {/* q age */}
        <Text
          style={[
            styles.Text233c9085,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Quel est votre poids ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        {/* poids input */}
        <NumberInput
          onChangeText={newPoidsInputValue => {
            try {
              setGlobalVariableValue({
                key: 'poids',
                value: newPoidsInputValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.NumberInputce6fb04b,
            {
              color: theme.colors.custom_rgb255_255_255,
              backgroundColor: theme.colors.secondary,
            },
          ]}
          value={numberInputValue3}
          placeholder={'45'}
          keyboardType={'numeric'}
          selectionColor={theme.colors.placeholderInput}
          placeholderTextColor={theme.colors.placeholderInput}
        />
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await get$UpdateDataUpdatePoidsPATCH.mutateAsync({
                  id: Constants['id'],
                  poids: Constants['poids'],
                });
                navigation.navigate('RealFormniveauScreen');
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
  NumberInputce6fb04b: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    height: 192,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text233c9085: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
  },
});

export default withTheme(RealFormpoidsScreen);
