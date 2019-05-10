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
      postalCodes : [],
      imgsource : constants.rightIcon,
      list : false
    }
    service = new Service();
    
  }

  componentDidMount() {

    service.getUserData('user').then((keyValue) => {
        console.log("local", keyValue);
        var parsedData = JSON.parse(keyValue);
        console.log("json", parsedData);
        service.getPostalCode(parsedData.user_reference).then((res) => {
            console.log("checkres", res);
            this.setState({postalCodes : res.data})
          })
        }, (error) => {
        console.log(error) //Display error
        });
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
      {/* {this.state.list ? <View style={styles.middleRow }><Text style={styles.checkBoxTextWidth}>This is a text </Text><View style={styles.emptySwitch2}></View><CheckBox
    style={styles.checkboxWidth2}
    onClick={()=>{
      this.setState({
          isChecked8:!this.state.isChecked8
      })
    }}
    isChecked={this.state.isChecked8}
/></View>: null } */}
{this.state.list ? <View>
        <List
            dataArray={this.state.postalCodes}
            renderRow={data =>
              <ListItem>
                <Left>
                  <Text>
                    {data.full_address}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
      </View> : null }
      </Content>
      
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
    );
}


}