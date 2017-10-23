import React from 'react';
import {View, Text, Modal } from 'react-native';
import {CARD} from './Card'
import {AD_BUTTON} from './AD_Button'

const MODAL = ({children,onAccept,onDecline,visible}) =>  {
        const {modalStyle,textStyle,cardStyle} = styles;
        return (
              <Modal
              visible={visible}
              transparent
              animationType='slide'
              onRequestClose={()=> {}}
              >
                  <View style={modalStyle}>
                    <CARD
                    style={cardStyle}
                    >
                    <Text style={textStyle}>{children}</Text>
                    <AD_BUTTON  title='yes'
                    onPress={onAccept}
                    />
                    <AD_BUTTON  title='no'
                    onPress={onDecline}
                    />
                    </CARD>
                  </View>
              </Modal>
        );
}

const styles = {
  modalStyle:{
    backgroundColor:'rgba(0,0,0,0.75)',
    position:'relative',
    flex:1,
    justifyContent:'center'
  },
  textStyle:{
    flex:1,
    fontSize:18,
    textAlign:'center',
    lineHeight:40
  },
  cardStyle:{
    justifyContent:'center'
  }
}

export  {MODAL}
