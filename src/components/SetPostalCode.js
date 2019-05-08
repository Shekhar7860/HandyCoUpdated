import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import CustomToast from './CustomToast';
import Loader from './Loader';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  List,
  ListItem,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import CheckBox from 'react-native-check-box'

const datas = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho"
];

export default class SetPostalCode extends Component {

  constructor(props){
    super(props);
    constants = new Constants();
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300,
      imgsource : constants.rightIcon,
      list : false
    }
    service = new Service();
    
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

  
   // alert(this.state.password)
   }
   goBack = () =>{
    this.props.navigation.goBack();
   }

   showHideList = () => {
  if(this.state.list == false) {
  this.setState({imgsource : constants.downIcon })
  this.setState({list : true })
  }
  else {
    this.setState({imgsource : constants.rightIcon })
    this.setState({list : false })
  }
   }
  render() {
    return (
    
      <Container style={styles.container}>
      <Header style={styles.headerBackGround}>
        <Left >
          <Button transparent>
          <TouchableOpacity onPress={() => this.goBack()}>
          <Image source={constants.backicon } style={styles.icon} />
           </TouchableOpacity>
          </Button>
        </Left>
        <Body style={{ flex:3}}>
          <Title   style={styles.itemCenter}>Set Postal</Title>
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
         <TouchableOpacity style={styles.postalView}>
          <Text style={styles.postalPageText}> List Of Postal Codes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageTextRow} onPress = { () => this.showHideList()}>
        <View style={styles.emptySpace}>
        </View>
        <View style={styles.firstText}>
        <Text style={styles.listTextFontSizeGUI}>GUI District</Text>
      </View>
      <View style = {styles.emptyPostalView}></View>
      <Image style={styles.arrowImage} source = {this.state.imgsource} />
      </TouchableOpacity>
      <View style={styles.line2}>
      </View>
      {this.state.list ? <View style={styles.middleRow }><Text style={styles.checkBoxTextWidth}>This is a text </Text><View style={styles.emptySwitch2}></View><CheckBox
    style={styles.checkboxWidth2}
    onClick={()=>{
      this.setState({
          isChecked8:!this.state.isChecked8
      })
    }}
    isChecked={this.state.isChecked8}
/></View>: null }
      </Content>
      
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
    );
}


}