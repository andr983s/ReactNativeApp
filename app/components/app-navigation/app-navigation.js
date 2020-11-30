import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import {MainScreen} from '../../screens/main';
import PreviewScreen from '../../screens/preview';


const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Preview: PreviewScreen
},
{
    initialRouteName: 'Main'
})


export const AppNavigation = createAppContainer(PostNavigator);