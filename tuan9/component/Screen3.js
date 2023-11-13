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

export default function Screen3() {
  const navigation = useNavigation();
  const route = useRoute();
  const { drinks } = route.params;

  const [selDrink, setSelDrink] = useState([]);

  var incre = (item) => {
    const existingItem = selDrink.find((drink) => drink.id === item.id);
    if (existingItem) existingItem.quantity += 1;
    else setSelDrink([...selDrink, { ...item, quantity: 1 }]);
  };

  var decre = (item) => {
    const indexItem = selDrink.findIndex((drink) => drink.id === item.id);
    if (indexItem != -1) {
      const updateDrinks = [...selDrink];
      if(updateDrinks[indexItem].quantity ==1)
        updateDrinks.splice(indexItem, 1);
      else
        updateDrinks[indexItem].quantity-=1;
      setSelDrink(updateDrinks);
    }
  };

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
          Drinks
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
        {drinks.map((item) => {
          return (
            <View style={styles.viewDrink}>
              {item.image ? ( // Kiểm tra nếu item.image không rỗng
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 60, height: 60 }}
                  resizeMode="contain"
                />
              ) : (
                // Nếu item.image rỗng, hiển thị hình ảnh nền màu xám
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "rgba(217, 217, 217, 1)",
                  }}
                />
              )}

              <View style={{ marginLeft: 8, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1699002140/Vector_bestsd.png",
                    }}
                    style={{ height: 14, width: 14 }}
                    resizeMode="contain"
                  />
                  <Text style={{ fontSize: 12, color: "rgba(86, 94, 108, 1)" }}>
                    {item.price}{" "}
                  </Text>
                </View>
              </View>

              <View
                style={{ flexDirection: "row", right: 0, position: "absolute" }}
              >
                <TouchableOpacity onPress={decre}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1699002721/Image_230_g8asjr.png",
                    }}
                    style={{ height: 20, width: 20, marginRight: 45 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                {/* <Text>{item.quantity}</Text> */}

                <TouchableOpacity onPress={incre}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dmwhnw9g3/image/upload/v1699002717/Image_231_qalwys.png",
                    }}
                    style={{ height: 20, width: 20, marginRight: 10 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={()=> navigation.navigate("Screen4",{drinks})}>
          <View
            style={{
              backgroundColor: "rgba(239, 176, 52, 1)",
              borderRadius: 10,
              height: 44,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              GO TO CART
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
  viewDrink: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "rgba(188, 193, 202, 1)",
    borderRadius: 5,
    alignItems: "center",
  },
  footer: {
    marginRight: 10,
    marginLeft: 10,
    bottom: 0,
    position: "sticky",
    backgroundColor: "white",
    zIndex: 1,
  },
});
