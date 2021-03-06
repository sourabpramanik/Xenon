import React from 'react'
import {View, Text, Image, FlatList} from "react-native";
import styles from './styles'
import PortfolioCoins from '../../components/PorfolioCoin'
const image = require('../../../assets/images/Saly-10.png')
const btc = require('../../../assets/images/btc.png')
const portfolioCoins= [{
    id: '1',
    name: "Lite Coin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "LTC",
    amount: 34432,
    valueUSD:34544


}, {
    id: '2',
    name: "Bitcoin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "BTC",
    amount: 32323,
    valueUSD:2111


},{
    id: '3',
    name: "Ethereum",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "ETH",
    amount: 654,
    valueUSD:67765


}, {
    id: '4',
    name: "Ripple",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "XPR",
    amount: 454,
    valueUSD:23


},{
    id: '1',
    name: "Lite Coin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "LTC",
    amount: 34432,
    valueUSD:34544


}, {
    id: '2',
    name: "Bitcoin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "BTC",
    amount: 32323,
    valueUSD:2111


},{
    id: '3',
    name: "Ethereum",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "ETH",
    amount: 654,
    valueUSD:67765


}, {
    id: '4',
    name: "Ripple",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "XPR",
    amount: 454,
    valueUSD:23


},{
    id: '1',
    name: "Lite Coin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "LTC",
    amount: 34432,
    valueUSD:34544


}, {
    id: '2',
    name: "Bitcoin",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "BTC",
    amount: 32323,
    valueUSD:2111


},{
    id: '3',
    name: "Ethereum",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "ETH",
    amount: 654,
    valueUSD:67765


}, {
    id: '4',
    name: "Ripple",
    image: "http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    symbol: "XPR",
    amount: 454,
    valueUSD:23


}]
const PortfolioScreen = () => {
    return(
        <View style={styles.root}>
            
            <FlatList
                style={{width:"100%"}}
                data={portfolioCoins}
                renderItem={({item})=><PortfolioCoins portfolioCoin={item}/>}
                showsVerticalScrollIndicator={false}
                ListFooterComponentStyle={{alignItems:"center"}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source = {image}/>
                        <View style={styles.balanceContainer}>
                            <Text style={styles.label1}>Portfolio Balance</Text>
                            <Text style={styles.label2}>$82</Text>
                        </View>
                    </>
                )}
            />
        </View>
    )
}

export default PortfolioScreen;