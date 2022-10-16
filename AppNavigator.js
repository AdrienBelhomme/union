import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import ChangeagesettingsScreen from './screens/ChangeagesettingsScreen';
import ChangeequipementsettingsScreen from './screens/ChangeequipementsettingsScreen';
import ChangefnamesettingsScreen from './screens/ChangefnamesettingsScreen';
import ChangefrequencedureesettingsScreen from './screens/ChangefrequencedureesettingsScreen';
import ChangegenessettingsScreen from './screens/ChangegenessettingsScreen';
import ChangegenresettingsScreen from './screens/ChangegenresettingsScreen';
import ChangeniveausettingsScreen from './screens/ChangeniveausettingsScreen';
import ChangeobjectifsettingsScreen from './screens/ChangeobjectifsettingsScreen';
import ChangepoidssettingsScreen from './screens/ChangepoidssettingsScreen';
import ChangepreferencesettingsScreen from './screens/ChangepreferencesettingsScreen';
import FilterpageScreen from './screens/FilterpageScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import ParametresScreen from './screens/ParametresScreen';
import ProfilScreen from './screens/ProfilScreen';
import REALaccountcreationScreen from './screens/REALaccountcreationScreen';
import RealFormageScreen from './screens/RealFormageScreen';
import RealFormequipementScreen from './screens/RealFormequipementScreen';
import RealFormfnameScreen from './screens/RealFormfnameScreen';
import RealFormgenesScreen from './screens/RealFormgenesScreen';
import RealFormgenreScreen from './screens/RealFormgenreScreen';
import RealFormniveauScreen from './screens/RealFormniveauScreen';
import RealFormobjectifScreen from './screens/RealFormobjectifScreen';
import RealFormpoidsScreen from './screens/RealFormpoidsScreen';
import RealFormpreferenceScreen from './screens/RealFormpreferenceScreen';
import RealWelcomescreenScreen from './screens/RealWelcomescreenScreen';
import RealcategorypageScreen from './screens/RealcategorypageScreen';
import RealcoursedetailsScreen from './screens/RealcoursedetailsScreen';
import RealformallanswersScreen from './screens/RealformallanswersScreen';
import RealformfrequencedureeScreen from './screens/RealformfrequencedureeScreen';
import RealformvalidateloadingScreen from './screens/RealformvalidateloadingScreen';
import RealhomeScreen from './screens/RealhomeScreen';
import RealintroinfoScreen from './screens/RealintroinfoScreen';
import RealloginscreenScreen from './screens/RealloginscreenScreen';
import RealnotationcoursScreen from './screens/RealnotationcoursScreen';
import RealvideocomponentScreen from './screens/RealvideocomponentScreen';
import UpdatePasswordScreen from './screens/UpdatePasswordScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="RealWelcomescreenScreen"
        screenOptions={{
          headerTitleAllowFontScaling: true,
          headerTransparent: true,
          headerTitleStyle: theme.typography.custom30,
          headerBackTitle: ' ',
        }}
      >
        <Stack.Screen
          name="RealloginscreenScreen"
          component={RealloginscreenScreen}
          options={{ title: 'Real login screen' }}
        />
        <Stack.Screen
          name="RealhomeScreen"
          component={RealhomeScreen}
          options={{ title: 'Real home' }}
        />
        <Stack.Screen
          name="RealWelcomescreenScreen"
          component={RealWelcomescreenScreen}
          options={{ title: 'Real Welcome screen' }}
        />
        <Stack.Screen
          name="RealFormfnameScreen"
          component={RealFormfnameScreen}
          options={{ title: 'Real Form fname' }}
        />
        <Stack.Screen
          name="RealFormgenreScreen"
          component={RealFormgenreScreen}
          options={{ title: 'Real Form genre' }}
        />
        <Stack.Screen
          name="RealFormageScreen"
          component={RealFormageScreen}
          options={{ title: 'Real Form age' }}
        />
        <Stack.Screen
          name="RealintroinfoScreen"
          component={RealintroinfoScreen}
          options={{ title: 'Real intro info' }}
        />
        <Stack.Screen
          name="RealFormpoidsScreen"
          component={RealFormpoidsScreen}
          options={{ title: 'Real Form poids' }}
        />
        <Stack.Screen
          name="RealFormniveauScreen"
          component={RealFormniveauScreen}
          options={{ title: 'Real Form niveau' }}
        />
        <Stack.Screen
          name="RealFormobjectifScreen"
          component={RealFormobjectifScreen}
          options={{ title: 'Real Form objectif' }}
        />
        <Stack.Screen
          name="RealFormpreferenceScreen"
          component={RealFormpreferenceScreen}
          options={{ title: 'Real Form preference' }}
        />
        <Stack.Screen
          name="RealFormgenesScreen"
          component={RealFormgenesScreen}
          options={{ title: 'Real Form genes' }}
        />
        <Stack.Screen
          name="RealFormequipementScreen"
          component={RealFormequipementScreen}
          options={{ title: 'Real Form equipement' }}
        />
        <Stack.Screen
          name="RealformfrequencedureeScreen"
          component={RealformfrequencedureeScreen}
          options={{ title: 'Real form frequence/duree' }}
        />
        <Stack.Screen
          name="RealformallanswersScreen"
          component={RealformallanswersScreen}
          options={{ title: 'Real form all answers' }}
        />
        <Stack.Screen
          name="RealformvalidateloadingScreen"
          component={RealformvalidateloadingScreen}
          options={{ title: 'Real form validate loading' }}
        />
        <Stack.Screen
          name="ParametresScreen"
          component={ParametresScreen}
          options={{ title: 'Parametres' }}
        />
        <Stack.Screen
          name="ProfilScreen"
          component={ProfilScreen}
          options={{ title: 'Profil' }}
        />
        <Stack.Screen
          name="ChangefnamesettingsScreen"
          component={ChangefnamesettingsScreen}
          options={{ title: 'Change fname settings' }}
        />
        <Stack.Screen
          name="ChangegenresettingsScreen"
          component={ChangegenresettingsScreen}
          options={{ title: 'Change genre settings' }}
        />
        <Stack.Screen
          name="ChangeagesettingsScreen"
          component={ChangeagesettingsScreen}
          options={{ title: 'Change age settings' }}
        />
        <Stack.Screen
          name="ChangepoidssettingsScreen"
          component={ChangepoidssettingsScreen}
          options={{ title: 'Change poids settings' }}
        />
        <Stack.Screen
          name="ChangeniveausettingsScreen"
          component={ChangeniveausettingsScreen}
          options={{ title: 'Change niveau settings' }}
        />
        <Stack.Screen
          name="ChangeobjectifsettingsScreen"
          component={ChangeobjectifsettingsScreen}
          options={{ title: 'Change objectif settings' }}
        />
        <Stack.Screen
          name="ChangepreferencesettingsScreen"
          component={ChangepreferencesettingsScreen}
          options={{ title: 'Change preference settings' }}
        />
        <Stack.Screen
          name="ChangegenessettingsScreen"
          component={ChangegenessettingsScreen}
          options={{ title: 'Change genes settings' }}
        />
        <Stack.Screen
          name="ChangeequipementsettingsScreen"
          component={ChangeequipementsettingsScreen}
          options={{ title: 'Change equipement settings' }}
        />
        <Stack.Screen
          name="ChangefrequencedureesettingsScreen"
          component={ChangefrequencedureesettingsScreen}
          options={{ title: 'Change frequence/duree settings' }}
        />
        <Stack.Screen
          name="RealcategorypageScreen"
          component={RealcategorypageScreen}
          options={{ title: 'Real category page' }}
        />
        <Stack.Screen
          name="REALaccountcreationScreen"
          component={REALaccountcreationScreen}
          options={{ title: 'REAL account creation' }}
        />
        <Stack.Screen
          name="RealcoursedetailsScreen"
          component={RealcoursedetailsScreen}
          options={{ title: 'Real course details' }}
        />
        <Stack.Screen
          name="RealnotationcoursScreen"
          component={RealnotationcoursScreen}
          options={{ title: 'Real notation cours' }}
        />
        <Stack.Screen
          name="RealvideocomponentScreen"
          component={RealvideocomponentScreen}
          options={{ title: 'Real video component' }}
        />
        <Stack.Screen
          name="FilterpageScreen"
          component={FilterpageScreen}
          options={{ title: 'Filter page' }}
        />
        <Stack.Screen
          name="ForgotpasswordScreen"
          component={ForgotpasswordScreen}
          options={{ title: 'forgot password' }}
        />
        <Stack.Screen
          name="UpdatePasswordScreen"
          component={UpdatePasswordScreen}
          options={{ title: 'UpdatePassword' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
