import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import PopUpScreen from './screens/PopUp';
import YourCoursesScreen from './screens/YourCourses';
import PaymentScreen from './screens/Payment';


const stackRoutes = createStackNavigator();

const icons = {
    MoreCourses: {
        lib: Feather,
        name: 'plus-square',
    },
    YourCourses: {
        lib: MaterialCommunityIcons,
        name: 'cards',
    },
    Inbox: {
        lib: MaterialCommunityIcons,
        name: 'inbox',
    },
 };
 
function Navigation() {
    const Tab = createBottomTabNavigator();
     return(
 
         <Tab.Navigator
         initialRouteName="YourCourses"
         screenOptions={({ route }) => ({
             tabBarIcon: ({ color, size }) => {
                 const { lib: Icon, name } = icons[route.name];
                 return <Icon name={name} size={size} color={color}/>;
             },
         })}
 
         tabBarOptions={{
             style:{
                 height: 60,
                 width: '100%',
                 backgroundColor: '#131418',
                 borderBottomColor: 'rgba(255, 255, 255, 0.2)',
                 
             },
             activeTintColor: '#fff',
             inactiveTintColor: '#92929c',
         }}
         >   
             
 
             <Tab.Screen 
             name="MoreCourses" 
             component={YourCoursesScreen}
             options={{
                 title: 'More Courses',
             }}
             />
             <Tab.Screen 
             name="YourCourses" 
             component={YourCoursesScreen}
             options={{
                 title: 'Courses',
             }}
             />
             <Tab.Screen 
             name="Inbox" 
             component={YourCoursesScreen}
             options={{
                 title: 'Inbox',
             }}
             />
             
         </Tab.Navigator>
 
     );
     
 }
 
 
export default function PopUpNavigation() {
    return (

        <stackRoutes.Navigator
            headerMode="none"
        >
            <stackRoutes.Screen name="PopUp" component={PopUpScreen} />
            <stackRoutes.Screen name="Courses" component={Navigation} />
            <stackRoutes.Screen name="Payment" component={PaymentScreen} />
        </stackRoutes.Navigator>

    );
}