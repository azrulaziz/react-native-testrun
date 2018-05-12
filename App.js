import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableHighlight, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: 'Type in below form'
    }
  }

  handleTextChange = (text) => {
    this.setState({text})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}>React Native Experiment</Text>
          <Text style={styles.text} selectable={true}>{this.state.text}</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#607699', justifyContent: 'center', alignItems: 'center'}}>
          <TextInput 
            style={{
            height: 40,
            width: 200,
            padding: 10,
            borderColor: 'white',
            borderBottomWidth: 1,
            marginBottom: 20,
            textAlign: 'center'
            }} 
            placeholder="Enter text here"
            onChangeText={this.handleTextChange}
          />
        <Button title="Submit" onPress={() => {Alert.alert('alert')}} color="white"/>
        <TouchableHighlight onLongPress={() => {Alert.alert('long press alert')}} underlayColor="orange">
            <View style={styles.button}>
              <Text>
                Press
              </Text>
            </View>
        </TouchableHighlight>
        </View>
        <View style={{
          flex: 1, 
          backgroundColor: 'powderblue',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <View style={{height: 90, width: 150, backgroundColor: 'white'}}>
            
          </View>
          <View style={{height: 90, width: 50, backgroundColor: 'white'}}></View>
          <View style={{height: 90, width: 50, backgroundColor: 'white'}}></View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    justifyContent: 'space-between'
  },
  text: {
    color: 'black',
  },
  header: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center'
  },
  button: {
    width: 260,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
