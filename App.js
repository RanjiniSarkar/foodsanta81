import React from 'react';
import {View,Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './components/AppTabNavigator';

import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from './screens/SettingScreen'
import CustomSideBarMenu from './components/CustomSideBarMenu';




export default function App (){

    return(

      <AppContainer/>
      
     
      
    )
    
  }
  export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
      screen:SettingScreen
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
AppDrawerNavigator:AppDrawerNavigator
  
})


const AppContainer = createAppContainer(switchNavigator)