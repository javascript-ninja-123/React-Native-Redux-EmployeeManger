import React,{Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeeUpdate,employeeCreate} from '../actions';
import { CARD, AD_BUTTON, INPUT } from './common';
import EmployeeForm from './EmployeeForm';

 class EMPLOYEECREATE extends Component {
   componentWillMount() {
     _.forEach({name:'',phone:'',shift:''}, (value,prop) => {
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
   onButtonPress(){
     const {name,phone,shift} = this.props;
     this.props.employeeCreate({name,phone,shift});
   }
    render() {
        console.log(this.props.name)
        return (
            <View>
              <CARD
              title='Create a card'
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
                title='create'
                style={{backgroundColor:'skyblue'}}
                onPress={this.onButtonPress.bind(this)}
                />
              </CARD>
            </View>
        );
    }
}

const styles = {
  pickerStyle: {
    fontSize:18,
    paddingLeft:20
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

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EMPLOYEECREATE);




// <Text style={styles.pickerStyle}>Shift</Text>
// <Picker
//   style={{flex:1}}
//   selectedValue={this.props.shift}
//   onValueChange={value => this.props.employeeUpdate({prop:'shift',value})}
// >
//   <Picker.Item label='Monday' value='Monday'/>
//   <Picker.Item label='Tuesday' value='Tuesday'/>
//   <Picker.Item label='Wednesday' value='Wednesday'/>
//   <Picker.Item label='Thursday' value='Thursday'/>
//   <Picker.Item label='Friday' value='Friday'/>
//   <Picker.Item label='Saturday' value='Saturday'/>
//   <Picker.Item label='Sunday' value='Sunday'/>
// </Picker>
