import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  Circle,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const FilterpageScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const filterCategoryScreen = (Variables, list) => {
    const categoryChoicesScreen = [
      { categoryScreen: 'yoga', checked: filterYogaScreen },
      { categoryScreen: 'boxe', checked: filterBoxeScreen },
      { categoryScreen: 'pilates', checked: filterPilatesScreen },
      { categoryScreen: 'cardio', checked: filterCardioScreen },
      { categoryScreen: 'danse', checked: filterDanseScreen },
      { categoryScreen: 'stretching', checked: filterStretchingScreen },
      { categoryScreen: 'apa', checked: filterApaScreen },
      { categoryScreen: 'méditation', checked: filterMeditationScreen },
      { categoryScreen: 'renforcement', checked: filterRenfoScreen },
    ];

    const levelsChoicesScreen = [
      { levelScreen: 'débutant', checked: filterDebutantButtonScreen },
      {
        levelScreen: 'intermédiaire',
        checked: filterIntermediaireButtonScreen,
      },
      { levelScreen: 'avancé', checked: filterAvanceButtonScreen },
    ];

    const durationChoicesScreen = [
      { durationScreen: '10', checked: filterQuinzeMinutesScreen },
      { durationScreen: '20', checked: filterTrenteMinutesScreen },
      { durationScreen: '30', checked: filterQuarantecinqMinutesScreen },
    ];

    let checkedCategoriesScreen = categoryChoicesScreen
      .filter(c => c.checked)
      .map(c => c.categoryScreen);

    let checkedLevelsScreen = levelsChoicesScreen
      .filter(l => l.checked)
      .map(l => l.levelScreen);

    let checkedDurationScreen = durationChoicesScreen
      .filter(l => l.checked)
      .map(l => l.durationScreen);

    if (checkedCategoriesScreen.length === 0) {
      checkedCategoriesScreen = categoryChoicesScreen.map(
        c => c.categoryScreen
      );
    }

    if (checkedLevelsScreen.length === 0) {
      checkedLevelsScreen = levelsChoicesScreen.map(c => c.levelScreen);
    }

    if (checkedDurationScreen.length === 0) {
      checkedDurationScreen = durationChoicesScreen.map(c => c.durationScreen);
    }

    if (
      filterQuinzeMinutesScreen === false &&
      filterTrenteMinutesScreen === false &&
      filterQuarantecinqMinutesScreen === false
    ) {
      setAllFilterDurationScreen(true);
    }

    if (
      filterDebutantButtonScreen === false &&
      filterIntermediaireButtonScreen === false &&
      filterAvanceButtonScreen === false
    ) {
      setAllFilterLevelScreen(true);
    }

    if (
      filterBoxeScreen === false &&
      filterPilatesScreen === false &&
      filterCardioScreen === false &&
      filterDanseScreen === false &&
      filterStretchingScreen === false &&
      filterYogaScreen === false &&
      filterApaScreen === false &&
      filterRenfoScreen === false &&
      filterMeditationScreen === false
    ) {
      setAllFilterCategoryScreen(true);
    }

    const filteredDataScreen = list.filter(
      ({ category, level, duration }) =>
        checkedCategoriesScreen.some(c => c === category) &&
        checkedLevelsScreen.some(l => l === level) &&
        checkedDurationScreen.some(l => l === duration)
    );

    filteredDataScreen.length === 0
      ? (Variables.filterListEmpty = true)
      : (Variables.filterListEmpty = false);

    return filteredDataScreen;
  };

  const { theme } = props;
  const { navigation } = props;

  const [allFilterCategory, setAllFilterCategory] = React.useState(true);
  const [allFilterCategoryScreen, setAllFilterCategoryScreen] =
    React.useState(true);
  const [allFilterDuration, setAllFilterDuration] = React.useState(true);
  const [allFilterDurationScreen, setAllFilterDurationScreen] =
    React.useState(true);
  const [allFilterLevel, setAllFilterLevel] = React.useState(true);
  const [allFilterLevelScreen, setAllFilterLevelScreen] = React.useState(true);
  const [bgColor, setBgColor] = React.useState('transparent');
  const [filterApaScreen, setFilterApaScreen] = React.useState(false);
  const [filterAvanceButton, setFilterAvanceButton] = React.useState(false);
  const [filterAvanceButtonScreen, setFilterAvanceButtonScreen] =
    React.useState(false);
  const [filterBoxe, setFilterBoxe] = React.useState(false);
  const [filterBoxeScreen, setFilterBoxeScreen] = React.useState(false);
  const [filterCardio, setFilterCardio] = React.useState(false);
  const [filterCardioScreen, setFilterCardioScreen] = React.useState(false);
  const [filterDanse, setFilterDanse] = React.useState(false);
  const [filterDanseScreen, setFilterDanseScreen] = React.useState(false);
  const [filterDebutantButton, setFilterDebutantButton] = React.useState(false);
  const [filterDebutantButtonScreen, setFilterDebutantButtonScreen] =
    React.useState(false);
  const [filterIntermediaireButton, setFilterIntermediaireButton] =
    React.useState(false);
  const [filterIntermediaireButtonScreen, setFilterIntermediaireButtonScreen] =
    React.useState(false);
  const [filterMeditationScreen, setFilterMeditationScreen] =
    React.useState(false);
  const [filterPilates, setFilterPilates] = React.useState(false);
  const [filterPilatesScreen, setFilterPilatesScreen] = React.useState(false);
  const [filterQuarantecinqMinutes, setFilterQuarantecinqMinutes] =
    React.useState(false);
  const [filterQuarantecinqMinutesScreen, setFilterQuarantecinqMinutesScreen] =
    React.useState(false);
  const [filterQuinzeMinutes, setFilterQuinzeMinutes] = React.useState(false);
  const [filterQuinzeMinutesScreen, setFilterQuinzeMinutesScreen] =
    React.useState(false);
  const [filterRenfoScreen, setFilterRenfoScreen] = React.useState(false);
  const [filterStretching, setFilterStretching] = React.useState(false);
  const [filterStretchingScreen, setFilterStretchingScreen] =
    React.useState(false);
  const [filterTrenteMinutes, setFilterTrenteMinutes] = React.useState(false);
  const [filterTrenteMinutesScreen, setFilterTrenteMinutesScreen] =
    React.useState(false);
  const [filterYoga, setFilterYoga] = React.useState(false);
  const [filterYogaScreen, setFilterYogaScreen] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      scrollable={false}
    >
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <Get$UpdateDataApi.FetchAllVideosGET>
            {({ loading, error, data, refetchAllVideos }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  bounces={true}
                  horizontal={false}
                >
                  <View style={{ backgroundColor: theme.colors.background }}>
                    <Spacer top={'8%'} right={8} left={8} />
                    <ScrollView
                      contentContainerStyle={styles.ScrollView4a298bf0Content}
                      showsVerticalScrollIndicator={true}
                      bounces={true}
                    >
                      <View style={styles.View02e1e423}>
                        <View style={styles.View4a298bf0}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('RealhomeScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View style={styles.View7f010474}>
                              <View style={styles.View20294dc1}>
                                <Icon
                                  style={styles.Iconb43c662b}
                                  name={'AntDesign/left'}
                                  size={30}
                                  color={theme.colors.custom_rgb255_255_255}
                                />
                                {/* accueil */}
                                <Text
                                  style={[
                                    styles.Text811f2041,
                                    {
                                      color: theme.colors.custom_rgb255_255_255,
                                    },
                                  ]}
                                >
                                  {'Accueil'}
                                </Text>
                              </View>
                              {/* filtrer */}
                              <View
                                style={[
                                  styles.Viewd715bc59,
                                  { backgroundColor: theme.colors.transparent },
                                ]}
                              >
                                <ButtonOutline
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'modalFilter',
                                        value: true,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonOutline784dc66a,
                                    {
                                      color: theme.colors.custom_rgb255_255_255,
                                      borderColor:
                                        theme.colors.custom_rgb255_255_255,
                                      backgroundColor: theme.colors.secondary,
                                    },
                                  ]}
                                  title={'Filtrer'}
                                  icon={'Ionicons/filter-sharp'}
                                />
                              </View>
                            </View>
                          </Touchable>
                        </View>
                      </View>
                      <View style={styles.View5ac81ac2} />
                    </ScrollView>

                    <View style={styles.Viewbbe442c7}>
                      {/* danse */}
                      <>
                        {!filterDanseScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterDanseScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline3d54c1ba,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Danse'}
                          />
                        )}
                      </>
                      {/* yoga */}
                      <>
                        {!filterYogaScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterYogaScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.ButtonOutlinee3c82520}
                            icon={'AntDesign/close'}
                            title={'Yoga'}
                          />
                        )}
                      </>
                      {/* Pilates */}
                      <>
                        {!filterPilatesScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterPilatesScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline3383ca95,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Pilates'}
                          />
                        )}
                      </>
                      {/* Cardio */}
                      <>
                        {!filterCardioScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterCardioScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline3d54c1ba,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Cardio'}
                          />
                        )}
                      </>
                      {/* Boxe */}
                      <>
                        {!filterBoxeScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterBoxeScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline3d54c1ba,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Boxe'}
                          />
                        )}
                      </>
                      {/* Stretching */}
                      <>
                        {!filterStretchingScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterStretchingScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline9fb38f4c,
                              { color: theme.colors.primary },
                            ]}
                            title={'Stretching'}
                            icon={'AntDesign/close'}
                          />
                        )}
                      </>
                      {/* debutant */}
                      <>
                        {!filterDebutantButtonScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterDebutantButtonScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline9fb38f4c,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Débutant'}
                          />
                        )}
                      </>
                      {/* intermediaire */}
                      <>
                        {!filterIntermediaireButtonScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterIntermediaireButtonScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline9fb38f4c,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Intermédiaire'}
                          />
                        )}
                      </>
                      {/* Avance */}
                      <>
                        {!filterAvanceButtonScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterAvanceButtonScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline9fb38f4c,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Avancé'}
                          />
                        )}
                      </>
                      {/* dix */}
                      <>
                        {!filterQuinzeMinutesScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterQuinzeMinutesScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline9fb38f4c,
                              { color: theme.colors.primary },
                            ]}
                            title={'10 Minutes'}
                            icon={'AntDesign/close'}
                          />
                        )}
                      </>
                      {/* vingt */}
                      <>
                        {!filterTrenteMinutesScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterTrenteMinutesScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline9fb38f4c,
                              { color: theme.colors.primary },
                            ]}
                            title={'20 Minutes'}
                            icon={'AntDesign/close'}
                          />
                        )}
                      </>
                      {/* trente */}
                      <>
                        {!filterQuarantecinqMinutesScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterQuarantecinqMinutesScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline9fb38f4c,
                              { color: theme.colors.primary },
                            ]}
                            title={'30 Minutes'}
                            icon={'AntDesign/close'}
                          />
                        )}
                      </>
                      {/* meditation */}
                      <>
                        {!filterMeditationScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterMeditationScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline3d54c1ba,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Méditation'}
                          />
                        )}
                      </>
                      {/* Renforcement */}
                      <>
                        {!filterRenfoScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterRenfoScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline3d54c1ba,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'Renforcement'}
                          />
                        )}
                      </>
                      {/* apa */}
                      <>
                        {!filterApaScreen ? null : (
                          <ButtonOutline
                            onPress={() => {
                              try {
                                setFilterApaScreen(false);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonOutline3d54c1ba,
                              { color: theme.colors.primary },
                            ]}
                            icon={'AntDesign/close'}
                            title={'APA'}
                          />
                        )}
                      </>
                    </View>
                    <>
                      {!Constants['filterListEmpty'] ? null : (
                        <Text
                          style={[
                            styles.Textc5177bfb,
                            { color: theme.colors.custom_rgb255_255_255 },
                          ]}
                        >
                          {'Aucun cours selon vos filtres'}
                        </Text>
                      )}
                    </>
                    <FlatList
                      data={filterCategoryScreen(Variables, fetchData)}
                      listKey={'vO5cbEgI'}
                      keyExtractor={item => item?.id || item?.uuid || item}
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <Touchable
                            onPress={() => {
                              try {
                                setGlobalVariableValue({
                                  key: 'idcourse',
                                  value: listData?.id,
                                });
                                setGlobalVariableValue({
                                  key: 'coachName',
                                  value: listData?.coach,
                                });
                                navigation.navigate('RealcoursedetailsScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={{ borderRadius: 15 }}
                          >
                            <View style={{ borderRadius: 15 }}>
                              <View style={{ borderRadius: 18 }}>
                                <ImageBackground
                                  style={[
                                    styles.ImageBackground7b8ed8c3,
                                    { borderRadius: 64 },
                                  ]}
                                  source={{ uri: `${listData?.cardBg}` }}
                                  resizeMode={'cover'}
                                  backgroundColor={theme.colors.colorTop}
                                >
                                  {/* coach */}
                                  <Text
                                    style={[
                                      styles.Text0c630001,
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                      },
                                    ]}
                                  >
                                    {'Coach '}
                                    {listData?.coach}
                                  </Text>
                                  {/* titre categorie */}
                                  <Text
                                    style={[
                                      styles.Textaf93a695,
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                      },
                                    ]}
                                  >
                                    {listData?.category}
                                  </Text>
                                  {/* tagline */}
                                  <Text
                                    style={[
                                      styles.Text6038d469,
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                      },
                                    ]}
                                  >
                                    {listData?.tagline}
                                  </Text>
                                  {/* niveau */}
                                  <Text
                                    style={[
                                      styles.Text8aff027c,
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                      },
                                    ]}
                                  >
                                    {listData?.level}
                                  </Text>

                                  <View style={styles.Viewe2f4359e}>
                                    {/* duration */}
                                    <Text
                                      style={[
                                        styles.Text15cfe336,
                                        {
                                          color:
                                            theme.colors.custom_rgb255_255_255,
                                        },
                                      ]}
                                    >
                                      {listData?.duration}
                                      {' min'}
                                    </Text>
                                    <Circle
                                      size={20}
                                      bgColor={theme.colors.menuOuvert}
                                    />
                                    {/* kcal */}
                                    <Text
                                      style={[
                                        styles.Text15cfe336,
                                        {
                                          color:
                                            theme.colors.custom_rgb255_255_255,
                                        },
                                      ]}
                                    >
                                      {listData?.kcal}
                                      {' kcal'}
                                    </Text>
                                  </View>
                                </ImageBackground>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                            </View>
                          </Touchable>
                        );
                      }}
                      style={{ backgroundColor: theme.colors.background }}
                      contentContainerStyle={styles.FlatListe423d11aContent}
                      numColumns={2}
                      horizontal={false}
                    />
                  </View>
                </ScrollView>
              );
            }}
          </Get$UpdateDataApi.FetchAllVideosGET>
        </ScrollView>
      </ScrollView>
      {/* menu */}
      <View
        style={[styles.View9d83df93, { backgroundColor: theme.colors.menuBg }]}
      >
        <View
          style={[
            styles.Viewc26afefa,
            { backgroundColor: theme.colors.menuBg },
          ]}
        >
          {/* video icon menu */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('RealhomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Ionicons/md-grid-outline'}
            size={90}
            color={theme.colors.menuIconFerme}
          />
          {/* video icon menu */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('FilterpageScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Entypo/folder-video'}
            size={90}
            color={theme.colors.menuOuvert}
          />
          {/* settings icon menu */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('ParametresScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Ionicons/ios-settings-outline'}
            size={90}
            color={theme.colors.menuIconFerme}
          />
        </View>
      </View>
      {/* ModalFilter */}
      <Modal
        visible={Constants['modalFilter']}
        animationType={'slide'}
        presentationStyle={'overFullScreen'}
      >
        <ScrollView
          style={[
            styles.ScrollView07e88a6e,
            { backgroundColor: theme.colors.secondary },
          ]}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          {/* BgModal */}
          <View style={{ backgroundColor: theme.colors.secondary }}>
            <Spacer top={'8%'} right={8} left={8} />
            {/* Topbar */}
            <View
              style={[styles.View54b36e68, { borderColor: theme.colors.light }]}
            >
              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalFilter',
                      value: false,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Text
                  style={[
                    styles.Text2b823b40,
                    { color: theme.colors.menuOuvert },
                  ]}
                >
                  {'Annuler'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalFilter',
                      value: false,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.Touchablef814d1d6,
                  { borderRadius: 12, borderColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[styles.Text06d4bc80, { color: theme.colors.primary }]}
                >
                  {'Valider'}
                </Text>
              </Touchable>
            </View>
            <Spacer top={'8%'} right={8} left={8} />
            {/* Session filtre */}
            <View style={styles.Viewd8e6b79e}>
              <Text
                style={[
                  styles.Text7e3698cc,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Type de session'}
              </Text>
              {/* All category */}
              <View>
                {/* buttonFilterCategory */}
                <>
                  {allFilterCategoryScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setAllFilterCategoryScreen(true);
                          setFilterDanseScreen(false);
                          setFilterYogaScreen(false);
                          setFilterPilatesScreen(false);
                          setFilterBoxeScreen(false);
                          setFilterCardioScreen(false);
                          setFilterStretchingScreen(false);
                          setFilterMeditationScreen(false);
                          setFilterApaScreen(false);
                          setFilterRenfoScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Toutes'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* buttonFilterCategory */}
                <>
                  {!allFilterCategoryScreen ? null : (
                    <Touchable style={styles.Touchable30713f6a}>
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Toutes'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* category cardio */}
              <View>
                {/* buttonFilterCategory */}
                <>
                  {filterCardioScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterCardioScreen(true);
                          setAllFilterCategoryScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Cardio'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* buttonFilterCategory */}
                <>
                  {!filterCardioScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterCardioScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Cardio'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* category danse */}
              <View>
                {/* Unselected */}
                <>
                  {filterDanseScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterDanseScreen(true);
                          setAllFilterCategoryScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Danse'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterDanseScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterDanseScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Danse'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* category yoga */}
              <View>
                {/* Unselected */}
                <>
                  {filterYogaScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterYogaScreen(true);
                          setAllFilterCategoryScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Yoga'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterYogaScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterYogaScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Yoga'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* category Meditation */}
              <View>
                {/* Unselected */}
                <>
                  {filterMeditationScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterMeditationScreen(true);
                          setAllFilterCategoryScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Méditation'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterMeditationScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterMeditationScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Méditation'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* category apa */}
              <View>
                {/* Unselected */}
                <>
                  {filterApaScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterApaScreen(true);
                          setAllFilterCategoryScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'APA'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterApaScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterApaScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'APA'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* category renfo */}
              <View>
                {/* Unselected */}
                <>
                  {filterRenfoScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterRenfoScreen(true);
                          setAllFilterCategoryScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                          ellipsizeMode={'tail'}
                          adjustsFontSizeToFit={false}
                        >
                          {'Renforcement'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterRenfoScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterRenfoScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Renforcement'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* category stretching */}
              <View>
                {/* Unselected */}
                <>
                  {filterStretchingScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterStretchingScreen(true);
                          setAllFilterCategoryScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Stretching'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterStretchingScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterStretchingScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Stretching'}
                        </Text>
                        <Icon
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
            {/* niveau filtre */}
            <View style={styles.Viewd8e6b79e}>
              <Text
                style={[
                  styles.Text3c805c07,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Difficulté'}
              </Text>
              {/* All level */}
              <View>
                {/* buttonFilterCategory */}
                <>
                  {allFilterLevelScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setAllFilterLevelScreen(true);
                          setFilterDebutantButtonScreen(false);
                          setFilterIntermediaireButtonScreen(false);
                          setFilterAvanceButtonScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Toutes'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* buttonFilterCategory */}
                <>
                  {!allFilterLevelScreen ? null : (
                    <Touchable style={styles.Touchable30713f6a}>
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Toutes'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* debutant */}
              <View>
                {/* buttonFilterCategory */}
                <>
                  {filterDebutantButtonScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterDebutantButtonScreen(true);
                          setAllFilterLevelScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Débutant'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* buttonFilterCategory */}
                <>
                  {!filterDebutantButtonScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterDebutantButtonScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Débutant'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* intermediaire */}
              <View>
                {/* Unselected */}
                <>
                  {filterIntermediaireButtonScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterIntermediaireButtonScreen(true);
                          setAllFilterLevelScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Intermédiaire'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterIntermediaireButtonScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterIntermediaireButtonScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Intermédiaire'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* avance */}
              <View>
                {/* Unselected */}
                <>
                  {filterAvanceButtonScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterAvanceButtonScreen(true);
                          setAllFilterLevelScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Avancé'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterAvanceButtonScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterAvanceButtonScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Avancé'}
                        </Text>
                        <Icon
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
            {/* duration filtre */}
            <View style={styles.Viewd8e6b79e}>
              <Text
                style={[
                  styles.Text3c805c07,
                  { color: theme.colors.menuOuvert },
                ]}
              >
                {'Durée'}
              </Text>
              {/* All duration */}
              <View>
                {/* buttonFilterDuration */}
                <>
                  {allFilterDurationScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setAllFilterDurationScreen(true);
                          setFilterQuinzeMinutesScreen(false);
                          setFilterTrenteMinutesScreen(false);
                          setFilterQuarantecinqMinutesScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Toutes'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* buttonFilterCategory */}
                <>
                  {!allFilterDurationScreen ? null : (
                    <Touchable style={styles.Touchable30713f6a}>
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Toutes'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* quinze */}
              <View>
                {/* buttonFilterCategory */}
                <>
                  {filterQuinzeMinutesScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterQuinzeMinutesScreen(true);
                          setAllFilterDurationScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'10 minutes'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* buttonFilterCategory */}
                <>
                  {!filterQuinzeMinutesScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterQuinzeMinutesScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'10 minutes'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* trente */}
              <View>
                {/* Unselected */}
                <>
                  {filterTrenteMinutesScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterTrenteMinutesScreen(true);
                          setAllFilterDurationScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'20 minutes'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterTrenteMinutesScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterTrenteMinutesScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'20 minutes'}
                        </Text>
                        <Icon
                          name={'AntDesign/check'}
                          size={30}
                          color={theme.colors.menuOuvert}
                        />
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* avance */}
              <View>
                {/* Unselected */}
                <>
                  {filterQuarantecinqMinutesScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterQuarantecinqMinutesScreen(true);
                          setAllFilterDurationScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Unselected */}
                      <View
                        style={[
                          styles.Viewe8c52c28,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.medium,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Textf72d6ed4,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'30 minutes'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Selected */}
                <>
                  {!filterQuarantecinqMinutesScreen ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setFilterQuarantecinqMinutesScreen(false);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles.Touchable30713f6a}
                    >
                      {/* Selected */}
                      <View
                        style={[
                          styles.Viewf7487d72,
                          {
                            borderRadius: 64,
                            backgroundColor: theme.colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Text34624c0b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'30 minutes'}
                        </Text>
                        <Icon
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
            <Spacer top={'8%'} right={8} left={8} />
            <Spacer top={'8%'} right={8} left={8} />
          </View>
        </ScrollView>
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonOutline3383ca95: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
    zIndex: 333,
  },
  ButtonOutline3d54c1ba: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
    zIndex: 333,
  },
  ButtonOutline784dc66a: {
    borderRadius: 30,
    borderWidth: 1,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 40,
    height: 120,
    textAlign: 'center',
    width: 200,
  },
  ButtonOutline9fb38f4c: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
    zIndex: 333,
  },
  ButtonOutlinee3c82520: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatListe423d11aContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Iconb43c662b: {
    marginTop: '2%',
  },
  ImageBackground7b8ed8c3: {
    height: 720,
    justifyContent: 'space-around',
    marginRight: 15,
    width: 504,
  },
  ScrollView07e88a6e: {
    height: '100%',
  },
  ScrollView4a298bf0Content: {
    alignItems: 'flex-start',
  },
  Text06d4bc80: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    textAlign: 'center',
  },
  Text0c630001: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 40,
    marginTop: '8%',
    textTransform: 'capitalize',
  },
  Text15cfe336: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 30,
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'left',
    textTransform: 'none',
  },
  Text2b823b40: {
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 46,
  },
  Text34624c0b: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginRight: 15,
    textAlign: 'center',
  },
  Text3c805c07: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: 15,
    marginTop: 20,
  },
  Text6038d469: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: 50,
    marginTop: '2%',
    textAlign: 'center',
  },
  Text7e3698cc: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: 15,
  },
  Text811f2041: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 60,
  },
  Text8aff027c: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 30,
    marginLeft: '5%',
    marginTop: '70%',
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  Textaf93a695: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: 65,
    marginTop: '2%',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  Textc5177bfb: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginLeft: '3%',
    marginRight: '3%',
  },
  Textf72d6ed4: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    textAlign: 'center',
  },
  Touchable30713f6a: {
    marginBottom: 10,
    marginRight: 10,
  },
  Touchablef814d1d6: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  View02e1e423: {
    alignItems: 'flex-start',
    marginLeft: '3%',
    marginRight: '3%',
  },
  View20294dc1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  View4a298bf0: {
    alignItems: 'flex-start',
  },
  View54b36e68: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '3%',
    marginRight: '3%',
    paddingBottom: 30,
  },
  View5ac81ac2: {
    alignContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    zIndex: 999,
  },
  View7f010474: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  View9d83df93: {
    alignContent: 'stretch',
    height: '10%',
    justifyContent: 'space-around',
    opacity: 0.96,
  },
  Viewbbe442c7: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 80,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: 80,
  },
  Viewc26afefa: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    opacity: 1,
    width: '90%',
  },
  Viewd715bc59: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: 1,
  },
  Viewd8e6b79e: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Viewe2f4359e: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '4%',
  },
  Viewe8c52c28: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Viewf7487d72: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default withTheme(FilterpageScreen);
