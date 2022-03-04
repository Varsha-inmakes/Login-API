/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Screens/Login'
import Navigation from './Screens/Navigation'
import Password from './Screens/Password'

AppRegistry.registerComponent(appName, () => Login);
