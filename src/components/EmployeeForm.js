import React,{Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {View, Text } from 'react-native'
import {INPUT} from './common';

class EMPLOYEEFORM extends Component {
  onChangeName(value){
    this.props.employeeUpdate({prop:'name',value});
  }
  onChangePhone(value){
     this.props.employeeUpdate({prop:'phone',value});
  }
  onChangeShift(value){
      this.props.employeeUpdate({prop:'shift',value});
  }
    render() {
        return (
            <View>
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

export default connect(mapStateToProps,employeeUpdate)(EMPLOYEEFORM)
