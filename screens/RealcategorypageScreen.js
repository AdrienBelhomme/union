import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Circle,
  Icon,
  IconButton,
  LinearGradient,
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
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const RealcategorypageScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const filterListLevel = list => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(list, buttonInputValue);
    newList = list.filter(item =>
      item.level.toLowerCase().includes(buttonInputValue)
    );
    return newList;
  };

  const { theme } = props;
  const { navigation } = props;

  const [bgColor, setBgColor] = React.useState('transparent');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      scrollable={false}
    >
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <Get$UpdateDataApi.FetchVideosGET
            category={Constants['category']}
            onData={fetchData => {
              try {
                setGlobalVariableValue({
                  key: 'idcourse',
                  value: fetchData?.id,
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {({ loading, error, data, refetchVideos }) => {
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
                  <>
                    {!fetchData ? null : (
                      <View>
                        <ScrollView
                          showsVerticalScrollIndicator={true}
                          bounces={true}
                        >
                          <Get$UpdateDataApi.FetchCategoryDescriptionGetGET
                            category={Constants['category']}
                          >
                            {({
                              loading,
                              error,
                              data,
                              refetchCategoryDescriptionGet,
                            }) => {
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
                                <ImageBackground
                                  style={styles.ImageBackgrounda98db7de}
                                  resizeMode={'cover'}
                                  source={{
                                    uri: `${
                                      (fetchData && fetchData[0])
                                        ?.bg_image_category
                                    }`,
                                  }}
                                >
                                  <Spacer top={'8%'} right={8} left={8} />
                                  <View style={styles.Viewd8e6b79e}>
                                    <View style={styles.View08f70170}>
                                      <Touchable
                                        onPress={() => {
                                          try {
                                            navigation.navigate(
                                              'RealhomeScreen'
                                            );
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        }}
                                      >
                                        <View style={styles.View286e9519}>
                                          <Icon
                                            style={styles.Iconb43c662b}
                                            size={30}
                                            color={
                                              theme.colors.custom_rgb255_255_255
                                            }
                                            name={'AntDesign/left'}
                                          />
                                          {/* Categories */}
                                          <Text
                                            style={[
                                              styles.Text2c193d75,
                                              {
                                                color:
                                                  theme.colors
                                                    .custom_rgb255_255_255,
                                              },
                                            ]}
                                          >
                                            {'Catégories'}
                                          </Text>
                                        </View>
                                      </Touchable>
                                    </View>

                                    <View style={styles.Viewb73ffc3e}>
                                      <Spacer top={'8%'} right={8} left={8} />
                                      {/* Titre categorie */}
                                      <Text
                                        style={[
                                          styles.Texte50e77d2,
                                          { color: theme.colors.menuOuvert },
                                        ]}
                                      >
                                        {Constants['category']}
                                      </Text>
                                      <Spacer top={'8%'} right={8} left={8} />
                                    </View>

                                    <Get$UpdateDataApi.FetchCategoryDescriptionGetGET
                                      category={Constants['category']}
                                    >
                                      {({
                                        loading,
                                        error,
                                        data,
                                        refetchCategoryDescriptionGet,
                                      }) => {
                                        const fetchData = data;
                                        if (!fetchData || loading) {
                                          return <ActivityIndicator />;
                                        }

                                        if (error) {
                                          return (
                                            <Text
                                              style={{ textAlign: 'center' }}
                                            >
                                              There was a problem fetching this
                                              data
                                            </Text>
                                          );
                                        }

                                        return (
                                          <>
                                            {/* cat */}
                                            <FlatList
                                              data={fetchData}
                                              listKey={'modUuPBL'}
                                              keyExtractor={item =>
                                                item?.id || item?.uuid || item
                                              }
                                              renderItem={({ item }) => {
                                                const catData = item;
                                                return (
                                                  <View>
                                                    {/* Description */}
                                                    <Text
                                                      style={[
                                                        styles.Text07977fe1,
                                                        {
                                                          color:
                                                            theme.colors
                                                              .menuOuvert,
                                                        },
                                                      ]}
                                                    >
                                                      {catData?.description}
                                                    </Text>
                                                  </View>
                                                );
                                              }}
                                              numColumns={1}
                                            />
                                          </>
                                        );
                                      }}
                                    </Get$UpdateDataApi.FetchCategoryDescriptionGetGET>
                                  </View>
                                  <Spacer top={'8%'} right={8} left={8} />
                                </ImageBackground>
                              );
                            }}
                          </Get$UpdateDataApi.FetchCategoryDescriptionGetGET>
                        </ScrollView>
                        <FlatList
                          data={fetchData}
                          listKey={'UdBu22f8'}
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
                          style={{ backgroundColor: theme.colors.black }}
                          contentContainerStyle={styles.FlatList571edf55Content}
                          horizontal={false}
                          numColumns={2}
                        />
                      </View>
                    )}
                  </>
                </ScrollView>
              );
            }}
          </Get$UpdateDataApi.FetchVideosGET>
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatList571edf55Content: {
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
  ImageBackgrounda98db7de: {
    height: '100%',
    width: '100%',
  },
  LinearGradient4f112ba6: {
    height: 150,
    width: '100%',
  },
  LinearGradienta98db7de: {
    height: '100%',
    width: '100%',
  },
  Text07977fe1: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 56,
    textTransform: 'none',
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
  Text2c193d75: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 60,
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
  Texte50e77d2: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 128,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  View08f70170: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View286e9519: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  View9d83df93: {
    alignContent: 'stretch',
    height: '10%',
    justifyContent: 'space-around',
    opacity: 0.96,
  },
  Viewb73ffc3e: {
    alignContent: 'center',
  },
  Viewc26afefa: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    opacity: 1,
    width: '90%',
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
});

export default withTheme(RealcategorypageScreen);
