import React,{Component} from 'react';
import {ScrollView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {employeeFetch} from '../actions'
import { List, ListItem } from 'react-native-elements'
import {SPINNER} from './common'

class EMPLOYEELIST extends Component {
  constructor(props){
  	super(props);
  	this.state = {employeeLists:''};
    this.renderDom = this.renderDom.bind(this);
    this.renderHTML = this.renderHTML.bind(this);
    this.onListItemPress = this.onListItemPress.bind(this)
  }
    componentWillMount() {
      this.props.employeeFetch();
    }
    componentDidMount() {
      this.setState({employeeLists:this.props.employeeFirebase})
    }
    componentWillReceiveProps(nextProps) {
      if(this.props.employeeFirebase !== nextProps.employeeFirebase){
        this.setState({employeeLists:nextProps.employeeFirebase})
      }
    }
    onListItemPress(value){
      Actions.employeeEdit({employeeParm: value});
    }
    renderDom(){
      return this.state.employeeLists.map((value,index) => {
          return (
            <TouchableWithoutFeedback
            onPress={() => this.onListItemPress(value)}
            key={index}
            >
            <View>
            <ListItem
              key={index}
              title={value.name}
              subtitle={value.phone}
            />
            </View>
            </TouchableWithoutFeedback>
          )
        })
    }
    renderHTML(){
      if(typeof this.state.employeeLists  === 'string'
       ){
        return <Text>{this.state.employeeLists}</Text>
      }
      else if(this.state.employeeLists.length <= 0){
        return <SPINNER size='large' />
      }
      else{
        return(
          <List>
          {this.renderDom()}
          </List>
        )
      }
    }

    render() {
        return (
            <ScrollView>
              {this.renderHTML()}
            </ScrollView>
        );
    }
}

function mapStateToProps({employeeFirebase}) {
  return{employeeFirebase}
}

export default connect(mapStateToProps,{employeeFetch})(EMPLOYEELIST);
