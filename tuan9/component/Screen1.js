import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Screen1() {
    const navigation = useNavigation();
    const route = useRoute();
    const [data, setData] = useState([]);
    fetch('https://653f4a739e8bd3be29e02cd7.mockapi.io/ShopsCafe')
        .then((response) => response.json())
        .then((json) => setData(json.slice(1,4)));

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={{ fontSize: 24, fontWeight: "bold" }} > Welcome to Cafe world </Text>
            </View>
            <View style={styles.content}>
                {
                    data.map((item) => {
                        return (
                            <Image source={{ uri: item.image }}
                                style={{ width: 350, height: 200 }}
                                resizeMode='contain'
                            />
                        )
                    })
                }
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>navigation.navigate("Screen2")}>
                    <View style={{ width: 312, height: 50, backgroundColor: 'rgba(0, 189, 214, 1)', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 14, fontWeight: 'bold' }}>GET STARTED</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
   
});