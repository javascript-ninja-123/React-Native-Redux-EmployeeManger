import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { CARD, AD_BUTTON, INPUT, MODAL } from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeUpdateFirebase,employeeDeleteFirebase } from '../actions'


class EMPLOYEEEDIT extends Component {
  constructor(props){
  	super(props);
  	this.state = {showModal:false};
  }
    componentWillMount() {
      _.forEach(this.props.employeeParm, (value,prop) => {
        this.props.employeeUpdate({prop, value});
      })
    }

    onChangeName(value){
      this.props.employeeUpdate({prop:'name',value});
    }
    onChangePhone(value){
       this.props.employeeUpdate({prop:'phone',value});
    }
    onChangeShift(value){
        this.props.employeeUpdate({prop:'shift',value});
    }
    onEditPress(){
      const {name,phone,shift} = this.props;
      const {id} = this.props.employeeParm;

          this.props.employeeUpdateFirebase({name,phone,shift,id})

    }
    onDelete(){
      this.setState({showModal:!this.state.showModal})
    }
    onText(){
      const {phone,shift} = this.props;
      Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }
    onAccept(){
      const {id} = this.props.employeeParm;
      this.props.employeeDeleteFirebase(id);
    }
    onDecline(){
      this.setState({showModal:false})
    }
    render() {
        return (
            <View>
              <CARD
              title='edit a card'
              >
                  <INPUT
                  label='Name'
                  placeholder='Jane Doe'
                  onChangeText={this.onChangeName.bind(this)}
                  value={this.props.name}
                  />
                  <INPUT
                  label='Phone'
                  placeholder='540-979-4087'
                  onChangeText={this.onChangePhone.bind(this)}
                  value={this.props.phone}
                  />
                  <INPUT
                  label='Shift'
                  placeholder='Monday'
                  onChangeText={this.onChangeShift.bind(this)}
                  value={this.props.shift}
                  />
                <AD_BUTTON
                title='Save Changes'
                style={{backgroundColor:'skyblue'}}
                onPress={this.onEditPress.bind(this)}
                />
                <AD_BUTTON
                style={{marginTop:20}}
                title='text Schedule'
                style={{backgroundColor:'skyblue'}}
                onPress={this.onText.bind(this)}
                />
                <AD_BUTTON
                style={{marginTop:20}}
                title='Fire'
                style={{backgroundColor:'skyblue'}}
                onPress={this.onDelete.bind(this)}
                />
                <MODAL
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                  Are you sure you want to delete this?
                </MODAL>
              </CARD>
            </View>
        );
    }
}

function mapStateToProps({employee}) {
  const {name,phone,shift} = employee;
  return{
    name,
    phone,
    shift
  }
}

export default connect(mapStateToProps,{employeeUpdate,employeeUpdateFirebase,employeeDeleteFirebase})(EMPLOYEEEDIT);
