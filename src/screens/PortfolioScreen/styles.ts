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
    height: 175,
    resizeMode:'contain',

},
balanceContainer: {
    width: '100%'
},
label1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
    color:"#777777"
},
label2 : {
    fontSize: 36,
    color:"black",
    fontWeight: 'bold',
}
});

export default styles;