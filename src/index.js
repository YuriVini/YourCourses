import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import PopUpNavigation from './PopUpNavigation';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <PopUpNavigation />
      </NavigationContainer>
    </>
    );
  }