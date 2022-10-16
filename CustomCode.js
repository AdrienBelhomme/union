import {
  Dimensions,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { ResizeMode, Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import {
  ButtonSolid,
  Touchable,
  ScreenContainer,
  ButtonOutline,
} from '@draftbit/ui';
import * as GlobalVariableContext from './config/GlobalVariableContext';
import * as Get$UpdateDataApi from './apis/Get$UpdateDataApi.js';
import * as GlobalVariables from './config/GlobalVariableContext';
import * as Utils from './utils';
import { useIsFocused } from '@react-navigation/native';
import { Fetch } from 'react-request';

export const VidePlayerUnionLast = props => {
  const video = React.useRef(null);

  const { navigation } = props;
  const { theme } = props;

  console.log(props);

  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const variables = GlobalVariableContext.useValues();

  const [status, setStatus] = React.useState({
    status: null,
    isPlaying: false,
  });

  const [playVisible, setPlayVisible] = React.useState(true);
  const [pauseVisible, setPauseVisible] = React.useState(false);

  function togglePauseVisible() {
    setPauseVisible(prev => !prev);
  }

  function togglePlayVisible() {
    setPlayVisible(prev => !prev);
  }

  function makePlayVisible() {
    setPlayVisible(true);
  }

  let hidePauseButton = function () {};

  React.useEffect(() => {
    if (!pauseVisible) return;
    const hidePauseButton = setTimeout(() => {
      setPauseVisible(false);
    }, 2000);
    return () => clearTimeout(hidePauseButton);
  }, [pauseVisible]);

  function onPressScreenPause() {
    if (!pauseVisible && !playVisible) {
      setPauseVisible(true);
      clearTimeout(hidePauseButton);
    }
  }

  React.useEffect(() => {
    const trackUser = setTimeout(() => {
      variables.trackActivityUser += variables.category;
    }, 4000);
    return () => clearTimeout();
  }, []);

  return (
    <View>
      <Touchable onPress={() => onPressScreenPause()}>
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
              <Video
                ref={video}
                style={styles.VideoClass}
                source={{ uri: `${variables.url_video}` }}
                resizeMode={'contain'}
                useNativeControls={false}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
            );
          }}
        </Get$UpdateDataApi.FetchOneCourseGET>

        <View style={styles.controlsVideo}>
          {playVisible && (
            <ButtonSolid
              style={styles.ControlFirstButton}
              title={
                <AntDesign name="playcircleo" size={180} color="#5CCCA4" />
              }
              onPress={() => (
                video.current.playAsync(),
                togglePauseVisible(),
                togglePlayVisible()
              )}
            />
          )}

          {pauseVisible && (
            <ButtonSolid
              style={styles.ControlFirstButton}
              title={
                <AntDesign name="pausecircleo" size={180} color="#5CCCA4" />
              }
              onPress={() => (
                video.current.pauseAsync(),
                togglePauseVisible(),
                makePlayVisible(),
                hidePauseButton()
              )}
            />
          )}

          {playVisible && (
            <View style={styles.ViewButton}>
              {status.isPlaying ? null : (
                <ButtonSolid
                  style={styles.ButtonStopSession}
                  title={'Arrêter la session'}
                  onPress={() => {
                    navigation.navigate('RealcoursedetailsScreen');
                  }}
                />
              )}
            </View>
          )}
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  VideoClass: {
    height: 1920,
  },

  ButtonStopSession: {
    borderRadius: 50,
    fontFamily: 'System',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 56,
    paddingTop: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    color: 'white',
    backgroundColor: '#5CCCA4',
    marginTop: 60,
  },

  ControlFirstButton: {
    backgroundColor: 'transparent',
    background: 'transparent',
    paddingTop: 100,
  },

  ViewButton: {
    backgroundColor: 'transparent',
    background: 'transparent',
    width: '50%',
  },

  controlsVideo: {
    alignItems: 'center',
    color: 'white',
    position: 'absolute',
    top: 430,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    background: 'transparent',
  },

  ButtonVideo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'brown',
    background: 'brown',
    width: '30%',
    height: 200,
  },
  Text1c8b1943: {
    fontSize: 56,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextInput03ad5433: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  ButtonSolid2d5f6a36: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 56,
    height: 192,
  },
  Viewd8e6b79e: {
    marginLeft: '3%',
    marginRight: '3%',
  },
});

export const ResetPassword = () => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const { theme } = props;

  const supabaseResetPass = async () => {
    console.log(emailReset);

    const notification = toast.loading('Sending Email....');

    try {
      const { data, error } = await supabase.auth.api.resetPasswordForEmail(
        emailReset,
        {
          redirectTo: 'http://localhost:3000/password-reset', //// this will redirect to us at password-reset page,
          //// you can also set your own page for it.
        }
      );

      if (error) {
        toast.error(error.message, {
          id: notification,
        });
      } else if (data) {
        console.log(data);
        toast.success('Sent', {
          id: notification,
        });
      }
    } catch (error) {
      toast.error('Sorry Error occured', {
        id: notification,
      });
    }
  };

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View style={styles.Viewd8e6b79e}>
        <Spacer top={'8%'} right={8} left={8} />
        <Text style={[styles.Text1c8b1943, { color: theme.colors.menuOuvert }]}>
          {'Réinitialiser votre mot de passe'}
        </Text>
        <Spacer top={'8%'} right={8} left={8} />
        <TextInput
          onChangeText={newTextInputValue => {
            try {
              setGlobalVariableValue({
                key: 'emailReset',
                value: newTextInputValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.TextInput03ad5433,
            { borderColor: theme.colors.divider },
          ]}
          placeholder={'Entrez votre email...'}
        />
        <Spacer top={'8%'} right={8} left={8} />
        <ButtonSolid
          style={[
            styles.ButtonSolid2d5f6a36,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Continuer'}
          onPress={() => {
            try {
              supabaseResetPass();
            } catch (err) {
              console.error(err);
            }
          }}
        />
      </View>
    </ScreenContainer>
  );
};
