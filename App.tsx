import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Bugatti from './assets/bugatti.png';

interface BotaoProps {
  title: string
  color: string
}


function Botao(props: BotaoProps) {
  return (
    <Pressable>
      <View style={{ flex: 1, backgroundColor: props.color, borderRadius: 12, }}>
        <Text style={estilos.buttonText}>{props.title}</Text>
      </View>
    </Pressable>
  )
}
export default function App() {

  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState("");

  return (
    <View style={estilos.container}>
      <View style={{alignItems: 'center'}}>
        <Text  style={estilos.titulo}>Concessionária de veículos</Text>
        <Image source={Bugatti} style={{width: 600, height: 300}}></Image>
      </View>


      <LinearGradient style={{ width: 600, height: 350, borderBottomEndRadius: 16, borderBottomLeftRadius: 16, padding: 24, }} colors={['#ccb1f5', '#8d44fc']} start={{ x: 1, y: 0 }} end={{ x: 1, y: 0 }}>

        <View style={{ gap: 15, marginTop: 30, alignItems: 'center' }}>
          <View style={estilos.viewFormulario}>
            <Text style={{ marginRight: 10, fontSize: 15 }}>Fabricante: </Text>
            <TextInput style={estilos.textInput} value={fabricante} onChangeText={setFabricante}/>
          </View>

          <View style={estilos.viewFormulario}>
            <Text style={{ marginRight: 25, fontSize: 15 }}>Modelo: </Text>
            <TextInput style={estilos.textInput} value={modelo} onChangeText={setModelo}/>
          </View>

          <View style={estilos.viewFormulario}>
            <Text style={{ marginRight: 37, fontSize: 15 }}>Preço: </Text>
            <TextInput style={estilos.textInput} value={preco} onChangeText={setPreco}/>
          </View>
        </View>

        <View style={estilos.viewBotao}>
          <Botao title="Cadastrar / Salvar" color="#3F0C8DFF" />

        </View>
      </LinearGradient>
    </View>

  );
}



const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBotao: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 50,
    color: "white",
  },
  titulo: {
    flex: 1, 
    backgroundColor: '#ccb1f5', 
    paddingHorizontal: 190, 
    paddingVertical: 20, 
    fontSize: 18, 
    borderStartEndRadius: 20, 
    borderStartStartRadius: 20, 
    fontWeight: '600'
  },
  viewFormulario: {
    flexDirection: "row"
  },
  textInput: { 
    backgroundColor: "white", 
    width: 300, 
    borderRadius: 10, 
    height: 25, 
    padding: 5, 
    borderWidth: 1 
  },

});
