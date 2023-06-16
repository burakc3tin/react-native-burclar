import { TouchableOpacity,View, Text, StyleSheet, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';




type RootStackParamList = {
    Home: undefined;
    Result: {  days:any,months:any };

    // Diğer ekranlar buraya eklenebilir
  };
  
  type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;
  
  type Props = {
    navigation: HomeScreenNavigationProp;
  };


 
export default function Home({navigation}:Props) {
  const background = require('../assets/images/background.jpg');
  const [date, setDate] = useState(new Date());
  const zodiac = require('zodiac-signs')('tr');
  const test = zodiac.getSignByDate({ day: 22, month: 11 }, 'tr')

  const handleCalculate = () => {
    const selectedDate = new Date(date);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1; // Ayın sıfır tabanlı indeksi olduğu için 1 ekliyoruz
    const dateString = `${day}-${month}`;
    
   
    navigation.navigate('Result', {  days:day,months:month });
  };

  return (
    <ImageBackground source={background} style={style.backgroundImage}>
    
    <Text style={style.burclarikon}>♌♍♎♏♐♑♒♓</Text>

       <DatePicker
        date={date}
        mode="date"
        textColor="wheat"
        onDateChange={setDate}
        locale="tr"
      />

   <TouchableOpacity style={style.button} onPress={handleCalculate}>
    <Text style={style.buttontext}>🌠 Hesapla</Text>
   </TouchableOpacity>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    height: '100%',
   },
  button:{
    backgroundColor:'white',
    padding:10,
    width:'100%',
    textAlign:'center',
    margin:40,
    opacity:0.7
 

    },
  buttontext:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20

  },
  burclarikon:{
    fontSize:30,
    textAlign:'center',
    marginBottom:40
  }
});
