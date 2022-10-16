import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const RealformvalidateloadingScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const myFunctionName = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    DelaySecond = () => {
      setTimeout(function () {
        loading = false;
      }, 5000);
    };
  };

  const { theme } = props;
  const { navigation } = props;

  const [ageInputValue, setAgeInputValue] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxRowValue2, setCheckboxRowValue2] = React.useState('');
  const [checkboxRowValue3, setCheckboxRowValue3] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [checkboxValue3, setCheckboxValue3] = React.useState(false);
  const [checkboxValue4, setCheckboxValue4] = React.useState(false);
  const [checkboxValue5, setCheckboxValue5] = React.useState(false);
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
  const [radioButtonGroupValue5, setRadioButtonGroupValue5] =
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
        <View style={styles.View39912261}>
          <Icon
            name={'AntDesign/checkcircleo'}
            color={theme.colors.primary}
            size={100}
          />
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        {/* all asnwers review */}
        <Text style={[styles.Text5153c7f8, { color: theme.colors.menuOuvert }]}>
          {'Tout est bon !'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <View />
        {/* Vous pourrez  */}
        <Text style={[styles.Text1ce68685, { color: theme.colors.light }]}>
          {
            'Nous venons de vous créer un catalogue d’entrainements spécialement conçu pour vous.'
          }
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('RealhomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolid25cd6f2c,
            { backgroundColor: theme.colors.primary },
          ]}
          loading={false}
          title={"Commencer l'entraînement"}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ActivityIndicator89fafeca: {
    height: 36,
    width: 36,
  },
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
  Text1ce68685: {
    fontFamily: 'System',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 40,
    textAlign: 'center',
  },
  Text5153c7f8: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
    textAlign: 'center',
  },
  View39912261: {
    alignItems: 'center',
  },
});

export default withTheme(RealformvalidateloadingScreen);
