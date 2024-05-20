import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {Children} from 'react';
import {COLORS} from '../../resources';

type Props = {
  children: React.ReactNode;
  notTranslucent?: boolean;
};

const BackgroundComponent = ({children, notTranslucent}: Props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BACKGROUND_COLOR}}>
      <StatusBar
        backgroundColor={!notTranslucent ? 'rgba(0, 0, 0 ,0)' : '#1B1A1C'}
        translucent={!notTranslucent}
      />
      {children}
    </SafeAreaView>
  );
};

export default BackgroundComponent;
