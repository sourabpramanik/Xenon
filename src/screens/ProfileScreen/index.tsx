import React, { useState } from 'react'
import {View, Text, Image, Pressable} from "react-native";
import styles from './styles'



const image = require('../../../assets/images/profile.png')
const signOut =()=> {
    console.warn('sign Out')
}
const ProfileScreen = () => {
    const [user, setUser] = useState({
        id:'1',
        name: 'Zayn',
        email:'fadsaQ@da.com',
        userImage: require('../../../assets/images/user.png'),
        netWorth: 21212,

    })
    return(
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <View style={styles.userContainer}>
            <View style={styles.left}>
                    <Image style={styles.userImage} source={user.userImage}/>
                    
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
            </View>
           
            </View>
            <View style={{alignItems:"flex-end"}}>
                    <Text style={styles.value}>${user.netWorth}</Text>

                </View>
                
                
            <Pressable onPress={signOut} style={{marginTop:'auto'}}>
                <Text>Sign Out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;