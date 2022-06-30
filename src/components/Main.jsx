import React from "react";
import { Text, View,style} from "react-native";
import Db from './db.jsx'
import Nav from "./Nav.jsx";

const Main = () => {
    return (
        <View style={{backgroundColor:"#78909C"}}>
            <Nav/>
            <Db />
        </View>
    )
}

export default Main