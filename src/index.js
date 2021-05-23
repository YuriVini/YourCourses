import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import PopUpNavigation from './PopUpNavigation';

//LEMBRAR DE TIRAR PORRA
import Payment from './screens/Payment';


export default function App() {
  return (
    <>
      <NavigationContainer>
        <PopUpNavigation />
      </NavigationContainer>
    </>
    );
  }