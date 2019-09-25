
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import AddResScreen from '../screens/AddRes';
import HotProspekScreen from '../screens/HotProspek';
import DataResScreen from '../screens/DataRes';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  AddRespon : AddResScreen,
  HotProspek : HotProspekScreen,
  DataRes :DataResScreen,
  About: AboutScreen,

});

export default createAppContainer(TabNavigator);