import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
root:{
    padding: 20,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    marginTop:55
},
image: {
    height: '30%',
    aspectRatio: 1,

},
userContainer:{
    width:'100%',
},
userImage: {
    height: 75,
    width: 75,
    marginRight: 10,

},
name: {
    fontWeight:"bold",
    marginBottom:5,
},
email:{

},
value:{
    fontSize:18,
    fontWeight:'600',
    marginBottom:5,

},
left:{
    flexDirection:"row",
    alignItems:"center"
}
});

export default styles;