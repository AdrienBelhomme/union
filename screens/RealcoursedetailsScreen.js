import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as PatchUserDataApi from '../apis/PatchUserDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Circle,
  CircleImage,
  Icon,
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

const RealcoursedetailsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const pushArrayClasses = (
    Variables,
    setGlobalVariableValue,
    currentArrayClasssesDone
  ) => {
    console.log(currentArrayClasssesDone);

    let arrayToPushToSupabaseGood = [];
    currentArrayClasssesDone.push(Variables.id);

    arrayToPushToSupabaseGood = currentArrayClasssesDone;

    setGlobalVariableValue(
      (Variables.newClassToPush = currentArrayClasssesDone)
    );

    console.log(Variables.newClassToPush);
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
          <Get$UpdateDataApi.FetchOneCourseGET id={Constants['idcourse']}>
            {({ loading, error, data, refetchOneCourse }) => {
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
                          <LinearGradient
                            style={styles.LinearGradienta98db7de}
                            endY={100}
                            endX={50}
                            color2={theme.colors.black}
                            color1={theme.colors.black}
                          >
                            <View
                              style={{
                                backgroundColor: theme.colors.background,
                              }}
                            >
                              <FlatList
                                data={fetchData}
                                listKey={'UtCsiTPL'}
                                keyExtractor={item =>
                                  item?.id || item?.uuid || item
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <View>
                                      <ImageBackground
                                        style={[
                                          styles.ImageBackground77a99323,
                                          {
                                            backgroundColor:
                                              theme.colors.colorTop,
                                          },
                                        ]}
                                        source={{
                                          uri: `${listData?.img_bg_url}`,
                                        }}
                                        resizeMode={'cover'}
                                        backfaceVisibility={'visible'}
                                      >
                                        <Spacer top={'8%'} right={8} left={8} />
                                        <View style={styles.View1d47eead}>
                                          <FlatList
                                            data={fetchData}
                                            listKey={'2a9c4TAg'}
                                            keyExtractor={item =>
                                              item?.id || item?.uuid || item
                                            }
                                            renderItem={({ item }) => {
                                              const listData = item;
                                              return (
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
                                                  <View
                                                    style={styles.View03132df7}
                                                  >
                                                    <Icon
                                                      style={
                                                        styles.Icon1230205a
                                                      }
                                                      name={'AntDesign/left'}
                                                      size={38}
                                                      color={theme.colors.black}
                                                    />
                                                    {/* Categories */}
                                                    <Text
                                                      style={[
                                                        styles.Text106eb736,
                                                        {
                                                          color:
                                                            theme.colors.black,
                                                        },
                                                      ]}
                                                    >
                                                      {listData?.category}
                                                    </Text>
                                                  </View>
                                                </Touchable>
                                              );
                                            }}
                                            style={styles.FlatList5b2e8816}
                                            contentContainerStyle={
                                              styles.FlatList5b2e8816Content
                                            }
                                            numColumns={1}
                                          />
                                        </View>
                                        <FlatList
                                          data={fetchData}
                                          listKey={'0bgcNdmj'}
                                          keyExtractor={item =>
                                            item?.id || item?.uuid || item
                                          }
                                          renderItem={({ item }) => {
                                            const listData = item;
                                            return (
                                              <View style={styles.View0380be26}>
                                                <View
                                                  style={styles.Viewee33c0b7}
                                                >
                                                  {/* Titre categorie */}
                                                  <Text
                                                    style={[
                                                      styles.Text5acde2ed,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .menuOuvert,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.title}
                                                  </Text>
                                                </View>

                                                <View
                                                  style={styles.View1b402207}
                                                >
                                                  {/* coach name */}
                                                  <Text
                                                    style={[
                                                      styles.Text8e7225c9,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .menuOuvert,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.coach}
                                                  </Text>
                                                  <Circle
                                                    bgColor={
                                                      theme.colors.menuOuvert
                                                    }
                                                    size={15}
                                                  />
                                                  {/* level */}
                                                  <Text
                                                    style={[
                                                      styles.Text0b5d1a28,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .menuOuvert,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.level}
                                                  </Text>
                                                  <Circle
                                                    bgColor={
                                                      theme.colors.menuOuvert
                                                    }
                                                    size={15}
                                                  />
                                                  {/* duration */}
                                                  <Text
                                                    style={[
                                                      styles.Text21f4d668,
                                                      {
                                                        color:
                                                          theme.colors
                                                            .menuOuvert,
                                                      },
                                                    ]}
                                                  >
                                                    {listData?.duration}
                                                    {' min.'}
                                                  </Text>
                                                </View>
                                              </View>
                                            );
                                          }}
                                          contentContainerStyle={
                                            styles.FlatLista9ba9797Content
                                          }
                                          numColumns={1}
                                        />
                                      </ImageBackground>
                                    </View>
                                  );
                                }}
                                contentContainerStyle={
                                  styles.FlatListc992f941Content
                                }
                                numColumns={1}
                              />
                              <View style={styles.Viewd8e6b79e}>
                                <Spacer top={'8%'} right={8} left={8} />
                                {/* aPropos */}
                                <Text
                                  style={[
                                    styles.Text531d8164,
                                    { color: theme.colors.menuOuvert },
                                  ]}
                                >
                                  {'À propos de cet entraînement'}
                                </Text>
                                <FlatList
                                  data={fetchData}
                                  listKey={'NNsPUZJ7'}
                                  keyExtractor={item =>
                                    item?.id || item?.uuid || item
                                  }
                                  renderItem={({ item }) => {
                                    const listData = item;
                                    return (
                                      <>
                                        {/* Description */}
                                        <Text
                                          style={[
                                            styles.Text95d5c1d7,
                                            { color: theme.colors.menuOuvert },
                                          ]}
                                        >
                                          {listData?.description}
                                        </Text>
                                      </>
                                    );
                                  }}
                                  contentContainerStyle={
                                    styles.FlatListc992f941Content
                                  }
                                  numColumns={1}
                                />
                                <Spacer top={'8%'} right={8} left={8} />
                              </View>
                            </View>
                          </LinearGradient>
                        </ScrollView>
                      </View>
                    )}
                  </>
                </ScrollView>
              );
            }}
          </Get$UpdateDataApi.FetchOneCourseGET>
          <Get$UpdateDataApi.FetchCoachsGET name={Constants['coachName']}>
            {({ loading, error, data, refetchCoachs }) => {
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
                  contentContainerStyle={styles.ScrollViewd8e6b79eContent}
                  showsVerticalScrollIndicator={true}
                  bounces={true}
                >
                  <FlatList
                    data={fetchData}
                    listKey={'Vwm6NQJb'}
                    keyExtractor={item => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* COACH */}
                          <Text
                            style={[
                              styles.Text3a1523b9,
                              { color: theme.colors.menuOuvert },
                            ]}
                          >
                            {'Coach'}
                          </Text>

                          <View style={styles.View7d6a39b7}>
                            <CircleImage
                              source={{ uri: `${listData?.image_url}` }}
                              size={200}
                            />
                            {/* coach name */}
                            <Text
                              style={[
                                styles.Texte369f273,
                                { color: theme.colors.menuOuvert },
                              ]}
                            >
                              {listData?.name}
                            </Text>
                          </View>

                          <View>
                            <Spacer top={'8%'} right={8} left={8} />
                            {/* coach description */}
                            <Text
                              style={[
                                styles.Textbeaf991f,
                                { color: theme.colors.menuOuvert },
                              ]}
                            >
                              {listData?.description}
                            </Text>
                          </View>

                          <View>
                            <Spacer top={'8%'} right={8} left={8} />
                            {/* equipement */}
                            <Text
                              style={[
                                styles.Textd5f31bde,
                                { color: theme.colors.menuOuvert },
                              ]}
                            >
                              {'Équipement'}
                            </Text>

                            <Get$UpdateDataApi.FetchOneCourseGET
                              id={Constants['idcourse']}
                              onData={fetchData => {
                                try {
                                  setGlobalVariableValue({
                                    key: 'url_video',
                                    value: fetchData?.video_url,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              {({ loading, error, data, refetchOneCourse }) => {
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
                                    <ScrollView
                                      showsVerticalScrollIndicator={true}
                                      bounces={true}
                                    >
                                      <FlatList
                                        data={fetchData}
                                        listKey={'kZTb1svI'}
                                        keyExtractor={item =>
                                          item?.id || item?.uuid || item
                                        }
                                        renderItem={({ item }) => {
                                          const listData = item;
                                          return (
                                            <View>
                                              {/* liste equipment */}
                                              <Text
                                                style={[
                                                  styles.Textc9e15e4d,
                                                  {
                                                    color:
                                                      theme.colors.menuOuvert,
                                                  },
                                                ]}
                                              >
                                                {listData?.equipment}
                                              </Text>
                                              <Spacer
                                                top={'8%'}
                                                right={8}
                                                left={8}
                                              />
                                            </View>
                                          );
                                        }}
                                        contentContainerStyle={
                                          styles.FlatListe4c663c7Content
                                        }
                                        numColumns={1}
                                        horizontal={true}
                                      />
                                    </ScrollView>
                                    <View style={styles.View9bf5e91f} />
                                  </>
                                );
                              }}
                            </Get$UpdateDataApi.FetchOneCourseGET>
                          </View>
                        </>
                      );
                    }}
                    contentContainerStyle={styles.FlatListbcadb689Content}
                    numColumns={1}
                  />
                </ScrollView>
              );
            }}
          </Get$UpdateDataApi.FetchCoachsGET>
        </ScrollView>
      </ScrollView>

      <Get$UpdateDataApi.FetchOneCourseGET id={Constants['idcourse']}>
        {({ loading, error, data, refetchOneCourse }) => {
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
            <View>
              <FlatList
                data={fetchData}
                listKey={'YOehvkVb'}
                keyExtractor={item => item?.id || item?.uuid || item}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* commencer */}
                      <Touchable
                        onPress={() => {
                          const handler = async () => {
                            try {
                              setGlobalVariableValue({
                                key: 'url_video',
                                value: listData?.video_url,
                              });
                              const uuidClass = fetchData && fetchData[0].id;
                              await PatchUserDataApi.newClassDonePOST(
                                Constants,
                                {
                                  classid: uuidClass,
                                  profileid: Constants['id'],
                                }
                              );
                              navigation.navigate('RealvideocomponentScreen', {
                                urlofvideo: listData?.video_url,
                                url: listData?.video_url,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        }}
                      >
                        <View
                          style={[
                            styles.View4c016d7f,
                            { backgroundColor: theme.colors.primary },
                          ]}
                        >
                          {/* Commencer */}
                          <Text
                            style={[
                              styles.Text3074e8ad,
                              { color: theme.colors.menuOuvert },
                            ]}
                          >
                            {'Commencer'}
                          </Text>
                        </View>
                      </Touchable>
                    </>
                  );
                }}
                numColumns={1}
              />
            </View>
          );
        }}
      </Get$UpdateDataApi.FetchOneCourseGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatList5b2e8816: {
    width: '100%',
  },
  FlatList5b2e8816Content: {
    flex: 1,
  },
  FlatLista9ba9797Content: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginLeft: '3%',
    marginRight: '3%',
  },
  FlatListbcadb689Content: {
    alignItems: 'flex-start',
    flex: 1,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  FlatListe4c663c7Content: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Icon1230205a: {
    marginTop: 0,
  },
  ImageBackground77a99323: {
    height: 700,
    width: '100%',
  },
  LinearGradienta98db7de: {
    height: '100%',
    width: '100%',
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text0b5d1a28: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginLeft: 20,
    marginRight: 20,
    textTransform: 'capitalize',
  },
  Text106eb736: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 60,
    textTransform: 'capitalize',
  },
  Text21f4d668: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginLeft: 20,
  },
  Text3074e8ad: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  Text3903fa70: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 56,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  Text3a1523b9: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 60,
    marginBottom: 30,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  Text531d8164: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 60,
    marginBottom: 30,
    textTransform: 'uppercase',
  },
  Text5acde2ed: {
    alignSelf: 'flex-start',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 80,
    marginBottom: 30,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  Text8e7225c9: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginRight: 20,
  },
  Text95d5c1d7: {
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 56,
  },
  Textbeaf991f: {
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 56,
    textAlign: 'left',
  },
  Textc9e15e4d: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 56,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  Textd5f31bde: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 60,
    marginBottom: 30,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  Texte369f273: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 56,
    marginLeft: 20,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  View03132df7: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  View0380be26: {
    height: 460,
    justifyContent: 'flex-end',
    marginLeft: '3%',
    marginRight: '3%',
  },
  View1b402207: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  View1d47eead: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '3%',
    marginRight: '3%',
  },
  View4c016d7f: {
    alignItems: 'center',
    height: 170,
    justifyContent: 'center',
  },
  View7d6a39b7: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  View9bf5e91f: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '3%',
    marginRight: '3%',
  },
  Viewd8e6b79e: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Viewee33c0b7: {
    justifyContent: 'flex-end',
  },
});

export default withTheme(RealcoursedetailsScreen);
