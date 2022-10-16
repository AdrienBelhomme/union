import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const RealformallanswersScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
      {/* variable profil */}
      <ScrollView
        contentContainerStyle={styles.ScrollViewd8e6b79eContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Spacer top={'8%'} right={8} left={8} />
        {/* all asnwers review */}
        <Text style={[styles.Text7c423917, { color: theme.colors.menuOuvert }]}>
          {'Vos réponses'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        {/* Vous pourrez  */}
        <Text style={[styles.Textc6824f6a, { color: theme.colors.light }]}>
          {
            'Vous pourrez modifier ces informations plus tard dans votre profil.'
          }
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <View
          style={[
            styles.View75e8f885,
            { borderRadius: 12, backgroundColor: theme.colors.secondary },
          ]}
        >
          {/* fname view */}
          <View style={styles.View026d8aec}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Texteca90e93,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Prénom'}
              </Text>
            </View>

            <View style={styles.Viewa02aa1aa}>
              <Text
                style={[
                  styles.Text17b2304c,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {Constants['fname']}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.View98cfea77,
            { borderRadius: 12, backgroundColor: theme.colors.secondary },
          ]}
        >
          {/* genre view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Genre'}
              </Text>
            </View>

            <View style={styles.Viewa02aa1aa}>
              <Text
                style={[
                  styles.Textabafa26b,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {Constants['genre']}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.View4ef924f6,
            { backgroundColor: theme.colors.secondary },
          ]}
        >
          {/* age view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Âge'}
              </Text>
            </View>

            <View style={styles.Viewa02aa1aa}>
              <Text
                style={[
                  styles.Textabafa26b,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {Constants['age']}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.View7a3fd476,
            { borderRadius: 12, backgroundColor: theme.colors.secondary },
          ]}
        >
          {/* poids view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Poids'}
              </Text>
            </View>

            <View style={styles.Viewa02aa1aa}>
              <Text
                style={[
                  styles.Textabafa26b,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {Constants['poids']}
              </Text>
            </View>
          </View>
        </View>
        {/* niveau */}
        <View
          style={[
            styles.View6a3285df,
            { backgroundColor: theme.colors.secondary, borderRadius: 12 },
          ]}
        >
          {/* poids view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Niveau'}
              </Text>
            </View>

            <View style={styles.Viewa02aa1aa}>
              <Text
                style={[
                  styles.Textabafa26b,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {Constants['niveau']}
              </Text>
            </View>
          </View>
        </View>
        {/* objectif */}
        <View
          style={[
            styles.View6a3285df,
            { backgroundColor: theme.colors.secondary, borderRadius: 12 },
          ]}
        >
          {/* poids view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Objectif'}
              </Text>
            </View>

            <View style={styles.Viewa02aa1aa}>
              <Text
                style={[
                  styles.Textabafa26b,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {Constants['objectif']}
              </Text>
            </View>
          </View>
        </View>
        {/* preference */}
        <View
          style={[
            styles.View6a3285df,
            { backgroundColor: theme.colors.secondary, borderRadius: 12 },
          ]}
        >
          {/* poids view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Préférences'}
              </Text>
            </View>

            <View style={styles.View4c83acae}>
              <>
                {!(Constants['yoga'] > undefined) ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {null}
                  </Text>
                )}
              </>
              <>
                {!Constants['pilates'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Pilates'}
                  </Text>
                )}
              </>
              <>
                {!Constants['danse'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'Danse'}
                  </Text>
                )}
              </>
              <>
                {!Constants['coaching'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Coaching'}
                  </Text>
                )}
              </>
              <>
                {!Constants['toning'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Toning'}
                  </Text>
                )}
              </>
              <>
                {!Constants['cardio'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Cardio'}
                  </Text>
                )}
              </>
            </View>
          </View>
        </View>
        {/* gene */}
        <View
          style={[
            styles.View6a3285df,
            { backgroundColor: theme.colors.secondary, borderRadius: 12 },
          ]}
        >
          {/* gene view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Gènes'}
              </Text>
            </View>

            <View style={styles.View4c83acae}>
              {/* genoux */}
              <>
                {!Constants['genoux'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Genoux'}
                  </Text>
                )}
              </>
              {/* cou */}
              <>
                {!Constants['cou'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Cou'}
                  </Text>
                )}
              </>
              <>
                {!Constants['epaules'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Épaules'}
                  </Text>
                )}
              </>
              <>
                {!Constants['dos'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'Dos'}
                  </Text>
                )}
              </>
              <>
                {!Constants['cheville'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Cheville'}
                  </Text>
                )}
              </>
              <>
                {!Constants['poignet'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'Poignet'}
                  </Text>
                )}
              </>
            </View>
          </View>
        </View>
        {/* equipement */}
        <View
          style={[
            styles.View6a3285df,
            { backgroundColor: theme.colors.secondary, borderRadius: 12 },
          ]}
        >
          {/* equipement view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Équipement'}
              </Text>
            </View>

            <View style={styles.Viewa02aa1aa}>
              {/* corde */}
              <>
                {!Constants['corde'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'Corde à sauter'}
                  </Text>
                )}
              </>
              {/* chaise */}
              <>
                {!Constants['chaise'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'Chaise'}
                  </Text>
                )}
              </>
              <>
                {!Constants['block_yoga'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'Block de Yoga'}
                  </Text>
                )}
              </>
              <>
                {!Constants['haltere'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'Haltère'}
                  </Text>
                )}
              </>
              <>
                {!Constants['bande_de_resistance'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'Bande de résistance (élastique)'}
                  </Text>
                )}
              </>
              <>
                {!Constants['kettlebell'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                  >
                    {'Kettlebell'}
                  </Text>
                )}
              </>
            </View>
          </View>
        </View>
        {/* frequence */}
        <View
          style={[
            styles.View6a3285df,
            { backgroundColor: theme.colors.secondary, borderRadius: 12 },
          ]}
        >
          {/* equipement view */}
          <View style={styles.View92380291}>
            <View style={styles.View94567f3d}>
              {/* frequence */}
              <Text
                style={[
                  styles.Text62ed92bb,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Fréquence'}
              </Text>
            </View>

            <View style={styles.View4c83acae}>
              {/* un */}
              <>
                {!Constants['freqUn'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'1x/semaine'}
                  </Text>
                )}
              </>
              {/* deux */}
              <>
                {!Constants['freqDeux'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'2x/semaine'}
                  </Text>
                )}
              </>
              <>
                {!Constants['freqTrois'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'3x/semaine'}
                  </Text>
                )}
              </>
              <>
                {!Constants['freqQuatre'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'4x/semaine'}
                  </Text>
                )}
              </>
              <>
                {!Constants['freqCinq'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'5x/semaine'}
                  </Text>
                )}
              </>
              <>
                {!Constants['freqSix'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'6x/semaine'}
                  </Text>
                )}
              </>
              <>
                {!Constants['freqSept'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'7x/semaine'}
                  </Text>
                )}
              </>
              {/* quinzeMinutes */}
              <>
                {!Constants['dureeQuinze'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'15 minutes'}
                  </Text>
                )}
              </>
              {/* quinzeMinutes */}
              <>
                {!Constants['dureeTrente'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {'30 minutes'}
                  </Text>
                )}
              </>
              {/* quinzeMinutes */}
              <>
                {!Constants['dureeQuaranteCinq'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'45 minutes'}
                  </Text>
                )}
              </>
              {/* quinzeMinutes */}
              <>
                {!Constants['dureeSoixante'] ? null : (
                  <Text
                    style={[
                      styles.Textabafa26b,
                      { color: theme.colors.menuOuvert },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    {'60 minutes'}
                  </Text>
                )}
              </>
            </View>
          </View>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <Spacer top={'8%'} right={8} left={8} />
        {/* Valider */}
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('RealformvalidateloadingScreen');
            } catch (err) {
              console.error(err);
            }
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
  Icon9d0ad012: {
    marginTop: 5,
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text17b2304c: {
    alignSelf: 'flex-end',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginRight: 20,
  },
  Text62ed92bb: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 56,
  },
  Text7c423917: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 96,
  },
  Textabafa26b: {
    alignSelf: 'flex-end',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginRight: 20,
  },
  Textc6824f6a: {
    fontFamily: 'System',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 40,
    textAlign: 'left',
  },
  Texteca90e93: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 56,
  },
  View026d8aec: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 36,
    paddingRight: 36,
    paddingTop: 10,
  },
  View4c83acae: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
  },
  View4ef924f6: {
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  View6a3285df: {
    marginBottom: 10,
    marginTop: 10,
  },
  View75e8f885: {
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: '100%',
  },
  View7a3fd476: {
    marginBottom: 10,
    marginTop: 10,
  },
  View92380291: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 36,
    paddingRight: 36,
    paddingTop: 10,
  },
  View94567f3d: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  View98cfea77: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  Viewa02aa1aa: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default withTheme(RealformallanswersScreen);
