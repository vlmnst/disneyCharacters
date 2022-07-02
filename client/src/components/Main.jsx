import React from "react";
import { Text, View } from "react-native";
import Db from './db.jsx'
import Nav from "./Nav.jsx";

const Main = () => {
    return (
        <View style={{backgroundColor:"#78909C"}}>
            <Db />
        </View>
    )
}

export default Main