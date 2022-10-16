import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  Circle,
  CircleImage,
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
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const RealhomeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const filterList = (Variables, setGlobalVariableValue, list) => {
    const categoryChoices = [
      { category: 'yoga', checked: Variables.yoga },
      { category: 'boxe', checked: Variables.coaching },
      { category: 'pilates', checked: Variables.pilates },
      { category: 'cardio', checked: Variables.cardio },
      { category: 'danse', checked: Variables.danse },
      { category: 'stretching', checked: Variables.stretching },
    ];

    const levelsChoices = [
      { level: 'débutant', checked: filterDebutantButton },
      { level: 'intermédiaire', checked: filterIntermediaireButton },
      { level: 'avancé', checked: filterAvanceButton },
    ];

    const durationChoices = [
      { duration: '15', checked: filterQuinzeMinutes },
      { duration: '30', checked: filterTrenteMinutes },
      { duration: '45', checked: filterQuarantecinqMinutes },
    ];

    let checkedCategories = categoryChoices
      .filter(c => c.checked)
      .map(c => c.category);

    let checkedLevels = levelsChoices.filter(l => l.checked).map(l => l.level);

    let checkedDuration = durationChoices
      .filter(l => l.checked)
      .map(l => l.duration);

    if (checkedCategories.length === 0) {
      checkedCategories = categoryChoices.map(c => c.category);
    }

    if (checkedLevels.length === 0) {
      checkedLevels = levelsChoices.map(c => c.level);
    }

    if (checkedDuration.length === 0) {
      checkedDuration = durationChoices.map(c => c.duration);
    }

    const filteredDataHome = list.filter(
      ({ category, level, duration }) =>
        checkedCategories.some(c => c === category) &&
        checkedLevels.some(l => l === level) &&
        checkedDuration.some(l => l === duration)
    );

    //filteredDataHome.length === 0 ? setGlobalVariableValue.Variables.filterListEmpty(true) : filteredDataHome;

    console.log(Variables.filterListEmpty);
    console.log('yoga' + Variables.yoga);
    console.log('danse' + Variables.danse);

    return filteredDataHome.length === 0 ? list : filteredDataHome;
  };

  const { theme } = props;
  const { navigation } = props;

  const [allFilterCategory, setAllFilterCategory] = React.useState(true);
  const [allFilterDuration, setAllFilterDuration] = React.useState(true);
  const [allFilterLevel, setAllFilterLevel] = React.useState(true);
  const [bgColor, setBgColor] = React.useState('transparent');
  const [filterAvanceButton, setFilterAvanceButton] = React.useState(false);
  const [filterBoxe, setFilterBoxe] = React.useState(false);
  const [filterCardio, setFilterCardio] = React.useState(false);
  const [filterDanse, setFilterDanse] = React.useState(false);
  const [filterDebutantButton, setFilterDebutantButton] = React.useState(false);
  const [filterIntermediaireButton, setFilterIntermediaireButton] =
    React.useState(false);
  const [filterPilates, setFilterPilates] = React.useState(false);
  const [filterQuarantecinqMinutes, setFilterQuarantecinqMinutes] =
    React.useState(false);
  const [filterQuinzeMinutes, setFilterQuinzeMinutes] = React.useState(false);
  const [filterStretching, setFilterStretching] = React.useState(false);
  const [filterTrenteMinutes, setFilterTrenteMinutes] = React.useState(false);
  const [filterYoga, setFilterYoga] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      scrollable={false}
    >
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <Spacer top={'8%'} right={8} left={8} />
        {/* filter et logo */}
        <View style={styles.Viewdc5bb060}>
          <View style={styles.View6279df4e}>
            {/* logo */}
            <Image
              style={styles.Image367dd086}
              source={{
                uri: 'https://res.cloudinary.com/djl9nmkbs/image/upload/v1656588300/logo-only-white_hnv3rd.png',
              }}
              resizeMode={'contain'}
            />
          </View>

          <View style={[styles.View434b8726, { borderRadius: 22 }]}>
            <ButtonOutline
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'modalFilter',
                    value: true,
                  });
                  navigation.navigate('FilterpageScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonOutlineb279d712,
                {
                  color: theme.colors.custom_rgb255_255_255,
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.custom_rgb255_255_255,
                },
              ]}
              title={'Filtrer'}
              icon={'Ionicons/filter-sharp'}
            />
            <View style={[styles.View4ca5ce38, { borderRadius: 64 }]}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ProfilScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <CircleImage
                  source={{ uri: `${Constants['profilPic']}` }}
                  size={90}
                />
              </Touchable>
            </View>
          </View>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        {/* categories */}
        <View style={styles.View3aa6394c}>
          <View style={styles.View1a5108cf}>
            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'modalCategorie',
                    value: true,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.View7d6a39b7}>
                {/* categorie button */}
                <Text
                  style={[
                    styles.Text1faf19c6,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'Catégories '}
                </Text>
                <Icon
                  name={'AntDesign/caretdown'}
                  size={24}
                  color={theme.colors.custom_rgb255_255_255}
                />
              </View>
            </Touchable>
          </View>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
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
                <>
                  {!fetchData ? null : (
                    <ScrollView
                      bounces={true}
                      horizontal={false}
                      showsVerticalScrollIndicator={false}
                    >
                      <>
                        {!fetchData ? null : (
                          <View>
                            <>
                              {!fetchData ? null : (
                                <View style={styles.Viewe7eb888c}>
                                  <Text
                                    style={[
                                      styles.Text91e10704,
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                      },
                                    ]}
                                  >
                                    {'Pour vous'}
                                  </Text>

                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setGlobalVariableValue({
                                          key: 'modalFilter',
                                          value: false,
                                        });
                                        navigation.navigate('FilterpageScreen');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View style={styles.View286e9519}>
                                      <Text
                                        style={[
                                          styles.Texte47238f2,
                                          {
                                            color:
                                              theme.colors
                                                .custom_rgb255_255_255,
                                          },
                                        ]}
                                      >
                                        {'Tout voir'}
                                      </Text>
                                      <Icon
                                        style={styles.Icon11f6da2b}
                                        name={'AntDesign/right'}
                                        size={30}
                                        color={
                                          theme.colors.custom_rgb255_255_255
                                        }
                                      />
                                    </View>
                                  </Touchable>
                                </View>
                              )}
                            </>
                            {/* no ocurse in the filter */}
                            <>
                              {!Constants['filterListEmpty'] ? null : (
                                <Text
                                  style={[
                                    styles.Text9852fe4b,
                                    { color: theme.colors.menuOuvert },
                                  ]}
                                >
                                  {'Aucun cours dans vos choix'}
                                </Text>
                              )}
                            </>
                            <FlatList
                              data={filterList(
                                Variables,
                                setGlobalVariableValue,
                                fetchData
                              )}
                              listKey={'B8YPIDxl'}
                              keyExtractor={item =>
                                item?.id || item?.uuid || item
                              }
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
                                        navigation.navigate(
                                          'RealcoursedetailsScreen'
                                        );
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    style={{ borderRadius: 15 }}
                                  >
                                    <>
                                      {!fetchData ? null : (
                                        <View style={{ borderRadius: 15 }}>
                                          <>
                                            {!fetchData ? null : (
                                              <View
                                                style={{ borderRadius: 18 }}
                                              >
                                                <ImageBackground
                                                  style={[
                                                    styles.ImageBackground7bb9b416,
                                                    { borderRadius: 64 },
                                                  ]}
                                                  source={{
                                                    uri: `${listData?.cardBg}`,
                                                  }}
                                                  resizeMode={'cover'}
                                                  backgroundColor={
                                                    theme.colors.colorTop
                                                  }
                                                >
                                                  {/* coach */}
                                                  <Text
                                                    style={[
                                                      styles.Text352649da,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {'Coach '}
                                                    {listData?.coach}
                                                  </Text>
                                                  {/* titre categorie */}
                                                  <Text
                                                    style={[
                                                      styles.Text35fd34ab,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.category?.toUpperCase()}
                                                  </Text>
                                                  {/* tagline */}
                                                  <Text
                                                    style={[
                                                      styles.Text6038d469,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.tagline}
                                                  </Text>
                                                  {/* niveau */}
                                                  <Text
                                                    style={[
                                                      styles.Text8f618c76,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.level}
                                                  </Text>

                                                  <View
                                                    style={styles.Viewe2f4359e}
                                                  >
                                                    {/* duration */}
                                                    <Text
                                                      style={[
                                                        styles.Text7ee6b646,
                                                        {
                                                          color:
                                                            theme.colors
                                                              .custom_rgb255_255_255,
                                                        },
                                                      ]}
                                                    >
                                                      {listData?.duration}
                                                      {' min'}
                                                    </Text>
                                                    <Circle
                                                      bgColor={
                                                        theme.colors.menuOuvert
                                                      }
                                                      size={20}
                                                    />
                                                    {/* kcal */}
                                                    <Text
                                                      style={[
                                                        styles.Text2e3fc680,
                                                        {
                                                          color:
                                                            theme.colors
                                                              .custom_rgb255_255_255,
                                                        },
                                                      ]}
                                                    >
                                                      {listData?.kcal}
                                                      {' kcal'}
                                                    </Text>
                                                  </View>
                                                </ImageBackground>
                                              </View>
                                            )}
                                          </>
                                          <Spacer
                                            top={8}
                                            right={8}
                                            bottom={8}
                                            left={8}
                                          />
                                        </View>
                                      )}
                                    </>
                                  </Touchable>
                                );
                              }}
                              contentContainerStyle={
                                styles.FlatList113cf24bContent
                              }
                              numColumns={1}
                              horizontal={true}
                            />
                          </View>
                        )}
                      </>
                    </ScrollView>
                  )}
                </>
              );
            }}
          </Get$UpdateDataApi.FetchAllVideosGET>
        </ScrollView>
        <Spacer top={'8%'} right={8} left={8} />
        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <Get$UpdateDataApi.FetchGetPopularClassGET
            popular={Constants['true']}
          >
            {({ loading, error, data, refetchGetPopularClass }) => {
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
                <>
                  {!fetchData ? null : (
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      bounces={true}
                      horizontal={false}
                    >
                      <>
                        {!fetchData ? null : (
                          <View>
                            <>
                              {!fetchData ? null : (
                                <View style={styles.Viewe7eb888c}>
                                  <Text
                                    style={[
                                      styles.Text91e10704,
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                      },
                                    ]}
                                  >
                                    {'Populaire'}
                                  </Text>

                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setGlobalVariableValue({
                                          key: 'modalFilter',
                                          value: false,
                                        });
                                        navigation.navigate('FilterpageScreen');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View style={styles.View286e9519}>
                                      <Text
                                        style={[
                                          styles.Texte47238f2,
                                          {
                                            color:
                                              theme.colors
                                                .custom_rgb255_255_255,
                                          },
                                        ]}
                                      >
                                        {'Tout voir'}
                                      </Text>
                                      <Icon
                                        style={styles.Icon11f6da2b}
                                        name={'AntDesign/right'}
                                        size={30}
                                        color={
                                          theme.colors.custom_rgb255_255_255
                                        }
                                      />
                                    </View>
                                  </Touchable>
                                </View>
                              )}
                            </>
                            {/* no ocurse in the filter */}
                            <>
                              {!Constants['filterListEmpty'] ? null : (
                                <Text
                                  style={[
                                    styles.Text1c8b1943,
                                    { color: theme.colors.menuOuvert },
                                  ]}
                                >
                                  {'Aucun cours dans vos choix'}
                                </Text>
                              )}
                            </>
                            <FlatList
                              data={fetchData}
                              listKey={'VVqVZYVZ'}
                              keyExtractor={item =>
                                item?.id || item?.uuid || item
                              }
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
                                        navigation.navigate(
                                          'RealcoursedetailsScreen'
                                        );
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
                                          source={{
                                            uri: `${listData?.cardBg}`,
                                          }}
                                          resizeMode={'cover'}
                                          backgroundColor={
                                            theme.colors.colorTop
                                          }
                                        >
                                          {/* coach */}
                                          <Text
                                            style={[
                                              styles.Text0c630001,
                                              {
                                                color:
                                                  theme.colors
                                                    .custom_rgb255_255_255,
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
                                                  theme.colors
                                                    .custom_rgb255_255_255,
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
                                                  theme.colors
                                                    .custom_rgb255_255_255,
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
                                                  theme.colors
                                                    .custom_rgb255_255_255,
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
                                                    theme.colors
                                                      .custom_rgb255_255_255,
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
                                                    theme.colors
                                                      .custom_rgb255_255_255,
                                                },
                                              ]}
                                            >
                                              {listData?.kcal}
                                              {' kcal'}
                                            </Text>
                                          </View>
                                        </ImageBackground>
                                      </View>
                                      <Spacer
                                        top={8}
                                        right={8}
                                        bottom={8}
                                        left={8}
                                      />
                                    </View>
                                  </Touchable>
                                );
                              }}
                              contentContainerStyle={
                                styles.FlatList113cf24bContent
                              }
                              numColumns={1}
                              horizontal={true}
                            />
                          </View>
                        )}
                      </>
                    </ScrollView>
                  )}
                </>
              );
            }}
          </Get$UpdateDataApi.FetchGetPopularClassGET>
        </ScrollView>

        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <Spacer top={'8%'} right={8} left={8} />
          <Get$UpdateDataApi.FetchGetDetenteClassesGET detente={true}>
            {({ loading, error, data, refetchGetDetenteClasses }) => {
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
                <>
                  {!fetchData ? null : (
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      bounces={true}
                      horizontal={false}
                    >
                      <>
                        {!fetchData ? null : (
                          <View>
                            <>
                              {!fetchData ? null : (
                                <View style={styles.Viewe7eb888c}>
                                  <Text
                                    style={[
                                      styles.Text91e10704,
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                      },
                                    ]}
                                  >
                                    {'Pour se détendre'}
                                  </Text>

                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setGlobalVariableValue({
                                          key: 'modalFilter',
                                          value: false,
                                        });
                                        navigation.navigate('FilterpageScreen');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View style={styles.View286e9519}>
                                      <Text
                                        style={[
                                          styles.Texte47238f2,
                                          {
                                            color:
                                              theme.colors
                                                .custom_rgb255_255_255,
                                          },
                                        ]}
                                      >
                                        {'Tout voir'}
                                      </Text>
                                      <Icon
                                        style={styles.Icon11f6da2b}
                                        name={'AntDesign/right'}
                                        size={30}
                                        color={
                                          theme.colors.custom_rgb255_255_255
                                        }
                                      />
                                    </View>
                                  </Touchable>
                                </View>
                              )}
                            </>
                            {/* no ocurse in the filter */}
                            <>
                              {!Constants['filterListEmpty'] ? null : (
                                <Text
                                  style={[
                                    styles.Text1c8b1943,
                                    { color: theme.colors.menuOuvert },
                                  ]}
                                >
                                  {'Aucun cours dans vos choix'}
                                </Text>
                              )}
                            </>
                            <FlatList
                              data={fetchData}
                              listKey={'tYycijpr'}
                              keyExtractor={item =>
                                item?.id || item?.uuid || item
                              }
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
                                        navigation.navigate(
                                          'RealcoursedetailsScreen'
                                        );
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    style={{ borderRadius: 15 }}
                                  >
                                    <>
                                      {!fetchData ? null : (
                                        <View style={{ borderRadius: 15 }}>
                                          <>
                                            {!fetchData ? null : (
                                              <View
                                                style={{ borderRadius: 18 }}
                                              >
                                                <ImageBackground
                                                  style={[
                                                    styles.ImageBackground7b8ed8c3,
                                                    { borderRadius: 64 },
                                                  ]}
                                                  source={{
                                                    uri: `${listData?.cardBg}`,
                                                  }}
                                                  resizeMode={'cover'}
                                                  backgroundColor={
                                                    theme.colors.colorTop
                                                  }
                                                >
                                                  {/* coach */}
                                                  <Text
                                                    style={[
                                                      styles.Textdcdee83b,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {'Coach '}
                                                    {listData?.coach}
                                                  </Text>
                                                  {/* titre categorie */}
                                                  <Text
                                                    style={[
                                                      styles.Text92648e34,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.category?.toUpperCase()}
                                                  </Text>
                                                  {/* tagline */}
                                                  <Text
                                                    style={[
                                                      styles.Text6038d469,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.tagline}
                                                  </Text>
                                                  {/* niveau */}
                                                  <Text
                                                    style={[
                                                      styles.Text3c68aca0,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .custom_rgb255_255_255,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.level}
                                                  </Text>

                                                  <View
                                                    style={styles.View7d6a39b7}
                                                  >
                                                    {/* duration */}
                                                    <Text
                                                      style={[
                                                        styles.Text15cfe336,
                                                        {
                                                          color:
                                                            theme.colors
                                                              .custom_rgb255_255_255,
                                                        },
                                                      ]}
                                                    >
                                                      {listData?.duration}
                                                      {' min'}
                                                    </Text>
                                                    <Circle
                                                      size={20}
                                                      bgColor={
                                                        theme.colors.menuOuvert
                                                      }
                                                    />
                                                    {/* kcal */}
                                                    <Text
                                                      style={[
                                                        styles.Text15cfe336,
                                                        {
                                                          color:
                                                            theme.colors
                                                              .custom_rgb255_255_255,
                                                        },
                                                      ]}
                                                    >
                                                      {listData?.kcal}
                                                      {' kcal'}
                                                    </Text>
                                                  </View>
                                                </ImageBackground>
                                              </View>
                                            )}
                                          </>
                                          <Spacer
                                            top={8}
                                            right={8}
                                            bottom={8}
                                            left={8}
                                          />
                                        </View>
                                      )}
                                    </>
                                  </Touchable>
                                );
                              }}
                              contentContainerStyle={
                                styles.FlatList113cf24bContent
                              }
                              numColumns={1}
                              horizontal={true}
                            />
                          </View>
                        )}
                      </>
                    </ScrollView>
                  )}
                </>
              );
            }}
          </Get$UpdateDataApi.FetchGetDetenteClassesGET>
        </ScrollView>
      </ScrollView>
      {/* ModalCategories */}
      <>
        {!Constants['modalCategorie'] ? null : (
          <Modal
            visible={Constants['modalCategorie']}
            animationType={'slide'}
            transparent={true}
            presentationStyle={'pageSheet'}
          >
            <View
              style={[
                styles.View33d6fd92,
                { backgroundColor: theme.colors.bgColormodalCategory },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                    navigation.navigate('RealhomeScreen');
                    setGlobalVariableValue({
                      key: 'category',
                      value: 'apa',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* apa */}
                <Text
                  style={[
                    styles.Textd97f81b0,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'APA'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                    setGlobalVariableValue({
                      key: 'category',
                      value: 'cardio',
                    });
                    navigation.navigate('RealcategorypageScreen', {
                      categoryPassed: 'cardio',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Cardio */}
                <Text
                  style={[
                    styles.Textd97f81b0,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'Cardio'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                    setGlobalVariableValue({
                      key: 'category',
                      value: 'yoga',
                    });
                    navigation.navigate('RealcategorypageScreen', {
                      categoryPassed: 'Yoga',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Yoga */}
                <Text
                  style={[
                    styles.Textd97f81b0,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'Yoga'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                    setGlobalVariableValue({
                      key: 'category',
                      value: 'danse',
                    });
                    navigation.navigate('RealcategorypageScreen', {
                      categoryPassed: 'Danse',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Danse */}
                <Text
                  style={[
                    styles.Textd97f81b0,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'Danse'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                    setGlobalVariableValue({
                      key: 'category',
                      value: 'renforcement',
                    });
                    navigation.navigate('RealcategorypageScreen', {
                      categoryPassed: 'Boxe',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Renforcement Musculaire */}
                <Text
                  style={[
                    styles.Textd97f81b0,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'Renforcement'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                    setGlobalVariableValue({
                      key: 'category',
                      value: 'méditation',
                    });
                    navigation.navigate('RealcategorypageScreen', {
                      categoryPassed: 'méditation',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Meditation */}
                <Text
                  style={[
                    styles.Textd97f81b0,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'Méditation'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                    setGlobalVariableValue({
                      key: 'category',
                      value: 'stretching',
                    });
                    navigation.navigate('RealcategorypageScreen', {
                      categoryPassed: 'Stretch',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Stretch */}
                <Text
                  style={[
                    styles.Textd97f81b0,
                    { color: theme.colors.custom_rgb255_255_255 },
                  ]}
                >
                  {'Stretching'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'modalCategorie',
                      value: false,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablea0ada30a}
              >
                <Icon
                  name={'AntDesign/closecircle'}
                  size={120}
                  color={theme.colors.custom_rgb255_255_255}
                />
              </Touchable>
            </View>
          </Modal>
        )}
      </>
      {/* menu */}
      <View
        style={[styles.View5b1d91fd, { backgroundColor: theme.colors.menuBg }]}
      >
        <View style={styles.View32c76855}>
          {/* video icon menu */}
          <IconButton
            icon={'Ionicons/md-grid-outline'}
            size={90}
            color={theme.colors.menuOuvert}
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
            color={theme.colors.menuIconFerme}
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonOutlineb279d712: {
    borderRadius: 30,
    borderWidth: 1,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 30,
    height: 90,
    textAlign: 'center',
    width: 170,
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatList113cf24bContent: {
    flexDirection: 'row',
    marginLeft: '3%',
    marginTop: '3%',
  },
  Icon11f6da2b: {
    marginTop: '3%',
  },
  Image367dd086: {
    bottom: 0,
    height: 50,
    minHeight: 100,
    minWidth: 100,
    width: 220,
    zIndex: 100,
  },
  ImageBackground7b8ed8c3: {
    height: 720,
    justifyContent: 'space-around',
    marginRight: 15,
    width: 504,
  },
  ImageBackground7bb9b416: {
    height: 720,
    justifyContent: 'space-around',
    marginRight: 15,
    width: 504,
  },
  ScrollView07e88a6e: {
    height: '100%',
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
  Text1c8b1943: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
  },
  Text1faf19c6: {
    alignSelf: 'flex-start',
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 44,
  },
  Text2b823b40: {
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 46,
  },
  Text2e3fc680: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 30,
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'left',
    textTransform: 'none',
  },
  Text34624c0b: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginRight: 15,
    textAlign: 'center',
  },
  Text352649da: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 40,
    marginTop: '8%',
    textTransform: 'capitalize',
  },
  Text35fd34ab: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: 65,
    marginTop: '2%',
    textAlign: 'center',
  },
  Text3c68aca0: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 30,
    marginLeft: '5%',
    marginTop: '75%',
    textAlign: 'left',
    textTransform: 'capitalize',
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
  Text7ee6b646: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 30,
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'left',
    textTransform: 'none',
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
  Text8f618c76: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 30,
    marginLeft: '5%',
    marginTop: '70%',
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  Text91e10704: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 50,
  },
  Text92648e34: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: 65,
    marginTop: '2%',
    textTransform: 'uppercase',
  },
  Text9852fe4b: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
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
  Textd97f81b0: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 120,
    marginBottom: '2%',
    marginTop: '2%',
  },
  Textdb5fac36: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    textAlign: 'center',
  },
  Textdcdee83b: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 40,
    marginTop: '8%',
  },
  Texte47238f2: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 40,
  },
  Touchable30713f6a: {
    marginBottom: 10,
    marginRight: 10,
  },
  Touchablea0ada30a: {
    marginTop: '4%',
  },
  Touchablef814d1d6: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  View1a5108cf: {
    alignContent: 'space-between',
    flexDirection: 'row',
  },
  View286e9519: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  View32c76855: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  View33d6fd92: {
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    opacity: 1,
  },
  View3aa6394c: {
    flexDirection: 'row',
    marginLeft: '3%',
    marginRight: '3%',
  },
  View434b8726: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View4ca5ce38: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '2%',
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
  View5b1d91fd: {
    alignContent: 'stretch',
    height: '10%',
    justifyContent: 'space-around',
  },
  View6279df4e: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  View7d6a39b7: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewd8e6b79e: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Viewdc5bb060: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '3%',
    marginRight: '3%',
  },
  Viewe2f4359e: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '4%',
  },
  Viewe7eb888c: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '3%',
    marginRight: '3%',
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

export default withTheme(RealhomeScreen);
