import React from 'react'
import {View, Text, Image} from "react-native";
import styles from '../MarketScreen/styles';




const image = require('../../../assets/images/Saly-10.png')
const MarketScreen = () => {
    return(
        <View style={styles.root}>
            <Image style={styles.image} source = {image}/>
            <Text style={{color:'white'}}>Market Components</Text>
        </View>
    )
}

export default MarketScreen;