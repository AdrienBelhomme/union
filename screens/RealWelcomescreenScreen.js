import React from 'react';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

const RealWelcomescreenScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.strong }}
      hasTopSafeArea={true}
      scrollable={false}
      hasSafeArea={false}
    >
      <ImageBackground
        style={styles.ImageBackgroundfbad1ca7}
        resizeMode={'cover'}
        backgroundColor={theme.colors.error}
        source={{
          uri: 'https://res.cloudinary.com/union-fitness/image/upload/v1664450974/Sans_titre_24_ojzem1.png',
        }}
        backfaceVisibility={'visible'}
      >
        {/* space top */}
        <View style={styles.View520d5af4} />
        <View style={styles.Viewcebd1bce}>
          {/* Logo */}
          <Image
            style={styles.Image95ad36f6}
            source={{
              uri: 'https://res.cloudinary.com/djl9nmkbs/image/upload/v1656588300/logo-only-white_hnv3rd.png',
            }}
            resizeMode={'contain'}
          />
        </View>

        <View style={styles.View9fdc4e06}>
          {/* se connecter */}
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('RealloginscreenScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolide1ba6746,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Se connecter'}
          />
          {/* sinscrire */}
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('REALaccountcreationScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid7a758262,
              { backgroundColor: theme.colors.primary },
            ]}
            title={"S'inscrire"}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid7a758262: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 42,
    marginTop: 40,
    minHeight: 100,
    paddingBottom: 40,
    paddingTop: 40,
    textAlign: 'center',
  },
  ButtonSolide1ba6746: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 42,
    minHeight: 100,
    paddingBottom: 40,
    paddingTop: 40,
    textAlign: 'center',
  },
  Image95ad36f6: {
    height: 400,
    width: 400,
    zIndex: 600,
  },
  ImageBackgroundfbad1ca7: {
    height: '100%',
    justifyContent: 'space-around',
    width: '100%',
  },
  View520d5af4: {
    height: 50,
  },
  View9fdc4e06: {
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  Viewcebd1bce: {
    alignSelf: 'center',
  },
});

export default withTheme(RealWelcomescreenScreen);
