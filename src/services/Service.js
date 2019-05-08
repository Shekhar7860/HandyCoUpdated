import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../styles/styles';
const userId = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';
export default class Service {
  
  constructor(){
   
  }


saveUserData = async (key, value) => {
  //console.log(key ,value);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

login = (mobile, password, token, deviceType, deviceId) => 
{
  console.log(constants.apiUrl + 'user_signin', 'aPIURL')
  var data = { 
    email: mobile,
    password: password,
    "device_id":deviceId,
    "device_type":deviceType,
    "registeredId":token
  }

   console.log(data, 'data')
 return  fetch(constants.apiUrl + 'user_signin',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
  response.json())
   .catch((error) => {
     console.error(error);
   });
}

forgotPassword = (emailId) => 
{
  var data = { 
    email: emailId
  }

   console.log(data, 'data')
 return  fetch(constants.apiUrl + 'user_forgotPassword',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
  response.json())
   .catch((error) => {
     console.error(error);
   });
}


getUserData = async (key) => {
  
    var data = await AsyncStorage.getItem(key) || 'none';
    // console.log("check data ")
  
  return data;
}


validateEmail = (email) => {
  // console.log(email);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
   
    return (true)
  }
    
    return (false)
};

 
  
  
}