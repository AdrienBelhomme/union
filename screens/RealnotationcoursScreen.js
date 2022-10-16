import React from 'react';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Spacer,
  StarRating,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const RealnotationcoursScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const get$UpdateDataCoachNotationPOST =
    Get$UpdateDataApi.useCoachNotationPOST();
  const get$UpdateDataNotationCoursePOST =
    Get$UpdateDataApi.useNotationCoursePOST();

  const [starRatingValue, setStarRatingValue] = React.useState(0);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Spacer top={'8%'} right={8} left={8} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewd8e6b79eContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Text style={[styles.Text73753bcf, { color: theme.colors.menuOuvert }]}>
          {'Notez le cours'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        {/* notation cours */}
        <View style={styles.View39912261}>
          {/* titre */}
          <Text
            style={[styles.Textf8b41714, { color: theme.colors.menuOuvert }]}
          >
            {"Qu'avez-vous penser du cours ?"}
          </Text>
          <StarRating
            onPress={newStarRatingValue => {
              try {
                setGlobalVariableValue({
                  key: 'courseStar',
                  value: newStarRatingValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            maxStars={5}
            activeColor={theme.colors.primary}
            inactiveColor={theme.colors.divider}
            starSize={80}
            isEditable={true}
            defaultValue={Constants['courseStar']}
          />
          <Spacer top={'8%'} right={8} left={8} />
        </View>
        {/* notation coach */}
        <View style={styles.View39912261}>
          {/* real notation course */}
          <Text
            style={[styles.Textf8b41714, { color: theme.colors.menuOuvert }]}
          >
            {"Qu'avez-vous penser de coach "}
            {null}
            {' ?'}
          </Text>
          <StarRating
            onPress={newStarRatingValue => {
              try {
                setGlobalVariableValue({
                  key: 'coachStar',
                  value: newStarRatingValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            maxStars={5}
            activeColor={theme.colors.primary}
            inactiveColor={theme.colors.divider}
            starSize={80}
            isEditable={true}
            defaultValue={Constants['coachStar']}
          />
        </View>
        {/* notation difficulte */}
        <View style={styles.View39912261}>
          <Spacer top={'8%'} right={8} left={8} />
          {/* titre */}
          <Text
            style={[styles.Textf8b41714, { color: theme.colors.menuOuvert }]}
          >
            {'Évaluer la difficulté'}
          </Text>

          <View style={styles.Viewdebd3207}>
            {/* facile */}
            <View>
              <>
                {Constants['ratingFacile'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'ratingFacile',
                          value: true,
                        });
                        setGlobalVariableValue({
                          key: 'ratingNormal',
                          value: false,
                        });
                        setGlobalVariableValue({
                          key: 'ratingDifficile',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* trop facile */}
                    <View
                      style={{
                        borderTopLeftRadius: 12,
                        borderBottomLeftRadius: 12,
                        backgroundColor: theme.colors.menuOuvert,
                      }}
                    >
                      {/* trop facile */}
                      <Text
                        style={[
                          styles.Text24b88089,
                          { color: theme.colors.secondary },
                        ]}
                      >
                        {'Trop facile'}
                      </Text>
                    </View>
                  </Touchable>
                )}
              </>
              <>
                {!Constants['ratingFacile'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'ratingFacile',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* trop facile selcted */}
                    <View
                      style={[
                        styles.View613e864d,
                        {
                          borderTopLeftRadius: 12,
                          borderBottomLeftRadius: 12,
                          backgroundColor: theme.colors.secondary,
                        },
                      ]}
                    >
                      {/* trop facile selcted */}
                      <Text
                        style={[
                          styles.Textb9fe38a8,
                          { color: theme.colors.menuOuvert },
                        ]}
                      >
                        {'Trop facile'}
                      </Text>
                      <Icon
                        style={styles.Iconc1215d1e}
                        name={'AntDesign/check'}
                        color={theme.colors.menuOuvert}
                        size={30}
                      />
                    </View>
                  </Touchable>
                )}
              </>
            </View>
            {/* mon niveau */}
            <View>
              <>
                {!Constants['ratingNormal'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'ratingNormal',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* mon niveau */}
                    <View
                      style={[
                        styles.Viewb3c14deb,
                        {
                          borderTopLeftRadius: 0,
                          backgroundColor: theme.colors.secondary,
                          borderBottomLeftRadius: 0,
                        },
                      ]}
                    >
                      {/* mon niveau  */}
                      <Text
                        style={[
                          styles.Text10d87e93,
                          { color: theme.colors.menuOuvert },
                        ]}
                      >
                        {'Mon niveau'}
                      </Text>
                      <Icon
                        style={styles.Iconc1215d1e}
                        name={'AntDesign/check'}
                        size={30}
                        color={theme.colors.menuOuvert}
                      />
                    </View>
                  </Touchable>
                )}
              </>
              <>
                {Constants['ratingNormal'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'ratingNormal',
                          value: true,
                        });
                        setGlobalVariableValue({
                          key: 'ratingFacile',
                          value: false,
                        });
                        setGlobalVariableValue({
                          key: 'ratingDifficile',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* mon niveau selcted */}
                    <View
                      style={[
                        styles.Viewa4434997,
                        {
                          backgroundColor: theme.colors.menuOuvert,
                          borderBottomLeftRadius: 0,
                          borderTopLeftRadius: 0,
                        },
                      ]}
                    >
                      {/* mon niveau  selcted */}
                      <Text
                        style={[
                          styles.Text24b88089,
                          { color: theme.colors.secondary },
                        ]}
                      >
                        {'Mon niveau'}
                      </Text>
                    </View>
                  </Touchable>
                )}
              </>
            </View>
            {/* difficile */}
            <View>
              <>
                {Constants['ratingDifficile'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'ratingDifficile',
                          value: true,
                        });
                        setGlobalVariableValue({
                          key: 'ratingFacile',
                          value: false,
                        });
                        setGlobalVariableValue({
                          key: 'ratingNormal',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* trop difficile */}
                    <View
                      style={{
                        backgroundColor: theme.colors.menuOuvert,
                        borderTopRightRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                    >
                      {/* trop difficile */}
                      <Text
                        style={[
                          styles.Text0e505f5b,
                          { color: theme.colors.secondary },
                        ]}
                      >
                        {'Trop difficile'}
                      </Text>
                    </View>
                  </Touchable>
                )}
              </>
              <>
                {!Constants['ratingDifficile'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'ratingDifficile',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {/* trop facile selcted */}
                    <View
                      style={[
                        styles.View699e48fa,
                        {
                          backgroundColor: theme.colors.secondary,
                          borderTopRightRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                        },
                      ]}
                    >
                      {/* trop facile selcted */}
                      <Text
                        style={[
                          styles.Textb9fe38a8,
                          { color: theme.colors.menuOuvert },
                        ]}
                      >
                        {'Trop difficile'}
                      </Text>
                      <Icon
                        style={styles.Iconc1215d1e}
                        name={'AntDesign/check'}
                        size={30}
                        color={theme.colors.menuOuvert}
                      />
                    </View>
                  </Touchable>
                )}
              </>
            </View>
          </View>
        </View>

        <View style={styles.View7245b3d8}>
          <Spacer top={'8%'} right={8} left={8} />
          <Spacer top={'8%'} right={8} left={8} />
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  await get$UpdateDataCoachNotationPOST.mutateAsync({
                    coachnote: Constants['coachStar'],
                    namecoach: Constants['coachName'],
                  });
                  await get$UpdateDataNotationCoursePOST.mutateAsync({
                    coursename: Constants['idcourse'],
                    monNiveau: Constants['ratingNormal'],
                    note: Constants['courseStar'],
                    tropDifficile: Constants['ratingDifficile'],
                    tropFacile: Constants['ratingFacile'],
                  });
                  navigation.navigate('RealhomeScreen');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={[
              styles.ButtonSolid95443b66,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.menuOuvert,
              },
            ]}
            title={'Valider'}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid95443b66: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  Iconc1215d1e: {
    marginRight: 15,
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text0e505f5b: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  Text10d87e93: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  Text24b88089: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  Text73753bcf: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    textAlign: 'center',
  },
  Textb9fe38a8: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  Textf8b41714: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: 30,
    textAlign: 'center',
  },
  View39912261: {
    alignItems: 'center',
  },
  View613e864d: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  View699e48fa: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  View7245b3d8: {
    marginLeft: 16,
    marginRight: 16,
  },
  Viewa4434997: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewb3c14deb: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewdebd3207: {
    flexDirection: 'row',
  },
});

export default withTheme(RealnotationcoursScreen);
