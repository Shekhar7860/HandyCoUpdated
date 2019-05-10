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

getBookingsToday = (userId, page, status) => 
{
  var data = { 
    userRef: userId,
    page : page,
    status : status
  }

   console.log(data, 'data')
 return  fetch(constants.apiUrl + 'getExpertBookings',
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

getBookingsUpcoming = (userId, page, status) => 
{
  var data = { 
    userRef: userId,
    page : page,
    status : status
  }

   console.log(data, 'data')
 return  fetch(constants.apiUrl + 'getExpertBookings',
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

setAvailability = (userId, sDays, mTime, mTime2, nTime, nTime2, eTime, eTime2, niTime, niTime2, mS, nS, eS, niS, status ) => {
  var data = {
    userRef: userId,
    days: sDays,
    startMorningTime: mTime,
    endMorningTime: mTime2,
    startNoonTime: nTime,
    endNoonTime: nTime2,
    startEveningTime:  eTime,
    endEveningTime: eTime2,
    startNightTime: niTime,
    endNightTime: niTime2,
    morningStatus: mS,
    noonStatus:  nS,
    eveningStatus:  eS,
    nightStatus:  niS,
    status: status
    }

   console.log(data, 'data')
 return  fetch(constants.apiUrl + 'user_setAvailability',
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


getPostalCode = (userId) => 
{
  var data = { 
    user_reference: userId
  }

   console.log(data, 'res')
 return  fetch(constants.apiUrl + 'PostCode',
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

getserviceTypes = (userId) => 
{
  var data = { 
    user_reference: userId
  }

   console.log(data, 'data')
 return  fetch(constants.apiUrl + 'getServiceTypes',
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