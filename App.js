import React from 'react';
import {View,Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './components/AppTabNavigator';
import CustomSideBarMenu from './components/CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';




export default function App (){

    return(

      <AppContainer/>
      
     
      
    )
    
  }
  export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
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
AppDrawerNavigator:{screen:AppDrawerNavigator},
  
})


const AppContainer = createAppContainer(switchNavigator)