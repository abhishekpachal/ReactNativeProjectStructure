import {createStackNavigator} from 'react-navigation-stack';

import LandingScreen from '_scenes/landing';

const LandingNavConfig = {
  initialRouteName: 'Landing',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Landing: LandingScreen,
};

const LandingNavigator = createStackNavigator(RouteConfigs, LandingNavConfig);

export default LandingNavigator;
