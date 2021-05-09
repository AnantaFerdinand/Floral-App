import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function BuySuccesful () {
return(
    <View style={styles.container}>
        <Text style={styles.text}>Purchase Successful</Text>
        <Image 
          style={styles.image}
          source={required ("../../assets/icons/Logo.png")} 
          />

    </View>

 );
};
export default BuySuccesful;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
text: {
    fontSize: 20,
    color: "#020202",
    fontWeight: "200",
    fontFamily: "Poppins-Medium",
},
image: {
width: 150,
height: 300,
},
});