import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles'

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
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
      title="Add"
      color="#07103c"
      onPress={() => null}
       />
  </View>

    );
};

export default App;
