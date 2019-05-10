import React, {Component} from 'react';

import {Platform, Text, View, TextInput, Alert, Switch,Image, TouchableHighlight, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import PropTypes from 'prop-types';
import CustomToast from './CustomToast';
import Moment from 'moment';
import Loader from './Loader';
import CheckBox from 'react-native-check-box'
import DateTimePicker from 'react-native-modal-datetime-picker'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";


 


export default class SetAvailability extends Component {

  constructor(props){
    super(props);
    service = new Service();
    constants = new Constants();
    this.state = { selectedItems: '', loading : false, days : [], isChecked : true,isChecked2 : true,isChecked3 : true,isChecked4 : true, isChecked5 : true, isChecked6 : true, isChecked7 : false, isSwitchOn : true, isSwitchOn2 : true, isSwitchOn3 : true, isSwitchOn4 : true, morningStartTime : '08:00 AM', morningEndTime: '12:00 PM', noonStartTime : '12:00 PM', noonEndTime: '04:00 PM', eveningStartTime : '04:00 AM', eveningEndTime: '7:00 PM', nightStartTime : '08:00 PM', nightEndTime: '12:00 AM'}
    
  }

  componentDidMount = () => {
    this.state.days.push('sat')
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({morningStartTime : newTime})
    this._hideDateTimePicker();
  };

  _showDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: true });

  _hideDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: false });

  _handleDatePicked2 = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({morningEndTime : newTime})
    this._hideDateTimePicker2();
  };

  _showDateTimePicker3 = () => this.setState({ isDateTimePickerVisible3: true });

  _hideDateTimePicker3 = () => this.setState({ isDateTimePickerVisible3: false });

  _handleDatePicked3 = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({noonStartTime : newTime})
    this._hideDateTimePicker();
  };

  _showDateTimePicker4 = () => this.setState({ isDateTimePickerVisible4: true });

  _hideDateTimePicker4 = () => this.setState({ isDateTimePickerVisible4: false });

  _handleDatePicked4 = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({noonEndTime : newTime})
    this._hideDateTimePicker();
  };

  _showDateTimePicker5 = () => this.setState({ isDateTimePickerVisible5: true });

  _hideDateTimePicker5 = () => this.setState({ isDateTimePickerVisible5: false });

  _handleDatePicked5 = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({eveningStartTime : newTime})
    this._hideDateTimePicker();
  };
  _showDateTimePicker6 = () => this.setState({ isDateTimePickerVisible6: true });

  _hideDateTimePicker6 = () => this.setState({ isDateTimePickerVisible6: false });

  _handleDatePicked6 = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({eveningEndTime : newTime})
    this._hideDateTimePicker();
  };
  _showDateTimePicker7 = () => this.setState({ isDateTimePickerVisible7: true });

  _hideDateTimePicker7 = () => this.setState({ isDateTimePickerVisible7: false });

  _handleDatePicked7 = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({nightStartTime : newTime})
    this._hideDateTimePicker();
  };

  _showDateTimePicker8 = () => this.setState({ isDateTimePickerVisible8: true });

  _hideDateTimePicker8 = () => this.setState({ isDateTimePickerVisible8: false });

  _handleDatePicked8 = (date) => {
    var newTime = Moment(date).format("hh:mm a");
    console.log('newTime', newTime)
    this.setState({nightEndTime : newTime})
    this._hideDateTimePicker();
  };


  submit = () =>
  {
    this.setState({loading : true})
    var morningStatus = 0;
    var noonStatus = 0;
    var eveningStatus = 0;
    var nightStatus = 0;
    console.log('days', this.state.days)
    console.log(this.state.isSwitchOn4, this.state.isSwitchOn3, this.state.isSwitchOn2, this.state.isSwitchOn)
   var commaArray =  this.state.days.join(", ");
   console.log(commaArray);
   if(this.state.isSwitchOn !== false )
   {
     morningStatus = 1
   }
   if(this.state.isSwitchOn1 !== false )
   {
     noonStatus = 1
   }
   if(this.state.isSwitchOn2 !== false )
   {
     eveningStatus = 1
   }
   if(this.state.isSwitchOn3 !== false )
   {
     nightStatus = 1
   }

   service.getUserData('user').then((keyValue) => {
    console.log("local", keyValue);
    var parsedData = JSON.parse(keyValue);
    console.log("json", parsedData);
    service.setAvailability(parsedData.user_reference, commaArray, this.state.morningStartTime, this.state.morningEndTime, this.state.noonStartTime, this.state.noonEndTime, this.state.eveningStartTime, this.state.eveningEndTime, this.state.nightStartTime, this.state.nightEndTime, morningStatus, noonStatus, eveningStatus, nightStatus, 1).then((res) => {
        console.log("checkres", res);
        if(res){
          this.setState({loading : false})
          Alert.alert(res.success_message);
          setTimeout (() => {
          this.props.navigation.navigate("Home")
        }, 1000)
        }
    
      })
    }, (error) => {
    console.log(error) //Display error
    });
  //   this.setState({loading : true})
  //   setTimeout (() =>    { this.setState({loading : false})
  //   setTimeout (() => { Alert.alert("Saved Successfully");
  //   this.props.navigation.navigate("Home")}, 1000)
  // }, 1000 )

}

  switchValue2 = (isSwitchOn) => {
    console.log('val', isSwitchOn);
    this.setState({isSwitchOn2 : isSwitchOn })
     }

  switchValue = (isSwitchOn) => {
 console.log('val', isSwitchOn);
 this.setState({isSwitchOn})
  }

  switchValue3 = (isSwitchOn) => {
    console.log('val', isSwitchOn);
    this.setState({isSwitchOn3 : isSwitchOn })
     }

     switchValue4 = (isSwitchOn) => {
      console.log('val', isSwitchOn);
      this.setState({isSwitchOn4 : isSwitchOn })
       }

  getSelectedItems = () => {
 
    if (selectedArrayOBJ.getArray().length == 0) {
      Alert.alert('No Items Selected!');
    }
    else {
      // console.log(selectedArrayOBJ.getArray().map(item => item.label).join());
      this.setState(() => {
        return {
          selectedItems: selectedArrayOBJ.getArray().map(item => item.value).join()
        }
      });
    }
  }
  signUp = () =>{
    this.setState(() => ({ cardheight:370}));
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({ passwordError: " Password is required."}));
    } else {
      this.setState(() => ({ passwordError: null}));
    }
    if (this.state.mobile.trim() === "") {
      this.setState(() => ({ mobileError: " Mobile Number is required."}));
    } else {
      this.setState(() => ({ mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === "") {
      this.setState(() => ({ confirmPasswordError: " Confirm Password is required."}));
    } else {
      this.setState(() => ({ confirmPasswordError: null}));
    }
    if(this.state.email && this.state.mobile && this.state.password && this.state.confirmPassword)
    {
      this.setState(() => ({ cardheight:300}));
    }

    if(this.state.email && this.state.password && this.state.mobile && this.state.confirmPassword && service.validateEmail(this.state.email))
    {
     this.setState ({ loading: true});
      setTimeout(() => 
      {this.setState({loading: false})
      this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
      this.props.navigation.navigate('Login')
       }, 3000)
      }
   }

   goToHome = () =>{
    this.props.navigation.navigate('Home')
   }

  render() {
    return (
    
      <Container style={styles.container}>
      <Header style={styles.headerBackGround}>
        <Left >
          <Button transparent>
          <TouchableOpacity onPress={() => this.goToHome()}>
          <Image source={constants.backicon } style={styles.icon} />
           </TouchableOpacity>
          </Button>
        </Left>
        <Body style={{ flex:3}}>
          <Title  style={styles.itemCenter}>Set Availability</Title>
        </Body>
        <Right>
          <Button
            hasText
            transparent
          >
          </Button>
        </Right>
      </Header>
      <Content>
        <View style={styles.viewBackground}>
        <Text style={styles.textViewAvailability}> Your Availability</Text>
        </View>
        <View style={styles.myRowCheckBox}>
        <CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
    
      if(this.state.isChecked == false)
      {
        this.setState({ isChecked : true})
        this.state.days.pop();
        console.log(this.state.days, 'days')
      }
      else
      {
        this.setState({ isChecked : false})
        this.state.days.push('sun')
        console.log(this.state.days, 'days')
      }
      console.log('isChecked', this.state.isChecked)
    }}
    isChecked={!this.state.isChecked}
/>    
<Text style={styles.textWidthCheckBox}>Sun</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      if(this.state.isChecked2 == false)
      {
        this.setState({ isChecked2 : true})
        this.state.days.pop();
        console.log(this.state.days, 'days')
      }
      else
      {
        this.setState({ isChecked2 : false})
        this.state.days.push('mon')
        console.log(this.state.days, 'days')
      }
      console.log('isChecked', this.state.isChecked2)
      console.log('isChecked', this.state.isChecked2)
    }}
    
    isChecked={!this.state.isChecked2}
/>    
<Text style={styles.textWidthCheckBox}>Mon</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
  style={styles.checkboxWidth}
    onClick={()=>{
      if(this.state.isChecked3 == false)
      {
        this.setState({ isChecked3 : true})
        this.state.days.pop();
        console.log(this.state.days, 'days')
      }
      else
      {
        this.setState({ isChecked3 : false})
        this.state.days.push('tue')
        console.log(this.state.days, 'days')
      }
      console.log('isChecked', this.state.isChecked3)
      console.log('isChecked', this.state.isChecked3)
    }}
    isChecked={!this.state.isChecked3}
/>    
<Text style={styles.textWidthCheckBox}>Tue</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      if(this.state.isChecked4 == false)
      {
        this.setState({ isChecked4 : true})
        this.state.days.pop();
        console.log(this.state.days, 'days')
      }
      else
      {
        this.setState({ isChecked4 : false})
        this.state.days.push('wed')
        console.log(this.state.days, 'days')
      }
      console.log('isChecked', this.state.isChecked4)
      console.log('isChecked', this.state.isChecked4)
    }}
    isChecked={!this.state.isChecked4}
/>    
<Text style={styles.textWidthCheckBox}>Wed</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      if(this.state.isChecked5 == false)
      {
        this.setState({ isChecked5 : true})
        this.state.days.pop();
        console.log(this.state.days, 'days')
      }
      else
      {
        this.setState({ isChecked5 : false})
        this.state.days.push('thur')
        console.log(this.state.days, 'days')
      }
      console.log('isChecked', this.state.isChecked5)
      console.log('isChecked', this.state.isChecked5)
    }}
    isChecked={!this.state.isChecked5}
/>    
<Text style={styles.textWidthCheckBox}>Thur</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      if(this.state.isChecked6 == false)
      {
        this.setState({ isChecked6 : true})
        this.state.days.pop();
        console.log(this.state.days, 'days')
      }
      else
      {
        this.setState({ isChecked6 : false})
        this.state.days.push('fri')
        console.log(this.state.days, 'days')
      }
      console.log('isChecked', this.state.isChecked6)
      console.log('isChecked', this.state.isChecked6)
    }}
    isChecked={!this.state.isChecked6}
/>    
<Text style={styles.textWidthCheckBox}>Fri</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      if(this.state.isChecked7 == false)
      {
        this.setState({ isChecked7 : true})
        this.state.days.pop();
        console.log(this.state.days, 'days')
      }
      else
      {
        this.setState({ isChecked7 : false})
        this.state.days.push('sat')
        console.log(this.state.days, 'days')
      }
      console.log('isChecked', this.state.isChecked7)
      console.log('isChecked', this.state.isChecked7)
    }}
    isChecked={!this.state.isChecked7}
/>    
<Text style={styles.textWidthCheckBox}>Sat</Text>
<View style={styles.emptyWidthCheck }></View>
</View>

<View style={styles.viewBackgroundMorning }>
        <View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> Morning Shift</Text>
        </View>
        <View style={styles.emptySwitch}></View>
        <View style={styles.switchWidth}>
        <Switch style={styles.switch}
                        onValueChange={ (isSwitchOn) => this.switchValue(isSwitchOn)}
                        value={this.state.isSwitchOn} 
                       
                         />
          </View>
        </View>
{this.state.isSwitchOn ? <View style={styles.middleRow}>
<View style={styles.emptySpace}></View>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin} onPress={this._showDateTimePicker}> {this.state.morningStartTime}</Text>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin} onPress={this._showDateTimePicker2}> {this.state.morningEndTime}</Text>
</View> : null }

<View style={styles.viewBackgroundAfternoon }>
<View style={styles.viewTextWidth}>
<Text style={styles.textViewAvailability}> AfterNoon Shift</Text>
</View>
<View style={styles.emptySwitch}></View>
<View style={styles.switchWidth}>
<Switch style={styles.switch}
                onValueChange={ (isSwitchOn) => this.switchValue2(isSwitchOn)}
                value={this.state.isSwitchOn2} 
                 />
  </View>
</View>
{ this.state.isSwitchOn2 ?  
<View style={styles.middleRow}>
  <View style={styles.emptySpace}></View>
  <View style={styles.emptySpace}></View>
  <Image  style={styles.imageClock} source= {constants.clockIcon} />
  <View style={styles.emptySpace}></View>
  <Text style={styles.textMargin} onPress={this._showDateTimePicker3}> {this.state.noonStartTime}</Text>
  <View style={styles.emptySpace}></View>
  <Image  style={styles.imageClock} source= {constants.clockIcon} />
  <View style={styles.emptySpace}></View>
  <Text style={styles.textMargin} onPress={this._showDateTimePicker4}> {this.state.noonEndTime}</Text>
</View> : null }



<View style={styles.viewBackgroundEvening }>
<View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> Evening Shift</Text>
        </View>
        <View style={styles.emptySwitch}></View>
        <View style={styles.switchWidth}>
        <Switch style={styles.switch}
                        onValueChange={ (isSwitchOn) => this.switchValue3(isSwitchOn)}
                        value={this.state.isSwitchOn3} 
                       
                         />
          </View>
        </View>
{this.state.isSwitchOn3 ? <View style={styles.middleRow}>
<View style={styles.emptySpace}></View>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin} onPress={this._showDateTimePicker5}> {this.state.eveningStartTime}</Text>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin} onPress={this._showDateTimePicker6}> {this.state.eveningEndTime}</Text>
</View> : null }

<View style={styles.viewBackgroundNight }>
<View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> Night Shift</Text>
        </View>
        <View style={styles.emptySwitch}></View>
        <View style={styles.switchWidth}>
        <Switch style={styles.switch}
                        onValueChange={ (isSwitchOn) => this.switchValue4(isSwitchOn)}
                        value={this.state.isSwitchOn4} 
                       
                         />
          </View>
        </View>
{this.state.isSwitchOn4 ? <View style={styles.middleRow}>
<View style={styles.emptySpace}></View>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin} onPress={this._showDateTimePicker7}> {this.state.nightStartTime}</Text>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin} onPress={this._showDateTimePicker8}> {this.state.nightEndTime}</Text>
</View> : null }

 <View style={styles.footerView2}>
      <Button block style={styles.commonButtonBackGround} onPress = { () => this.submit()}>
            <Text style={styles.resetText}>SAVE </Text>
            </Button>
      </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          minimumDate={new Date()}
          mode = {'time'}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible2}
          onConfirm={this._handleDatePicked2}
          onCancel={this._hideDateTimePicker2}
          minimumDate={new Date()}
          mode = {'time'}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible3}
          onConfirm={this._handleDatePicked3}
          onCancel={this._hideDateTimePicker3}
          minimumDate={new Date()}
          mode = {'time'}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible4}
          onConfirm={this._handleDatePicked4}
          onCancel={this._hideDateTimePicker4}
          minimumDate={new Date()}
          mode = {'time'}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible5}
          onConfirm={this._handleDatePicked5}
          onCancel={this._hideDateTimePicker5}
          minimumDate={new Date()}
          mode = {'time'}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible6}
          onConfirm={this._handleDatePicked6}
          onCancel={this._hideDateTimePicker6}
          minimumDate={new Date()}
          mode = {'time'}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible7}
          onConfirm={this._handleDatePicked7}
          onCancel={this._hideDateTimePicker7}
          minimumDate={new Date()}
          mode = {'time'}
        />
         <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible8}
          onConfirm={this._handleDatePicked8}
          onCancel={this._hideDateTimePicker8}
          minimumDate={new Date()}
          mode = {'time'}
        />
      </Content>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
      
    );
}


}
