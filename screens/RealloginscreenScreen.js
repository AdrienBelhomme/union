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
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RealloginscreenScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

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
        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <Spacer top={'8%'} right={8} left={8} />
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
          <Spacer top={8} right={2} bottom={8} left={2} />
          {/* Login Form */}
          <View>
            {/* Error Message */}
            <Text style={[styles.Texte2a05ae2, { color: theme.colors.error }]}>
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
                styles.TextInpute768f7f1,
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
                styles.TextInput5c91288e,
                {
                  borderColor: theme.colors.divider,
                  color: theme.colors.custom_rgb255_255_255,
                  backgroundColor: theme.colors.secondary,
                },
              ]}
              placeholder={'passeexemple'}
              value={PasswordInputValue}
              autoCapitalize={'none'}
              secureTextEntry={true}
              placeholderTextColor={theme.colors.light}
            />
            <Spacer top={'8%'} right={8} left={8} />
            {/* Sign In Button */}
            <ButtonSolid
              onPress={() => {
                const handler = async () => {
                  try {
                    const loginResponseJson =
                      await Signup$Login$LogoutApi.loginPOST(Constants, {
                        loginEmail: emailInputValue,
                        loginPassword: PasswordInputValue,
                      });
                    const accessToken = loginResponseJson['access_token'];
                    const message = loginResponseJson['error_description'];
                    setGlobalVariableValue({
                      key: 'ERROR_MESSAGE',
                      value: message,
                    });
                    if (!accessToken) {
                      return;
                    }
                    setGlobalVariableValue({
                      key: 'access_token',
                      value: 'Bearer ' + accessToken,
                    });
                    setGlobalVariableValue({
                      key: 'tokenUserLogged',
                      value: accessToken,
                    });
                    const iduser = loginResponseJson.user.id;
                    setGlobalVariableValue({
                      key: 'id',
                      value: iduser,
                    });
                    navigation.navigate('RealhomeScreen');
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={[
                styles.ButtonSolid4c2ff746,
                {
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.menuOuvert,
                },
              ]}
              title={'Se connecter'}
            />
            <View style={styles.View0ee6420b}>
              <Text
                style={[
                  styles.Textd0deea4f,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Mot de passe oublié ?'}
              </Text>
              <Spacer top={8} right={2} bottom={8} left={2} />
              {/* Sign Up Link */}
              <Link
                style={[styles.Link28ebd9f1, { color: theme.colors.primary }]}
                title={'Changer de mot de passe'}
              />
            </View>

            <View style={styles.Viewa05e77ef}>
              <Text
                style={[
                  styles.Textd0deea4f,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Nouveau sur Union ?'}
              </Text>
              <Spacer top={8} right={2} bottom={8} left={2} />
              {/* Sign Up Link */}
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('REALaccountcreationScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.Link28ebd9f1, { color: theme.colors.primary }]}
                title={"S'inscrire"}
              />
              <Spacer top={'8%'} right={8} left={8} />
            </View>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Spacer top={8} right={2} bottom={8} left={2} />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid4c2ff746: {
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
  Link28ebd9f1: {
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 56,
    textDecorationLine: 'underline',
  },
  Text9a655aa3: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: 30,
  },
  TextInput5c91288e: {
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
  TextInpute768f7f1: {
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
  Texte2a05ae2: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center',
  },
  View0ee6420b: {
    alignItems: 'center',
    marginBottom: 12,
    marginTop: '2%',
  },
  Viewa05e77ef: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    marginTop: '3%',
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

export default withTheme(RealloginscreenScreen);
