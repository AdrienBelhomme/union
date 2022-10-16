import React from 'react';
import * as CloudinaryApi from '../apis/CloudinaryApi.js';
import * as Get$UpdateDataApi from '../apis/Get$UpdateDataApi.js';
import * as Signup$Login$LogoutApi from '../apis/Signup$Login$LogoutApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  Circle,
  CircleImage,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ProfilScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const cloudinaryImageUploadPOST = CloudinaryApi.useImageUploadPOST();
  const get$UpdateDataUploadProfilImagePATCH =
    Get$UpdateDataApi.useUploadProfilImagePATCH();
  const signup$Login$LogoutLogoutPOST = Signup$Login$LogoutApi.useLogoutPOST();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Spacer top={'8%'} right={8} left={8} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewd8e6b79eContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('ParametresScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Entypo/chevron-thin-left'}
            color={theme.colors.menuOuvert}
            size={55}
          />
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <View style={styles.View39912261}>
          <View style={{ borderRadius: 46 }}>
            <CircleImage
              style={styles.CircleImagee65b0c4c}
              size={60}
              source={{ uri: `${Constants['profilPic']}` }}
            />
            <View style={styles.View77581d07}>
              <Circle size={50} bgColor={theme.colors.secondary}>
                <IconButton
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const profilPic = await Utils.openCamera({
                          allowsEditing: true,
                        });
                        setGlobalVariableValue({
                          key: 'profilPic',
                          value: profilPic,
                        });
                        const uploadResponseCloudinary =
                          await cloudinaryImageUploadPOST.mutateAsync({
                            file: profilPic,
                            uploadPreset: Constants['uploadPreset'],
                          });
                        const profilPicUrl = uploadResponseCloudinary.url;
                        await get$UpdateDataUploadProfilImagePATCH.mutateAsync({
                          id: Constants['id'],
                          profilPicture: profilPicUrl,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  size={32}
                  icon={'FontAwesome/pencil-square-o'}
                  color={theme.colors.menuOuvert}
                />
              </Circle>
            </View>
          </View>
          <Spacer top={'8%'} right={8} left={8} />
          <Text
            style={[styles.Textc8ece956, { color: theme.colors.menuOuvert }]}
          >
            {Constants['fname']}
          </Text>
        </View>
        <Spacer top={'8%'} right={8} left={8} />
        <View>
          {/* general */}
          <Text
            style={[styles.Text2fa0a4eb, { color: theme.colors.menuOuvert }]}
          >
            {'Général'}
          </Text>
        </View>

        <View>
          {/* variable profil */}
          <ScrollView
            contentContainerStyle={styles.ScrollViewd8e6b79eContent}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <Spacer top={'8%'} right={8} left={8} />
            <Spacer top={'8%'} right={8} left={8} />
            <View
              style={[
                styles.View97bce605,
                { borderRadius: 12, borderColor: theme.colors.light },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangefnamesettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* fname view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
                      ]}
                    >
                      {'Prénom'}
                    </Text>
                  </View>

                  <View style={styles.Viewa02aa1aa}>
                    <Text
                      style={[
                        styles.Textabafa26b,
                        { color: theme.colors.menuOuvert },
                      ]}
                    >
                      {Constants['fname']}
                    </Text>
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>

            <View
              style={[
                styles.View29b997ff,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangegenresettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* genre view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
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
                      {' test'}
                    </Text>
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>

            <View
              style={[styles.Viewf59e7151, { borderColor: theme.colors.light }]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangeagesettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* age view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
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
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>

            <View
              style={[
                styles.View7f1b2880,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangepoidssettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* poids view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
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
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
            {/* niveau */}
            <View
              style={[
                styles.Viewdb1e7b6f,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangeniveausettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* poids view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
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
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
            {/* objectif */}
            <View
              style={[
                styles.Viewdb1e7b6f,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangeobjectifsettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* poids view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
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
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
            {/* preference */}
            <View
              style={[
                styles.View7f1b2880,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangepreferencesettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* poids view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
                      ]}
                    >
                      {'Préférences'}
                    </Text>
                  </View>

                  <View style={styles.Viewa02aa1aa}>
                    <>
                      {!Constants['yoga'] ? null : (
                        <Text
                          style={[
                            styles.Textabafa26b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {'Yoga'}
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
                        >
                          {'Cardio'}
                        </Text>
                      )}
                    </>
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
            {/* gene */}
            <View
              style={[
                styles.Viewdb1e7b6f,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangegenessettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* gene view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
                      ]}
                    >
                      {'Gènes'}
                    </Text>
                  </View>

                  <View style={styles.Viewa02aa1aa}>
                    {/* genoux */}
                    <>
                      {!Constants['genoux'] ? null : (
                        <Text
                          style={[
                            styles.Textabafa26b,
                            { color: theme.colors.menuOuvert },
                          ]}
                        >
                          {Constants['genoux']}
                          {','}
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
                        >
                          {Constants['cou']}
                          {','}
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
                        >
                          {Constants['epaules']}
                          {','}
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
                        >
                          {Constants['dos']}
                          {','}
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
                        >
                          {Constants['cheville']}
                          {','}
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
                        >
                          {Constants['poignet']}
                          {','}
                        </Text>
                      )}
                    </>
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
            {/* equipement */}
            <View
              style={[
                styles.View7f1b2880,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangeequipementsettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* equipement view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
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
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
            {/* frequence */}
            <View
              style={[
                styles.Viewdb1e7b6f,
                { borderColor: theme.colors.light, borderRadius: 12 },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangefrequencedureesettingsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* equipement view */}
                <View style={styles.View92380291}>
                  <View style={styles.View94567f3d}>
                    {/* frequence */}
                    <Text
                      style={[
                        styles.Text9a20d59f,
                        { color: theme.colors.light },
                      ]}
                    >
                      {'Fréquence'}
                    </Text>
                  </View>

                  <View style={styles.Viewa02aa1aa}>
                    {/* un */}
                    <>
                      {!Constants['freqUn'] ? null : (
                        <Text
                          style={[
                            styles.Textabafa26b,
                            { color: theme.colors.menuOuvert },
                          ]}
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
                        >
                          {'60 minutes'}
                        </Text>
                      )}
                    </>
                    <Icon
                      style={styles.Icon9d0ad012}
                      name={'AntDesign/right'}
                      size={40}
                      color={theme.colors.menuOuvert}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
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
            <Spacer top={'8%'} right={8} left={8} />
          </ScrollView>
        </View>
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
  CircleImagee65b0c4c: {
    height: 250,
    width: 250,
  },
  Icon9d0ad012: {
    marginTop: 5,
  },
  ScrollViewd8e6b79eContent: {
    marginLeft: '3%',
    marginRight: '3%',
  },
  Text2fa0a4eb: {
    fontSize: 56,
  },
  Text9a20d59f: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 56,
  },
  Textabafa26b: {
    alignSelf: 'flex-end',
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 56,
    marginRight: 20,
  },
  Textc8ece956: {
    fontSize: 56,
    textAlign: 'center',
  },
  View29b997ff: {
    alignContent: 'center',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  View39912261: {
    alignItems: 'center',
  },
  View77581d07: {
    position: 'absolute',
    right: 1,
    top: 1,
  },
  View7f1b2880: {
    borderBottomWidth: 1,
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
  View97bce605: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: '100%',
  },
  Viewa02aa1aa: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Viewdb1e7b6f: {
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  Viewf59e7151: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default withTheme(ProfilScreen);
