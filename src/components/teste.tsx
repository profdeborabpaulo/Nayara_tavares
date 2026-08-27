import React from "react";
import { Text } from "react-native";

function Saudacao({nome} : {nome:string}){

    return(
        <Text>Olá, {nome}</Text>
    )
}

export default Saudacao;
