import React from 'react';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as PatchUserDataApi from '../apis/PatchUserDataApi.js';
import * as Signup$Login$LogoutApi from '../apis/Signup$Login$LogoutApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Circle,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ParametresScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const signup$Login$LogoutLogoutPOST = Signup$Login$LogoutApi.useLogoutPOST();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Spacer top={'8%'} right={8} left={8} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewd8e6b79eContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.View017e1e1d}>
          <View>
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('RealhomeScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'Entypo/chevron-thin-left'}
              size={55}
              color={theme.colors.menuOuvert}
            />
          </View>

          <View style={styles.View7d6a39b7}>
            <Icon
              style={styles.Icon6dc4da3d}
              name={'Ionicons/settings-outline'}
              color={theme.colors.menuOuvert}
              size={68}
            />
            <Text
              style={[styles.Text4bf8bdfc, { color: theme.colors.menuOuvert }]}
            >
              {'Paramètres'}
            </Text>
          </View>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <View>
          <Text
            style={[styles.Text1c8b1943, { color: theme.colors.menuOuvert }]}
          >
            {'Gestion du profil'}
          </Text>
          <Spacer top={'8%'} right={8} left={8} />
          {/* gerer profil */}
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('ProfilScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolide71d8c70,
              { backgroundColor: theme.colors.secondary },
            ]}
            loading={false}
            title={'Gérer le profil utilisateur'}
          />
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <View>
          <View>
            <Spacer top={'8%'} right={8} left={8} />
            <PatchUserDataApi.FetchHistoryGET
              id={Constants['id']}
              onData={fetchData => {
                const handler = async () => {
                  console.log('Fetch ON_DATA Start');
                  let error = null;
                  try {
                    console.log('Start ON_DATA:0 EXTRACT_KEY');
                    const idOfTheClass = fetchData?.class_id.classesDone;
                    console.log('Complete ON_DATA:0 EXTRACT_KEY', {
                      idOfTheClass,
                    });
                    console.log('Start ON_DATA:1 FETCH_REQUEST');
                    const oneCourseWithId =
                      await Get$UpdateDataApi.oneCourseGET(Constants, {
                        id: idOfTheClass,
                      });
                    console.log('Complete ON_DATA:1 FETCH_REQUEST', {
                      oneCourseWithId,
                    });
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    'Fetch ON_DATA Complete',
                    error ? { error } : 'no error'
                  );
                };
                handler();
              }}
            >
              {({ loading, error, data, refetchHistory }) => {
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
                    <Text
                      style={[
                        styles.Textea175b2b,
                        { color: theme.colors.custom_rgb255_255_255 },
                      ]}
                    >
                      {'Total des sessions : '}
                      {fetchData?.length}
                    </Text>
                    {/* iterate on the arrray */}
                    <FlatList
                      data={fetchData}
                      listKey={'lGGpJ3gm'}
                      keyExtractor={item => item?.id || item?.uuid || item}
                      renderItem={({ item }) => {
                        const iterateOnTheArrrayData = item;
                        return (
                          <Get$UpdateDataApi.FetchOneCourseGET
                            id={iterateOnTheArrrayData?.class_id}
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
                                  {/* oneClass */}
                                  <FlatList
                                    data={fetchData}
                                    listKey={'Xqz4afaU'}
                                    keyExtractor={item =>
                                      item?.id || item?.uuid || item
                                    }
                                    renderItem={({ item }) => {
                                      const oneClassData = item;
                                      return (
                                        <View
                                          style={[
                                            styles.View746e62b3,
                                            {
                                              borderColor: theme.colors.primary,
                                              borderRadius: 12,
                                            },
                                          ]}
                                        >
                                          <View>
                                            <Image
                                              style={styles.Imagedd163fa3}
                                              resizeMode={'cover'}
                                              source={{
                                                uri: `${oneClassData?.img_bg_url}`,
                                              }}
                                            />
                                          </View>

                                          <View style={styles.View0bd0c9a2}>
                                            <Text
                                              style={[
                                                styles.Text9a4a7a56,
                                                {
                                                  color:
                                                    theme.colors
                                                      .custom_rgb255_255_255,
                                                },
                                              ]}
                                            >
                                              {'Titre : '}
                                              {oneClassData?.title}
                                            </Text>

                                            <View style={styles.Viewce4accf0}>
                                              <Text
                                                style={[
                                                  styles.Text18ec0a55,
                                                  {
                                                    color:
                                                      theme.colors
                                                        .custom_rgb255_255_255,
                                                  },
                                                ]}
                                              >
                                                {oneClassData?.coach}
                                              </Text>
                                              <Circle
                                                size={18}
                                                bgColor={
                                                  theme.colors
                                                    .custom_rgb255_255_255
                                                }
                                              />
                                              <Text
                                                style={[
                                                  styles.Textcc419c8b,
                                                  {
                                                    color:
                                                      theme.colors
                                                        .custom_rgb255_255_255,
                                                  },
                                                ]}
                                              >
                                                {oneClassData?.level}
                                              </Text>
                                              <Circle
                                                size={18}
                                                bgColor={
                                                  theme.colors
                                                    .custom_rgb255_255_255
                                                }
                                              />
                                              <Text
                                                style={[
                                                  styles.Textfa067492,
                                                  {
                                                    color:
                                                      theme.colors
                                                        .custom_rgb255_255_255,
                                                  },
                                                ]}
                                              >
                                                {oneClassData?.duration}
                                              </Text>
                                            </View>

                                            <View style={styles.View6dfabda0}>
                                              <Icon
                                                size={24}
                                                name={'AntDesign/checkcircle'}
                                                color={theme.colors.primary}
                                              />
                                              <Text
                                                style={[
                                                  styles.Textcd63d1ed,
                                                  {
                                                    color:
                                                      theme.colors
                                                        .custom_rgb255_255_255,
                                                  },
                                                ]}
                                              >
                                                {'Complété avec succès !'}
                                              </Text>
                                            </View>
                                          </View>
                                        </View>
                                      );
                                    }}
                                    numColumns={1}
                                  />
                                </>
                              );
                            }}
                          </Get$UpdateDataApi.FetchOneCourseGET>
                        );
                      }}
                      contentContainerStyle={styles.FlatListc992f941Content}
                      numColumns={1}
                    />
                  </>
                );
              }}
            </PatchUserDataApi.FetchHistoryGET>
          </View>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <View>
          <Text
            style={[styles.Text1c8b1943, { color: theme.colors.menuOuvert }]}
          >
            {'Support'}
          </Text>
          <Spacer top={'8%'} right={8} left={8} />
          {/* Valider */}
          <ButtonSolid
            style={[
              styles.ButtonSolid25cd6f2c,
              { backgroundColor: theme.colors.primary },
            ]}
            title={"Besoin d'aide ? Envoyez-nous un email: aide@unionfit.fr"}
            loading={false}
          />
          <Spacer top={'8%'} right={8} left={8} />
          <Spacer top={'8%'} right={8} left={8} />
          {/* Se deconnecter */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  await signup$Login$LogoutLogoutPOST.mutateAsync();
                  navigation.navigate('RealloginscreenScreen');
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
            loading={false}
            title={'Se déconnecter'}
          />
          <Spacer top={'8%'} right={8} left={8} />
        </View>
      </ScrollView>
      {/* menu */}
      <View
        style={[styles.View5b1d91fd, { backgroundColor: theme.colors.menuBg }]}
      >
        <View style={styles.View32c76855}>
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
            color={theme.colors.menuIconFerme}
          />
          {/* settings icon menu */}
          <IconButton
            icon={'Ionicons/ios-settings-outline'}
            size={90}
            color={theme.colors.menuOuvert}
          />
        </View>
      </View>
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
  ButtonSolide71d8c70: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    height: 192,
    textAlign: 'center',
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  Icon6dc4da3d: {
    marginRight: 10,
  },
  Imagedd163fa3: {
    height: 250,
    width: '100%',
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text18ec0a55: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 36,
    marginLeft: 10,
    marginRight: 10,
  },
  Text1c8b1943: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
  },
  Text4bf8bdfc: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 88,
  },
  Text9a4a7a56: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 50,
    marginLeft: 10,
  },
  Textcc419c8b: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 36,
    marginLeft: 10,
    marginRight: 10,
    textTransform: 'capitalize',
  },
  Textcd63d1ed: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 36,
    marginLeft: 10,
    marginRight: 10,
  },
  Textea175b2b: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginBottom: 22,
  },
  Textfa067492: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 36,
    marginLeft: 10,
  },
  View017e1e1d: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View0bd0c9a2: {
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
  },
  View32c76855: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  View5b1d91fd: {
    alignContent: 'stretch',
    height: '10%',
    justifyContent: 'space-around',
  },
  View6dfabda0: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  View746e62b3: {
    marginBottom: 14,
    marginTop: 14,
  },
  View7d6a39b7: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewce4accf0: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default withTheme(ParametresScreen);
