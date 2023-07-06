import React from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreens = ({ navigation, route }) => {
  const furniture = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerBtn}>
          <Icon
            name="chevron-left"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: COLORS.dark }}>
          Details
        </Text>
        <View style={styles.headerBtn}>
          <Icon name="dots-vertical" size={25} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={furniture.image}
          style={styles.backgroundImage}
        >
          <View
            style={{
              width: 80,
              height: 70,
              backgroundColor: COLORS.primary,
              position: "absolute",
              right: 0,
              bottom: 0,
              borderTopLeftRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: 5,
                alignItems: "center",
              }}
            >
              <Icon name="star" size={25} color={COLORS.yellow} />
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                4.2
              </Text>
            </View>
            <Text
              style={{ fontSize: 9, color: COLORS.white, fontWeight: "bold" }}
            >
              250 Reviews
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: COLORS.primary }}
          >
            {furniture.name}
          </Text>
          <Text
            style={{
              marginVertical: 20,
              fontSize: 16,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.dark, lineHeight: 20 }}>
            Designed modern chair with luxury curves, in an organic yet
            structured design that holds the sitting body and provides feelings
            of relaxation while offering excellent back support
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 20,
            }}
          >
            <Text
              style={{ color: COLORS.yellow, fontSize: 22, fontWeight: "bold" }}
            >
              {furniture.price}
            </Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityBtn}>
                <Icon name="plus" size={18} color={COLORS.primary} />
              </View>
              <Text style={{ color: COLORS.white, fontWeight: "bold" }}>1</Text>
              <View style={styles.quantityBtn}>
                <Icon name="minus" size={18} color={COLORS.primary} />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                marginRight: 30,
                elevation: 7,
                backgroundColor: COLORS.white,
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 25,
              }}
            >
              <Icon name="heart-outline" size={28} color={COLORS.primary} />
            </View>
            <View style={styles.addCardBtn}>
              <Text style={{color: COLORS.white, fontSize: 18}}>Add to Card</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBtn: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.light,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  backgroundImage: {
    height: 300,
    marginHorizontal: 20,
    overflow: "hidden",
    borderRadius: 15,
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 40,
  },
  quantityContainer: {
    height: 35,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  quantityBtn: {
    height: 25,
    width: 25,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    marginHorizontal: 5,
  },
  addCardBtn: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical:20
  },
});
export default HomeScreens;
