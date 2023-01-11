import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import Swiper from "react-native-swiper";
import ImagesList from "../images/ImagesList";
import { useNavigation } from "@react-navigation/native";

const WalkThroughScreen = () => {
  const navigation = useNavigation();

  const walkThroughList = [
    {
      id: 1,
      title: "Recepton op maat",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: ImagesList.Fork,
    },
    {
      id: 2,
      title: "Weekplanner",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: ImagesList.CheckList,
    },
    {
      id: 3,
      title: "Weekplanner",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: ImagesList.CheckList,
    },
    {
      id: 4,
      title: "Weekplanner",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: ImagesList.CheckList,
    },
    {
      id: 5,
      title: "Boodschappenlijstjes",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: ImagesList.Menu,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View>
        {/* inloggen Text */}
        <Text style={styles.inLoggen}>inloggen</Text>
      </View>

      <View style={styles.swiperAlign}>
        <Swiper
          loop={false}
          dot={
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#B8E2BE",
                borderRadius: 4,
                margin: 5,

                marginVertical: 90,
              }}
            ></View>
          }
          activeDot={
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#7BC17E",
                borderRadius: 4,
                margin: 5,
              }}
            ></View>
          }
        >
          {walkThroughList.map((l) => {
            return (
              <View key={l}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View style={styles.imageContainer}>
                    <Image source={l.image} style={styles.swipeImages} />
                  </View>
                </View>

                <Text style={styles.titleText}>{l.title}</Text>

                <Text style={styles.discriptionText}>{l.discription}</Text>




                
              </View>
            );
          })}
        </Swiper>
      </View>

      <View>
        <TouchableOpacity
          style={styles.CreateAccountButton}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text> Volgende </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({
  inLoggen: {
    fontWeight: "bold",
    marginTop: 40,
    marginRight: 40,
    textAlign: "right",
  },

  swipeImages: {
    height: "50%",
    width: "50%",
    resizeMode: "contain",
    borderRadius: 50,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92CA91",
    height: 140,
    width: 140,

    borderRadius: 100,
  },

  swiperAlign: {
    flex: 1,
    marginTop: 160,
  },
  titleText: {
    marginTop: 60,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },

  discriptionText: {
    textAlign: "center",
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  CreateAccountButton: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92CA91",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    borderRadius: 8,
  },
});
