import React, {Fragment} from 'react';
import {
  Text,
  TextInput,
  Button,
  View

} from "react-native";

import estilo from "./estilo"

const Login = () => {
  
  return (
    <Fragment>
      <View style={estilo.conteiner}>
        <TextInput 
        style={estilo.inputs}
         placeholder="Usuario"
         />
         <TextInput 
         style={estilo.inputs}
         placeholder="Senha"
         secureTextEntry={true}
         />
      </View>
      <Button title="Entrar" />

    </Fragment>
    

  )
};
export default Login;
