import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const NewCart = () => {
    return (
        <View style={styles.newCartContainer}>
            <Text style={styles.inputLabel}>
                Adicione novos itens ao carrinho!
            </Text>
            <View style={styles.inputArea}>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.BtnAdd} >
                    <Image
                        style={styles.addIcon}
                        source={require('../../../assets/add-icon.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.listArea}>

            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    newCartContainer: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        paddingTop: 80
    },
    inputLabel: {
        fontSize: 15,
        fontWeight: "700"
    },
    inputArea: {
        marginTop: 20,
        height: 50,
        position: "relative"
    },
    input: {
        height: 50,

        width: 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#000"
    },
    BtnAdd: {
        width: 60,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#000",
        borderLeftWidth: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        position: "absolute",
        right: 0
    },
    addIcon: {
        width: 40,
        height: 40
    },
    listArea: {
        marginTop: 20,
        maxHeight: "75%",
        padding: 20,
        width: 300,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 20,
    }
})

export default NewCart