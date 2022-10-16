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

const RealFormpreferenceScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdatePreferencePATCH =
    Get$UpdateDataApi.useUpdatePreferencePATCH();

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
        {/* q preference */}
        <Text
          style={[
            styles.Text233c9085,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Quelles activités appréciez-vous ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <View style={styles.View60653e56}>
          {/* danse */}
          <CheckboxRow
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'danse',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'danse',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRow82044ddd,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Danse'}
            value={checkboxRowValue}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* pilates */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'pilates',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'pilates',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRow82044ddd,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Pilates'}
            value={checkboxRowValue}
            direction={'row'}
            color={theme.colors.primary}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
          />
          {/* yoga */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'yoga',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'yoga',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRow82044ddd,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Yoga'}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
            defaultValue={Constants['yoga']}
          />
          {/* cardio */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'cardio',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'cardio',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRow82044ddd,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Cardio'}
            value={checkboxRowValue}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* coaching particulier */}
          <CheckboxRow
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'coaching',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'coaching',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRow82044ddd,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Coaching particulier'}
            value={checkboxRowValue}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
          />
          {/* toning */}
          <CheckboxRow
            onUncheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'toning',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            onCheck={() => {
              try {
                setGlobalVariableValue({
                  key: 'toning',
                  value: true,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.CheckboxRow94ee3515,
              { color: theme.colors.custom_rgb255_255_255 },
            ]}
            label={'Toning'}
            value={checkboxRowValue}
            direction={'row'}
            color={theme.colors.primary}
            checkedIcon={'AntDesign/checkcircle'}
            uncheckedIcon={
              'MaterialCommunityIcons/checkbox-blank-circle-outline'
            }
            size={30}
            uncheckedColor={theme.colors.custom_rgb255_255_255}
          />
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await get$UpdateDataUpdatePreferencePATCH.mutateAsync({
                  cardio: Constants['cardio'],
                  coaching: Constants['coaching'],
                  danse: Constants['danse'],
                  id: Constants['id'],
                  pilates: Constants['pilates'],
                  toning: Constants['toning'],
                  yoga: Constants['yoga'],
                });
                navigation.navigate('RealFormgenesScreen');
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
  CheckboxRow82044ddd: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: '4%',
    marginTop: '4%',
    minHeight: 50,
  },
  CheckboxRow94ee3515: {
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
  Text233c9085: {
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

export default withTheme(RealFormpreferenceScreen);
