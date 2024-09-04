import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton } from '../Components/AppButton'
import { Theme } from '../Components/Theme'

export function Intro({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require("../../assets/Intro2.jpg")} style={styles.bg}>
                <View style={styles.overlay}>
                    <View style={{ marginTop: 40 }}>
                        <Text style={{ fontFamily: Theme.fonts.text200, color: "#ffffff", fontSize: 25, textAlign: "center" }}>Welcome to <Text style={{ fontFamily: Theme.fonts.brand, }}>Big Paddi.</Text></Text>
                        <Text style={{ fontFamily: Theme.fonts.text200, color: "#ffffff", fontSize: 15, textAlign: "center" }}>Real estate money in your pocket!</Text>
                    </View>
                    <AppButton onPress={()=> navigation.navigate("Login")}>Get Started </AppButton>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        // flex: 1,
        // resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
        // backgroundColor: Theme.colors.primary + 80,
        backgroundColor: "#00000097",
        padding: 20,
        paddingVertical: 50
    }
})
