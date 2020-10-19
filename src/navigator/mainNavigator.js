import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4150720Navigator from '../features/BlankScreen4150720/navigator';
import BlankScreen3150053Navigator from '../features/BlankScreen3150053/navigator';
import BlankScreen2150051Navigator from '../features/BlankScreen2150051/navigator';
import Dashboard22150049Navigator from '../features/Dashboard22150049/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4150720: { screen: BlankScreen4150720Navigator },
BlankScreen3150053: { screen: BlankScreen3150053Navigator },
BlankScreen2150051: { screen: BlankScreen2150051Navigator },
Dashboard22150049: { screen: Dashboard22150049Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
