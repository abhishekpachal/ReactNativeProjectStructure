import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LandingNavigator from './land-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Land: LandingNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Land',
  },
);

export default createAppContainer(RootNavigator);
