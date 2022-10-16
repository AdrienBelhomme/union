import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { ScrollView, StyleSheet, Text } from 'react-native';

const RealintroinfoScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [ageInputValue, setAgeInputValue] = React.useState('');
  const [inputNameValueOk, setInputNameValueOk] = React.useState('');
  const [nameInputValue, setNameInputValue] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
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
        {/* Parlez nous un peu de vous */}
        <Text
          style={[
            styles.Text233c9085,
            { color: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          {'Parlez-nous un peu de vous'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        {/* info quesitons */}
        <Text
          style={[
            styles.Text58a23076,
            { color: theme.colors.textInfoQuestions },
          ]}
        >
          {
            'Nous allons vous posez quelques questions pour en savoir plus sur vous et vos objectifs. Nous utiliserons ces informations pour mieux vous recommander et personnaliser vos entraînements. Vous pourrez les  modifier à tout moment.'
          }
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Continuer */}
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('RealFormfnameScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolid25cd6f2c,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Continuer'}
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
  Text233c9085: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
  },
  Text58a23076: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 48,
  },
});

export default withTheme(RealintroinfoScreen);
