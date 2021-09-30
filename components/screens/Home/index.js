import React from "react";
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";


const Home = ({ navigation }) => {
    return (
        <View style={styles.homeContainer}>
            <Image
                style={styles.tinyLogo}
                source={require('../../../assets/market-square.png')}
            />
            <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate('New Cart')}>
                <Text style={styles.textBtn}>
                    Novo carrinho
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeBtn} >
                <Text style={styles.textBtn}>
                    Abrir carrinho
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    tinyLogo: {
        width: 150,
        height: 150,
        margin: 30
    },
    homeBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 80,
        width: 250,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        margin: 10
    },
    textBtn: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "700",
        textTransform: "uppercase"
    }
})

export default Home