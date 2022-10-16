import React from 'react';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const RealFormfnameScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdateFnamePATCH =
    Get$UpdateDataApi.useUpdateFnamePATCH();

  const [ageInputValue, setAgeInputValue] = React.useState('');
  const [inputNameValueOk, setInputNameValueOk] = React.useState('');
  const [nameInputValue, setNameInputValue] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [textInputValue4, setTextInputValue4] = React.useState('');
  const [textInputValue5, setTextInputValue5] = React.useState('');
  const [textInputValue6, setTextInputValue6] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Spacer top={'8%'} right={8} left={8} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewd8e6b79eContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Spacer top={'8%'} right={8} left={8} />
        {/* info profil */}
        <Text
          style={[
            styles.Text4fac19da,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Quel est votre prénom ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        {/* prenom */}
        <Text
          style={[
            styles.Text5c26b420,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Prénom\n'}
        </Text>
        {/* name */}
        <TextInput
          onChangeText={newNameValue => {
            try {
              setGlobalVariableValue({
                key: 'fname',
                value: newNameValue,
              });
              console.log(Constants['fname']);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.TextInput7f9a33f8,
            {
              color: theme.colors.strongInverse,
              backgroundColor: theme.colors.menuBg,
            },
          ]}
          placeholder={'youexample'}
          placeholderTextColor={theme.colors.placeholderInput}
          allowFontScaling={true}
          selectionColor={theme.colors.lightInverse}
        />
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await get$UpdateDataUpdateFnamePATCH.mutateAsync({
                  id: Constants['id'],
                  name: Constants['fname'],
                });
                navigation.navigate('RealFormgenreScreen');
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
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text4fac19da: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
  },
  Text5c26b420: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 56,
    marginBottom: 0,
  },
  TextInput7f9a33f8: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    height: 192,
    marginTop: -50,
    paddingBottom: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
  },
});

export default withTheme(RealFormfnameScreen);
