import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {CARD, INPUT, AD_BUTTON, SPINNER } from './common';


class LOGINFORM extends Component {
    constructor(props){
    	super(props);
      this.renderButton = this.renderButton.bind(this)
    }
    onEmailChange(email){
      this.props.emailChanged(email);
    }
    onPasswordChange(password){
      this.props.passwordChanged(password);
    }
    onLoginUser(){
      const {email,password} = this.props;
      loginInfo = {
        email,
        password
      }
      this.props.loginUser(loginInfo)
    }
    renderButton(){
      if(this.props.isLoading){
        return <SPINNER size='large' style={{marginTop:50}}/>
      }
      return(
        <AD_BUTTON
        style={{backgroundColor:'skyblue'}}
        title='submit'
        onPress={this.onLoginUser.bind(this)}
        />
      )
    }
    render() {
        return (
            <View>
              <CARD
              title='Log In'
              >
              <INPUT
              label='Email address'
              placeholder='you@gmail.com'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              error={this.props.email_error}
               />
               <INPUT
               label='Password'
               placeholder='******'
               secureTextEntry
               onChangeText={this.onPasswordChange.bind(this)}
               value={this.props.password}
               error={this.props.password_error}
                />
                <Text style={{color:'red'}}>{this.props.error}</Text>
                {this.renderButton()}
              </CARD>
            </View>
        );
    }
}

function mapStateToProps({auth}) {
  const {email, password, error,email_error,password_error,isLoading} = auth;
  return{
    email,
    password,
    email_error,
    password_error,
    error,
    isLoading
  }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LOGINFORM)
