import React from 'react'
import {View, Text, Image, FlatList} from "react-native";
import styles from './styles'
import Ranking from '../../components/Rankings'

const image = require('../../../assets/images/Saly-20.png')
const ranking= [{

    id: '1',
    name: "Lite Coin",
    image: "https://png.pngtree.com/png-clipart/20200225/original/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_5257566.jpg",
 
    netWorth:34544


}, {
    id: '2',
    name: "Bitcoin",
    image: "https://png.pngtree.com/png-clipart/20200225/original/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_5257566.jpg",
   
    netWorth:2111


},{
    id: '3',
    name: "Ethereum",
    image: "https://png.pngtree.com/png-clipart/20200225/original/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_5257566.jpg",

    netWorth:67765


}, {
    id: '4',
    name: "Ripple",
    image: "https://png.pngtree.com/png-clipart/20200225/original/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_5257566.jpg",

    netWorth:23


}]
const RankingScreen = () => {
    return(
        <View style={styles.root}>
            
            <FlatList
                style={{width:"100%"}}
                data={ranking}
                renderItem={({item, index})=><Ranking ranking={item} place={index+1}/>}
                showsVerticalScrollIndicator={false}
                ListFooterComponentStyle={{alignItems:"center"}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source = {image}/>
                        
                    </>
                )}
            />
        </View>
    )
}

export default RankingScreen;