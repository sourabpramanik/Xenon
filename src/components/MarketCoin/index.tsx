import React from 'react'
import {View, Text, Image} from "react-native";
import styles from './styles';

export interface MarketCoinsProps {
    marketCoin:{image: string,
    name: string,
    symbol: string,
    valueChange: number,
    valueUSD: number}
}

const MarketCoins = (props:MarketCoinsProps) => {
    const {
        marketCoin:{
        image,
        name,
        symbol,
        valueChange,
        valueUSD}
    } = props
    return(
            <View style={styles.root}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{uri:image}}/>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.symbol}>{symbol}</Text>
                    </View>
                </View>
                
                <View style={{alignItems:"flex-end"}}>
                    <Text style={styles.name}>${valueUSD}</Text>
                    <Text style={{color: valueChange > 0 ? "#398f0a":"#f10000"}}>{valueChange>0 && '+'} {valueChange}</Text>

                </View>
            </View>
    )
}

export default MarketCoins;