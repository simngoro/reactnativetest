import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
  } from 'react-native';
  import React, {useState} from 'react';
  import { styles } from './../styles';
  
  const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [textList, setTextList] = useState([]);
  
    const handleButtonPress = () => {
      console.log('Button pressed!');
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Type anything'
          autoCorrect={true}
          placeholderTextColor='#07103c'
          editable={true}
          value={text}
          style={styles.textInput}
        /> 
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button onPress={handleButtonPress} title="aguante el pincha!" />
      </View>
    );
  };
  
  export default HomeScreen;
  