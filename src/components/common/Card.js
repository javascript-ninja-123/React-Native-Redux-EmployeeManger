import React from 'react';
import { View , Text } from 'react-native';
import { Card } from 'react-native-elements'
import {BUTTON} from './Button';


const  CARD = ({ title, image, imageStyle, textTitle, subTitle, children,style }) => {
  return (
    <View>
      <Card
        title={title}
        containerStyle={style}
        >
        {children}
      </Card>
    </View>
  );
};


export  {CARD};
