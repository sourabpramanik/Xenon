import React from 'react'
import {View, Text, Image, FlatList} from "react-native";
import styles from './styles'
import MarketCoins from '../../components/MarketCoin'


const marketCoin= [{

    id: '1',
    name: "Lite Coin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "LTC",
    valueChange: 3.32,
    valueUSD:34544


}, {
    id: '2',
    name: "Bitcoin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "BTC",
    valueChange: -0.33,
    valueUSD:2111


},{
    id: '3',
    name: "Ethereum",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "ETH",
    valueChange: -64,
    valueUSD:67765


}, {
    id: '4',
    name: "Ripple",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "XPR",
    valueChange: 45,
    valueUSD:23


}]
const image = require('../../../assets/images/Saly-17.png')
const MarketScreen = () => {
    return(
        <View style={styles.root}>
            
        <FlatList
            style={{width:"100%"}}
            data={marketCoin}
            renderItem={({item})=><MarketCoins marketCoin={item}/>}
            showsVerticalScrollIndicator={false}
            ListFooterComponentStyle={{alignItems:"center"}}
            ListHeaderComponent={() => (
                <>
                    <Image style={styles.image} source = {image}/>
                        <Text style={styles.label1}>Market</Text>
                
                </>
            )}
        />
    </View>
)
}
export default MarketScreen;