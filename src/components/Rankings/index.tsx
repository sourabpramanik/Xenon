import React from 'react'
import {View, Text, Image} from "react-native";
import styles from './styles';

export interface RankingProps {
    ranking:{
    image: string,
    name: string,
    netWorth: number,
    },
    place: number,
}

const Ranking = (props:RankingProps) => {
    const {
        ranking:{
        image,
        name,
        netWorth
       },
       place
    } = props
    return(
            <View style={styles.root}>
                <View style={styles.left}>
                <Text style={styles.place}>{place}</Text>
                    <Image style={styles.image} source={{uri:image}}/>
                    
                    <View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                </View>
                
                <View style={{alignItems:"flex-end"}}>
                    <Text style={styles.name}>${netWorth}</Text>

                </View>
            </View>
    )
}

export default Ranking;