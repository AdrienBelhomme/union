import React from 'react';
import * as Signup$Login$LogoutApi from '../apis/Signup$Login$LogoutApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const REALaccountcreationScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const signup$Login$LogoutSignupMethodPOST =
    Signup$Login$LogoutApi.useSignupMethodPOST();

  const [PasswordInputValue, setPasswordInputValue] = React.useState('');
  const [emailInputValue, setEmailInputValue] = React.useState(
    props.route?.params?.emailUsedToSignedUp ?? ''
  );

  return (
    <ScreenContainer style={styles.screen}>
      <KeyboardAwareScrollView
        style={styles.KeyboardAwareScrollViewd454b451}
        contentContainerStyle={styles.KeyboardAwareScrollViewd454b451Content}
      >
        {/* Header */}
        <View style={styles.Viewa134af8c}>
          {/* logo_union */}
          <Image
            style={styles.Image23244661}
            source={{
              uri: 'https://res.cloudinary.com/djl9nmkbs/image/upload/v1656588300/logo-only-white_hnv3rd.png',
            }}
            resizeMode={'contain'}
          />
        </View>
        {/* Login Form */}
        <View>
          {/* Error Message */}
          <Text style={[styles.Text6789b8ec, { color: theme.colors.error }]}>
            {Constants['ERROR_MESSAGE']}
          </Text>
          {/* email */}
          <Text
            style={[styles.Text9a655aa3, { color: theme.colors.menuOuvert }]}
          >
            {'Email'}
          </Text>
          {/* Email Input */}
          <TextInput
            onChangeText={newEmailInputValue => {
              try {
                setEmailInputValue(newEmailInputValue);
                setGlobalVariableValue({
                  key: 'emailok',
                  value: newEmailInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInput31b1dc3b,
              {
                color: theme.colors.custom_rgb255_255_255,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            placeholder={'emailexemple'}
            value={emailInputValue}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            placeholderTextColor={theme.colors.light}
          />
          <Spacer top={'8%'} right={8} left={8} />
          {/* mot de passe */}
          <Text
            style={[styles.Text9a655aa3, { color: theme.colors.menuOuvert }]}
          >
            {'Mot de passe'}
          </Text>
          {/* Password Input */}
          <TextInput
            onChangeText={newPasswordInputValue => {
              try {
                setPasswordInputValue(newPasswordInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInputf673d556,
              {
                borderColor: theme.colors.divider,
                color: theme.colors.custom_rgb255_255_255,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            placeholder={'passeexemple'}
            value={PasswordInputValue}
            secureTextEntry={true}
            placeholderTextColor={theme.colors.light}
          />
          <Spacer top={'8%'} right={8} left={8} />
          {/* Sign In Button */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  const signupResponseJson =
                    await signup$Login$LogoutSignupMethodPOST.mutateAsync({
                      signUpEmail: emailInputValue,
                      signUpPass: PasswordInputValue,
                    });
                  const message = signupResponseJson.msg;
                  setGlobalVariableValue({
                    key: 'ERROR_MESSAGE',
                    value: message,
                  });
                  if (message) {
                    return;
                  }
                  const idapi = signupResponseJson.user.id;
                  setGlobalVariableValue({
                    key: 'id',
                    value: idapi,
                  });
                  console.log(idapi);
                  console.log(JSON.stringify(signupResponseJson));
                  navigation.navigate('RealintroinfoScreen');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={[
              styles.ButtonSolid75f4d60c,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.menuOuvert,
              },
            ]}
            title={"S'inscrire"}
          />
          <Spacer top={'8%'} right={8} left={8} />
          <View style={styles.View8bb6a2bc}>
            <Spacer top={'8%'} right={8} left={8} />
            {/* deja_inscrit */}
            <Text
              style={[styles.Textd0deea4f, { color: theme.colors.menuOuvert }]}
            >
              {'Déjà inscrit sur Union ?'}
            </Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Spacer top={8} right={2} bottom={8} left={2} />
            {/* Sign Up Link */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('RealloginscreenScreen', {
                    emailUsedToSignedUp: Constants['emailok'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.Link66a5dbad, { color: theme.colors.primary }]}
              title={'Se connecter'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid75f4d60c: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    height: 192,
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  Image23244661: {
    height: 400,
    width: 400,
  },
  KeyboardAwareScrollViewd454b451: {
    width: '100%',
  },
  KeyboardAwareScrollViewd454b451Content: {
    flex: 1,
    justifyContent: 'center',
  },
  Link66a5dbad: {
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 56,
  },
  Text6789b8ec: {
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
  },
  Text9a655aa3: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: 30,
  },
  TextInput31b1dc3b: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    height: 192,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  TextInputf673d556: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    height: 192,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  Textd0deea4f: {
    fontFamily: 'System',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 56,
  },
  View8bb6a2bc: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  Viewa134af8c: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  screen: {
    marginLeft: '3%',
    marginRight: '3%',
  },
});

export default withTheme(REALaccountcreationScreen);
