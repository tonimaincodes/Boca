// @flow
import { Navigation } from 'react-native-navigation';

import HomeScreen from './home/HomeScreen';
import LoginModal from './login/LoginModal';
import { SCREENS } from '../constants';

import type { Element } from 'react';

export function registerScreens(reduxStore: any, ReduxProvider: Element<*>) {
  Navigation.registerComponentWithRedux(
    SCREENS.HOME_SCREEN,
    () => HomeScreen,
    ReduxProvider,
    reduxStore
  );
  Navigation.registerComponentWithRedux(
    SCREENS.LOGIN_MODAL,
    () => LoginModal,
    ReduxProvider,
    reduxStore
  );
}
