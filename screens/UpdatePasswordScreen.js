import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Signup$Login$LogoutApi from '../apis/Signup$Login$LogoutApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const UpdatePasswordScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const resetPasswordSupabase = data => {
    if (data) {
      let primaryString = data.split('=');
      return primaryString[1].split('&')[0];
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      const authTokenSupabase = resetPasswordSupabase(
        props.route?.params?.accessToken ?? ''
      );
      setGlobalVariableValue({
        key: 'AUTHORIZATION_HEADER',
        value: 'Bearer ' + authTokenSupabase,
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View style={styles.Viewd8e6b79e}>
        <Spacer top={'8%'} right={8} left={8} />
        <Text style={[styles.Text1c8b1943, { color: theme.colors.menuOuvert }]}>
          {'Réinitialiser votre mot de passe'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <TextInput
          onChangeText={newTextInputValue => {
            try {
              setGlobalVariableValue({
                key: 'emailReset',
                value: newTextInputValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.TextInputf1ec2552,
            { borderColor: theme.colors.divider },
          ]}
          placeholder={'Votre nouveau mot de passe'}
        />
        <Spacer top={'8%'} right={8} left={8} />
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await Signup$Login$LogoutApi.resetPasswordPOST(Constants, {
                  email: Constants['emailReset'],
                });
                navigation.navigate('RealloginscreenScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={[
            styles.ButtonSolid2f2cfcf0,
            {
              color: theme.colors.custom_rgb255_255_255,
              backgroundColor: theme.colors.primary,
            },
          ]}
          title={'Valider'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid2f2cfcf0: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    height: 192,
    textAlign: 'center',
  },
  Text1c8b1943: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
  },
  TextInputf1ec2552: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: 140,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Viewd8e6b79e: {
    marginLeft: '3%',
    marginRight: '3%',
  },
});

export default withTheme(UpdatePasswordScreen);
