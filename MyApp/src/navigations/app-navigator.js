import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '_scenes/home';
import ProfileScreen from '_scenes/profile';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
