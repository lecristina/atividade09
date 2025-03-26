import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Concessionária de veículos</Text>
        <img src="" alt="" />
      </View>


      <LinearGradient style={{flex:1, width: 300, height:506, borderBottomEndRadius:16, borderBottomLeftRadius:16, padding:24, }} colors={['#ccb1f5','#8d44fc']} start={{x:1,y:0}} end={{x:1,y:0}}>
 
      <View style={styles.estiloInput}>
        <Text>Fabricante: </Text>
        <TextInput/>
        <Text>Modelo: </Text>
        <TextInput style={styles.estiloInput}/>
        <Text>Preço: </Text>
        <TextInput />
        
      </View>
      <Button title='Cadastrar / Salvar'/>
    </LinearGradient>
  </View>
      
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloInput: {
    
  },

});
