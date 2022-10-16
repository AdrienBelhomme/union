import React from 'react';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  CheckboxRow,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const RealFormgenesScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdateGenePATCH = Get$UpdateDataApi.useUpdateGenePATCH();

  const [ageInputValue, setAgeInputValue] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxRowValue2, setCheckboxRowValue2] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [checkboxValue3, setCheckboxValue3] = React.useState(false);
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
  const [radioButtonGroupValue4, setRadioButtonGroupValue4] =
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
        {/* q genes */}
        <Text style={[styles.Textbde709d2, { color: theme.colors.menuOuvert }]}>
          {'Avez-vous des blessures ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <View style={styles.View60653e56}>
          {/* dos */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'dos',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'dos',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRowa576bc71,
              { color: theme.colors.menuOuvert },
            ]}
            label={'Dos'}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            defaultValue={Constants['dos']}
          />
          {/* genoux */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'genoux',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'genoux',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRowa576bc71,
              { color: theme.colors.menuOuvert },
            ]}
            label={'Genoux'}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            defaultValue={Constants['genoux']}
          />
          {/* epaules */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'epaules',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'epaules',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRowa576bc71,
              { color: theme.colors.menuOuvert },
            ]}
            label={'Epaules'}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            defaultValue={Constants['epaules']}
          />
          {/* cheville */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'cheville',
                  value: undefined,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRowa576bc71,
              { color: theme.colors.menuOuvert },
            ]}
            label={'Cheville'}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            defaultValue={Constants['cheville']}
          />
          {/* cou */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'cou',
                  value: undefined,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'cou',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRowa576bc71,
              { color: theme.colors.menuOuvert },
            ]}
            label={'Cou'}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            defaultValue={Constants['cou']}
          />
          {/* poignet */}
          <CheckboxRow
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'poignet',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'poignet',
                  value: undefined,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRowa576bc71,
              { color: theme.colors.menuOuvert },
            ]}
            label={'Poignet'}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            defaultValue={Constants['poignet']}
          />
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await get$UpdateDataUpdateGenePATCH.mutateAsync({
                  cheville: Constants['cheville'],
                  cou: Constants['cou'],
                  dos: Constants['dos'],
                  epaule: Constants['epaules'],
                  genou: Constants['genoux'],
                  id: Constants['id'],
                  poignet: Constants['poignet'],
                });
                navigation.navigate('RealformfrequencedureeScreen');
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
  CheckboxRowa576bc71: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: '4%',
    marginTop: '4%',
    minHeight: 50,
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Textbde709d2: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
  },
  View60653e56: {
    alignContent: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
  },
});

export default withTheme(RealFormgenesScreen);
