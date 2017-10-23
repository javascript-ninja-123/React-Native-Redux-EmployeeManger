import React from 'react';
import {View} from 'react-native'
import { Button } from 'react-native-elements'

const AD_BUTTON = ({title,size,style,onPress}) => {
  return (
    <View>
    <Button
      onPress={onPress}
      buttonStyle={style}
      large={size}
      title={title} />
    </View>
  );
};



export { AD_BUTTON }
