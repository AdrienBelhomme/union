import React from 'react';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const RealformfrequencedureeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataUpdateFormDataPATCH =
    Get$UpdateDataApi.useUpdateFormDataPATCH();

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
        {/* q frequence */}
        <Text style={[styles.Text7c423917, { color: theme.colors.menuOuvert }]}>
          {'Quels sont vos objectifs ?'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        {/* frequence */}
        <Text style={[styles.Textc8ece956, { color: theme.colors.menuOuvert }]}>
          {'Fréquence'}
        </Text>
        {/* par semaine */}
        <Text style={[styles.Text1ce68685, { color: theme.colors.light }]}>
          {'Par semaine'}
        </Text>

        <View style={styles.View88c44c3e}>
          {/* un */}
          <View style={styles.View8cc9c3b7}>
            {/* un selcted */}
            <View>
              <>
                {!Constants['freqUn'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'freqUn',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable668fed9f,
                      { borderColor: theme.colors.primary, borderRadius: 64 },
                    ]}
                  >
                    {/* un */}
                    <Text
                      style={[
                        styles.Text63fb7209,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'1'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            <>
              {Constants['freqUn'] ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'freqUn',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* un */}
                  <Text
                    style={[
                      styles.Text3b1fd028,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'1'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>
          {/* deux */}
          <View>
            {/* deux selcted */}
            <View>
              <>
                {!Constants['freqDeux'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'freqDeux',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable668fed9f,
                      { borderColor: theme.colors.primary, borderRadius: 64 },
                    ]}
                  >
                    {/* deux */}
                    <Text
                      style={[
                        styles.Text40f02eb9,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'2'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            <>
              {Constants['freqDeux'] ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'freqDeux',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* un */}
                  <Text
                    style={[
                      styles.Text3b1fd028,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'2'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>
          {/* trois */}
          <View>
            {/* deux selcted */}
            <View>
              <>
                {!Constants['freqTrois'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'freqTrois',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable668fed9f,
                      { borderColor: theme.colors.primary, borderRadius: 64 },
                    ]}
                  >
                    {/* trois */}
                    <Text
                      style={[
                        styles.Text40f02eb9,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'3'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            <>
              {Constants['freqTrois'] ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'freqTrois',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* trois */}
                  <Text
                    style={[
                      styles.Text3b1fd028,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'3'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>
          {/* quatre */}
          <View>
            {/* deux selcted */}
            <View>
              <>
                {!Constants['freqQuatre'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'freqQuatre',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable668fed9f,
                      { borderColor: theme.colors.primary, borderRadius: 64 },
                    ]}
                  >
                    {/* quatre */}
                    <Text
                      style={[
                        styles.Text40f02eb9,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'4'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            <>
              {Constants['freqQuatre'] ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'freqQuatre',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* quatre */}
                  <Text
                    style={[
                      styles.Text3b1fd028,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'4'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>
          {/* cinq */}
          <View>
            {/* deux selcted */}
            <View>
              <>
                {!Constants['freqCinq'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'freqCinq',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable668fed9f,
                      { borderColor: theme.colors.primary, borderRadius: 64 },
                    ]}
                  >
                    {/* cinq */}
                    <Text
                      style={[
                        styles.Text40f02eb9,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'5'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            <>
              {Constants['freqCinq'] ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'freqCinq',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* cinq */}
                  <Text
                    style={[
                      styles.Text3b1fd028,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'5'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>
          {/* six */}
          <View>
            {/* deux selcted */}
            <View>
              <>
                {!Constants['freqSix'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'freqSix',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable668fed9f,
                      { borderColor: theme.colors.primary, borderRadius: 64 },
                    ]}
                  >
                    {/* six */}
                    <Text
                      style={[
                        styles.Text40f02eb9,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'6'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            <>
              {Constants['freqSix'] ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'freqSix',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* six */}
                  <Text
                    style={[
                      styles.Text3b1fd028,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'6'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>
          {/* sept */}
          <View>
            {/* deux selcted */}
            <View>
              <>
                {!Constants['freqSept'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'freqSept',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable668fed9f,
                      { borderColor: theme.colors.primary, borderRadius: 64 },
                    ]}
                  >
                    {/* sept */}
                    <Text
                      style={[
                        styles.Text40f02eb9,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'7'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            <>
              {Constants['freqSept'] ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'freqSept',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* sept */}
                  <Text
                    style={[
                      styles.Text3b1fd028,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'7'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <View>
          {/* duree */}
          <Text
            style={[styles.Textc8ece956, { color: theme.colors.menuOuvert }]}
          >
            {"Durée d'entraînement"}
          </Text>
          {/* par entrainement */}
          <Text style={[styles.Text62786421, { color: theme.colors.light }]}>
            {'En minutes'}
          </Text>

          <View style={styles.View88c44c3e}>
            {/* quinze */}
            <View style={styles.Viewe0008267}>
              <>
                {Constants['dureeQuinze'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeQuinze',
                          value: true,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ borderRadius: 64 }}
                  >
                    <Text
                      style={[
                        styles.Text226ef86c,
                        { color: theme.colors.menuOuvert },
                      ]}
                    >
                      {'15'}
                    </Text>
                  </Touchable>
                )}
              </>
              <>
                {!Constants['dureeQuinze'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeQuinze',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable2f74883f,
                      { borderRadius: 64, borderColor: theme.colors.primary },
                    ]}
                  >
                    {/* qunize selected */}
                    <>
                      {!Constants['dureeQuinze'] ? null : (
                        <Text
                          style={[
                            styles.Textdb417275,
                            { color: theme.colors.primary },
                          ]}
                        >
                          {'15'}
                        </Text>
                      )}
                    </>
                  </Touchable>
                )}
              </>
            </View>
            {/* trente */}
            <View style={styles.View3aab8cd8}>
              <>
                {Constants['dureeTrente'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeTrente',
                          value: true,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ borderRadius: 64 }}
                  >
                    {/* trente */}
                    <Text
                      style={[
                        styles.Textc6d6639e,
                        { color: theme.colors.menuOuvert },
                      ]}
                    >
                      {'30'}
                    </Text>
                  </Touchable>
                )}
              </>
              <>
                {!Constants['dureeTrente'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeTrente',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable2f74883f,
                      { borderRadius: 64, borderColor: theme.colors.primary },
                    ]}
                  >
                    {/* trente selected */}
                    <>
                      {!Constants['dureeTrente'] ? null : (
                        <Text
                          style={[
                            styles.Textdb417275,
                            { color: theme.colors.primary },
                          ]}
                        >
                          {'30'}
                        </Text>
                      )}
                    </>
                  </Touchable>
                )}
              </>
            </View>
            {/* quarantecinq */}
            <View style={styles.View3aab8cd8}>
              <>
                {Constants['dureeQuaranteCinq'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeQuaranteCinq',
                          value: true,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ borderRadius: 64 }}
                  >
                    {/* Quarantecinq */}
                    <Text
                      style={[
                        styles.Textc6d6639e,
                        { color: theme.colors.menuOuvert },
                      ]}
                    >
                      {'45'}
                    </Text>
                  </Touchable>
                )}
              </>
              <>
                {!Constants['dureeQuaranteCinq'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeQuaranteCinq',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable2f74883f,
                      { borderRadius: 64, borderColor: theme.colors.primary },
                    ]}
                  >
                    {/* quaranteCinq selected */}
                    <Text
                      style={[
                        styles.Textdb417275,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'45'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
            {/* soixante */}
            <View style={styles.View3aab8cd8}>
              <>
                {Constants['dureeSoixante'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeSoixante',
                          value: true,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ borderRadius: 64 }}
                  >
                    {/* soixante */}
                    <Text
                      style={[
                        styles.Textc6d6639e,
                        { color: theme.colors.menuOuvert },
                      ]}
                    >
                      {'60'}
                    </Text>
                  </Touchable>
                )}
              </>
              <>
                {!Constants['dureeSoixante'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'dureeSoixante',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.Touchable2f74883f,
                      { borderRadius: 64, borderColor: theme.colors.primary },
                    ]}
                  >
                    {/* soixante selected */}
                    <Text
                      style={[
                        styles.Textdb417275,
                        { color: theme.colors.primary },
                      ]}
                    >
                      {'60'}
                    </Text>
                  </Touchable>
                )}
              </>
            </View>
          </View>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              try {
                await get$UpdateDataUpdateFormDataPATCH.mutateAsync({
                  dureeQuaranteCinq: Constants['dureeQuaranteCinq'],
                  dureeQuinze: Constants['dureeQuinze'],
                  dureeSoixante: Constants['dureeSoixante'],
                  dureeTrente: Constants['dureeTrente'],
                  frequenceCinq: Constants['freqCinq'],
                  frequenceDeux: Constants['freqDeux'],
                  frequenceQuatre: Constants['freqQuatre'],
                  frequenceSept: Constants['freqSept'],
                  frequenceSix: Constants['freqSix'],
                  frequenceTrois: Constants['freqTrois'],
                  frequenceUn: Constants['freqUn'],
                  id: Constants['id'],
                });
                navigation.navigate('RealFormequipementScreen');
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
  Text1ce68685: {
    fontFamily: 'System',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 40,
    textAlign: 'center',
  },
  Text226ef86c: {
    alignSelf: 'stretch',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 50,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  Text3b1fd028: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  Text40f02eb9: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  Text62786421: {
    fontFamily: 'System',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 40,
    textAlign: 'center',
  },
  Text63fb7209: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  Text7c423917: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
  },
  Textc6d6639e: {
    alignSelf: 'stretch',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 50,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  Textc8ece956: {
    fontSize: 56,
    textAlign: 'center',
  },
  Textdb417275: {
    alignSelf: 'stretch',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 50,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  Touchable2f74883f: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  Touchable668fed9f: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  View3aab8cd8: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  View88c44c3e: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View8cc9c3b7: {
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Viewe0008267: {
    alignContent: 'stretch',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
});

export default withTheme(RealformfrequencedureeScreen);
