import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Signup$Login$LogoutApi from '../apis/Signup$Login$LogoutApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const ForgotpasswordScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const resetSupabasePassword = () => {
    const handleSubmit = async () => {
      console.log(emailReset);

      const notification = toast.loading('Sending Email....');

      try {
        const { data, error } = await supabase.auth.api.resetPasswordForEmail(
          emailReset,
          {
            redirectTo: 'http://localhost:3000/password-reset', //// this will redirect to us at password-reset page,
            //// you can also set your own page for it.
          }
        );

        if (error) {
          toast.error(error.message, {
            id: notification,
          });
        } else if (data) {
          console.log(data);
          toast.success('Sent', {
            id: notification,
          });
        }
      } catch (error) {
        toast.error('Sorry Error occured', {
          id: notification,
        });
      }
    };
  };

  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View style={styles.Viewd8e6b79e}>
        <Spacer top={'8%'} right={8} left={8} />
        <Text style={[styles.Text9852fe4b, { color: theme.colors.menuOuvert }]}>
          {'Entrez votre email pour réinitialiser votre mot de passe'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <View style={styles.View9e411382}>
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
              styles.TextInput4dc51091,
              {
                color: theme.colors.custom_rgb255_255_255,
                borderColor: theme.colors.divider,
              },
            ]}
            placeholder={'Entrez votre email...'}
          />
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await Signup$Login$LogoutApi.resetPasswordPOST(Constants, {
                  email: Constants['emailReset'],
                });
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
          loading={false}
          title={'Valider'}
        />
      </View>
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
  Text9852fe4b: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
  },
  TextInput4dc51091: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    height: 190,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  View9e411382: {
    height: 190,
  },
  Viewd8e6b79e: {
    marginLeft: '3%',
    marginRight: '3%',
  },
});

export default withTheme(ForgotpasswordScreen);
