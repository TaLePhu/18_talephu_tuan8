import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Screen2() {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([]);
  fetch("https://653f4a739e8bd3be29e02cd7.mockapi.io/ShopsCafe")
    .then((response) => response.json())
    .then((json) => setData(json));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1698650451/Button_70_muorjy.png",
            }}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            color: "rgba(23, 26, 31, 1)",
            fontWeight: "bold",
          }}
        >
          Shops Near Me
        </Text>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1698650448/Image_177_lygrni.png",
          }}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        {data.map((item) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("Screen3",{drinks:item.drinks})}>
              <View style={styles.viewShop}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 350, height: 120, borderRadius: 10 }}
                  resizeMode="contain"
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    top: 0,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={{
                        uri: item.status
                          ? "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1698650914/Image_178_a8mb9o.png"
                          : "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1698998987/Image_190_lvgxp2.png",
                      }}
                      style={{ width: 18, height: 18 }}
                      resizeMode="contain"
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: item.status
                          ? "rgba(29, 215, 91, 1)"
                          : "rgba(222, 59, 64, 1)",
                      }}
                    >
                      {item.status ? "Accepting Orders" : "Tempory Unavailable"}
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={{
                        uri: "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1698650917/Image_180_sognke.png",
                      }}
                      style={{ width: 18, height: 18 }}
                      resizeMode="contain"
                    />
                    <Text
                      style={{ fontSize: 14, color: "rgba(222, 59, 64, 1)" }}
                    >
                      {item.minutes}
                    </Text>
                  </View>

                  <View>
                    <Image
                      source={{
                        uri: "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1698650921/Image_181_g55lpf.png",
                      }}
                      style={{ width: 18, height: 18 }}
                      resizeMode="contain"
                    />
                  </View>
                </View>

                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 5,
                    fontSize: 16,
                    color: "rgba(23, 26, 31, 1)",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ fontSize: 14, color: "darkgray" }}>
                  {item.coordinates}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    zIndex: 1,
    top: 0,
    position: "sticky",
    backgroundColor: "white",
  },
  content: {
    alignItems: "center",
  },
  viewShop: {
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "black",
    padding: 5,
  },
});
