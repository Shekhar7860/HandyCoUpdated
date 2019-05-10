// global styles 
import {colors, fonts, padding, dimensions, align} from './base.js'
import {StyleSheet, Platform} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth,
    flex:1
  },
  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary
  },
  headerBackGround :{
   backgroundColor : colors.themeColor
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
  signUpFont: {
    color:colors.red,
    fontSize:padding.ms
  },
  container: {
    flex: 1,
    resizeMode: 'cover'
  },
  loginText: {
    color:colors.red,
    padding:padding.sm,
    width:42
    },
    alignrow:{
      flexDirection:'row',
      flex:1,  
    },
    col:{
      flexDirection:'row',
       flexWrap:'wrap'
    },
    cardContainer:{
     width:'90%',
     marginTop: Platform.OS === 'ios' ? 20 : 0,
     padding:padding.sm,
     height:225,
     
    }, 
    messageBox:{
      width:'90%',
      paddingTop:5,
      alignItems:align.center,
      height:240
  },
  messageBoxTitleText:{
      fontWeight:'bold',
      color:colors.white,
      textAlign:align.center,
      fontSize:20,
      marginBottom:padding.sm
  },
  toolbar:{
    paddingTop:20,
    paddingBottom:padding.sm,
    flexDirection:'row'
     //Step 1
},
toolbarButton:{
    width: 50,            //Step 2
    color:colors.white,
    textAlign:align.center
},
toolbarTitle:{
    color:colors.white,
    textAlign:align.center,
    fontWeight:'bold',
    flex:1                //Step 3
 },
  messageBoxBodyText:{
      color:colors.white,
      fontSize:16
  },
  textContainer:{
    paddingTop:15,
    width:'95%',
    alignItems:'flex-end',
  },
  imgContainer:{
    padding:padding.sm,
    width:'90%',
    alignItems:'flex-start',
  },
  topText:{
    color:colors.white,
    textAlign:'left',
    fontSize:20,
    fontWeight:'bold'
  },
  splashLoading:{
    flex:1,
  justifyContent:align.center
  },
  imageContainer:{
    height:'50%',
    paddingTop:5,
    alignItems:align.center,
    justifyContent:align.center
  },
  lowerTextContainer : {
    height:'50%'
  },
  imageWidth:{
    width:280,
    height:65,
    justifyContent : align.center,
    alignSelf :'center'
  },
  centerAlign :{
   alignItems:align.center,
   paddingTop:70,
  },
  ContentLogin :{
    alignItems:align.center,
    height: '50%',
    backgroundColor : colors.themeColor
   },
  loginText:{
    color:colors.red,
  },
  bottomSpace : {
    flexDirection : 'row', 
    marginTop : -50
  },
  textBorder:{
    borderBottomColor: colors.red,
    borderBottomWidth: 1
  },
  borderWidth : {
    paddingTop:2,
    width:42
  },
  rowMargin : {
    flex:1,
     marginTop:30
  },
  rowMargin2 : {
   
  },
  itemCenter : {
    alignSelf : 'center',
    color:'white'
  },
  borderWidthSignUp : {
    paddingTop:2,
    width:50
  },
  borderWidthForgot : {
    paddingTop:2,
    width:127
  },
  textInputContainer:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  textInputContainer2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop:padding.sm
  },
  iconWidth:{
    width:30,
    height:30
  },
  float:{
    flex: 1, 
    backgroundColor: '#f5fcff'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: align.center,
    alignItems: align.center,
    backgroundColor: colors.white,
},
searchIcon: {
    padding: padding.sm,
},
selectedTab1 :{
  width:'40%',
  borderBottomColor:"#34495e",
 borderBottomWidth:4
},
Tab1 :{
  width:'40%',
  
},
Tab2 :{
  width:'30%'
},
Tab3 :{
  width:'40%'
},
selectedTab3 :{
  width:'40%',
  borderBottomColor:"#34495e",
 borderBottomWidth:4
},
empty:{
  width:'5%'
},
textBoxFont : {
fontSize :20,
color : colors.white,
width:'100%'
},
tabs:{
  borderTopColor:colors.themeColor,
 borderTopWidth:1,
  flexDirection:'row',
   color :'white',
  backgroundColor :colors.themeColor,
  height:45
},
textBoxFontForgot : {
  fontSize :20,
  width:'100%'
  },
input: {
    flex: 1,
    paddingTop: padding.sm,
    paddingRight: padding.sm,
    paddingBottom: padding.sm,
    paddingLeft: 0,
    backgroundColor: colors.white,
    color: '#424242',
},
icon:{
  width:20,
  height:20
},

myRow :{
  flexDirection : 'row',
  flex:1,
  width :'100%'
},
myRowCheckBox :{
  flexDirection : 'row',
  marginTop:5,
  width :'95%',
  alignSelf : 'center'
},
borderList :{
  flexDirection : 'row',
  borderTopWidth:1,
  borderBottomWidth:1,
  borderTopColor:'#95a5a6',
  borderBottomColor:'#95a5a6',
  height :20
},
viewBackground : {
backgroundColor : '#95a5a6',
marginTop:5
},
middleRow : {
  flexDirection : 'row'
},

emptySwitch : {
  width : '40%'
},
emptySwitch2 : {
  width : '50%'
},
switchWidth : {
  width : '20%'
},
viewBackgroundMorning : {
  backgroundColor : '#95a5a6',
  marginTop:5,
  flexDirection :'row'
  },
  viewBackgroundAfternoonSlots : {
    backgroundColor : '#95a5a6',
    marginTop:40,
    flexDirection :'row'
    },
  viewBackgroundAfternoon : {
    backgroundColor : '#95a5a6',
    marginTop:25,
    flexDirection :'row'
    },
    bookingContent : {
      alignItems : 'center', marginTop : 20
    },
    bookingText : {
     fontSize : 21,
    },
    line : {
     width : '70%',
     alignSelf : 'center',
     borderBottomWidth : 2,
     marginTop:10
    },
    line2 : {
      width : '100%',
      alignSelf : 'center',
      borderBottomWidth : 1,
      marginTop:10
     },
  bold : {
    fontWeight : 'bold'
  },
  buttonemptyWidth :{
    width : '20%'
  },
  buttonInRow : {
    marginTop:15,
    flexDirection : 'row'
  },
  confirmButton : {
  width : '25%'
  },
  cancelButton : {
    width : '25%'
  },

  bookingButton : {
    alignSelf : 'center',
   marginTop:10,
   width : '80%'
  },
    viewBackgroundEvening : {
      backgroundColor : '#95a5a6',
      marginTop:25,
      flexDirection :'row'
      },
      viewBackgroundNight : {
        backgroundColor : '#95a5a6',
        marginTop:25,
        flexDirection :'row'
        },
textViewAvailability : {
  margin :5,
  fontSize :17
},
viewTextWidth  : {
  width : '40%'
},
emptySpace : {
  width: '5%'
},
imageClock : {
  marginTop : 10,
  width:25,
  height:25
},
imageClockBorder : {
  width:25,
  height:25
},
settingView : {
  backgroundColor : '#95a5a6',
  margin : 5,
height :50,
justifyContent : 'center',
alignItems : 'center'
},
settingPageText : {
fontSize : 20,
color : colors.white
}, 
postalView : {
  backgroundColor : colors.white,
height :40,
justifyContent : 'center',
alignItems : 'center',
borderBottomWidth :1
},
listTextFontSizeGUI : {
fontSize : 20
},
imageTextRow : {
  marginTop : 10, 
flexDirection : 'row'
},
postalPageText : {
fontSize : 20
}, 
firstText : {
width : '30%'
},
arrowImage : {
width :30,
height : 30
},
emptyPostalView : {
  width : '50%'
},
textMargin : {
  marginTop : 5,
  fontSize : 15
},
textMarginBorder : {
  width : 80
},
checkboxWidth : {
width : 25
},
checkboxWidth2 : {
  width : 25,
  marginTop:8
  },

textWidthCheckBox : {
  width : 27
},
loginIcon:{
  width:20,
  height:25,
  marginTop: Platform.OS === 'ios' ? -2 : 12
},
forgotPageIcon:{
  width:25,
  height:25,
  marginTop: Platform.OS === 'ios' ? -2 : 12
},
socialIcon:{
  width:40,
  height:40,
  marginTop:12
},
signInText :{
  color:colors.themeColor, 
  fontSize:20
},
resetText :{
  color:colors.white, 
  fontSize:20
},
resetPassText : {
  alignSelf:'center', fontSize:18
},
resetButtonCenter : {
  width : '90%', alignSelf:'center'
},
margin5 : {
  marginTop:5
},
resetemailtext : {
  fontSize:18,
   alignSelf:'center'
},
forgotTextContainer : {
  marginTop:20, 
  alignItems : 'center'
},
forgotPassText :
{
  color: 'white',
   fontSize:20,
   textDecorationLine: 'underline'
},
buttonSpace : {
marginTop:40
},
border:{
  borderBottomColor: colors.black,
  borderBottomWidth: 1,
  flex:1
},
textIcon : {
  marginTop :-20
},
rowAlign:{
  flexDirection:'row',
  borderBottomColor: colors.white,
  borderBottomWidth: 1
},
rowAlignForgotPage:{
  alignSelf: 'center',
  width:'90%',
  flexDirection:'row',
  borderBottomColor: colors.black,
  borderBottomWidth: 1,
},
loginContainer:{
  alignItems:align.center
},
footerView : {
position : 'absolute',
bottom : 5,
width : '70%',
alignSelf : 'center'
},
commonButtonBackGround :{
  backgroundColor : colors.themeColor
},
footerView2 : {
  width : '60%',
  marginTop:5,
  alignSelf : 'center'
  },
buttonWidth:{
  width:300,
  alignItems:align.center
},
loginbutton:{
backgroundColor:colors.red,
color:colors.white,
width:70,
textAlign:align.center,
height:30,
borderRadius:padding.sm,
position:'relative',
bottom:14,
paddingTop:4,
 },
 center:{
   paddingTop:20,
   alignItems:align.center
 },
 connect:{
  paddingTop:20,
  alignItems:align.center,
  width:'40%'
},
 borderWidth2 : {
  paddingTop:2,
  width:128
},
textBorder2:{
  borderBottomColor: colors.black,
  borderBottomWidth: 1
},
rowAlign2:{
  flexDirection:'row',
  alignItems:align.center
},
rowAlign3:{
  flexDirection:'row',
  alignItems:align.center,
  paddingTop:5
},
textCenter:{
  textAlign:align.center
},
borderWidth3 : {
  paddingTop:18,
  width:'20%'
},
bottomText:{
  alignItems:align.center,
  paddingTop:padding.sm
},
cardContainerSignUp:{
  width:'80%',
  padding:padding.sm,
  borderColor: colors.black,
  borderWidth: 1,
  marginTop:-30,
  backgroundColor:colors.white,
 },
 cardContainerForgot:{
  width:'80%',
  padding:padding.sm,
  height:220,
  borderColor: colors.black,
  borderWidth: 1,
  marginTop:-40,
  backgroundColor:colors.white,
 },
 topSpace:{
   marginTop:0
 },
 signUpButton:{
  backgroundColor:colors.red,
  color:colors.white,
  width:83,
  textAlign:align.center,
  height:30,
  borderRadius:padding.sm,
  position:'relative',
  bottom:13,
  paddingTop:5,
   },
   forgotText:{
     paddingTop:padding.md,
     width:'100%'
   },
   hamburgerIcon:{
     width:30,
     height:30,
    marginLeft:25},
    searchIcon:{
      width:30,
      height:30,
     marginRight:25},
     homeContent:{
       alignItems:align.center,
       width:'100%'
     },
     cardImage:{
       width:'90%',
       height:220,
       borderRadius:25,
     },
     sideMenu:{
     alignItems:align.center,
     backgroundColor :colors.themeColor
     },
    profilePic:{
      marginTop:10,
      width:150,
     height:150
    },
    userName:{
      paddingTop:padding.sm,
      color:colors.white
    },
    error:{
      color:colors.red,
      paddingTop:5
    },
    MainContainer :{
    
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
      margin:10
       
      },
       
      animatedToastView:
      {
         marginHorizontal: 30,
         paddingHorizontal: 25,
         paddingVertical: 10,
         borderRadius: 25,
         zIndex: 9999,
         position: 'absolute',
         justifyContent: 'center'
      },
      
      ToastBoxInsideText:
      {
         fontSize: 15,
         alignSelf: 'stretch',
         textAlign: 'center'
      },
      toast:{
        alignItems:align.center,
        marginTop:-40
      },
      modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
      },
      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      footer:{
        position:'absolute',
        top:560
      },
      staticIcon:{
        width:25,
        height:20
      },
      forgotText:{
       paddingTop:padding.sm
      },
      textWidth:{
        width:'100%'
      },
      iconsAlign:{
      flexDirection:'row'
      
      },
      shareIcon:{
        width:25,
        height:25
      },
      viewWidth:{
        width:'42%'
      },
      viewWidthEmpty:{
        width:'16%'
      },
      rightAlign:{
        textAlign:'right'
      },
      white:{
        color:colors.white
      },
      topPadding:{
        paddingTop:padding.md
      },
      topMargin:{
        paddingTop:padding.sm
      },
      list:{
       
        flexDirection:'row',
        marginTop:20,
        flexWrap:'nowrap'
      },
      listIconsWidth:{
      width:'15%'
    },
    listItemsBlank:{
      width:10
    },
    listItemsBlank2:{
      width:30
    },
    listTextWidth:{
      width:230
    },
    listIconsWidth2:{
      width:60
    },
    listTextWidth2:{
      width:'60%'
    },
    listTextNotifications:{
      width:'45%'
    },
    listToggleIconWidth2:{
      width:'4%'
    },
    widthtWenty : {
      width : '5%'
    },
    checkboxTextRow : {
    width : '100%',
    flexDirection : 'row',
    marginTop : 10
    },
    widthcheckBox : {
      flexDirection : 'row',
      width : '45%',
      height : 40,
      backgroundColor : '#bdc3c7',
      justifyContent : 'center',
      alignItems : 'center'
    },
    toggleIcon:{
      width:100,
      height:50
    },
    checkBoxTextWidth : {
      margin :5,
      fontSize:13
      },
    listTextFontSize:{
      fontSize:20,
      textAlign: "left",
      display:'flex'
    },
    listTextFontSizeSide:{
      fontSize:20,
      textAlign: "left",
      display:'flex',
      color : 'white'
    },
    switch:{
      width:'20%'
    },
    cameraIcon:{
      position:'absolute', 
      bottom:20,
      width:35,
      top:62,
      left:164,
      height:35,
      overflow:'hidden'
    }
    
    
      

})