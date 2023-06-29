import { FlatList, Image } from "react-native";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Text, View } from "react-native";

import { useEffect, useState } from "react";
import PostsItem from "../components/PostsItem/PostsItem";

const DefaultPostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([
    {
      id: "Sasza",
      postImg:
        "file:///var/mobile/Containers/Data/Application/63E6D4A1-49BC-4A70-A8A3-27B27B56BC2F/Library/Caches/ExponentExperienceData/%2540direst2010%252Fgoit-react-native-hw-3/Camera/6180ADA2-BA3A-4096-ABB1-D5D02B5B5F74.jpg",
      postName: "random",
      postAddress: "Warsav",
      postLocation: { latitude: 52.234982, longitude: 21.008490 },
    },
  ]);

  useEffect(() => {
    if (!route.params) return;

    setPosts((prev) => [...prev, route.params]);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatarImg} />
        <View>
          <Text style={styles.avatarName}>Natali Romanova</Text>
          <Text style={styles.avatarEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        style={styles.postsWrapper}
        data={posts}
        renderItem={({ item }) => (
          <PostsItem
            postName={item.postName}
            postImg={item.postImg}
            postAddress={item.postAddress}
            postLocation={item.postLocation}
          />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <View style={styles.navTabs}></View>
    </View>
  );
};

export default DefaultPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  avatarImg: {
    width: 60,
    height: 60,
    marginRight: 8,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  avatarName: {
    fontFamily: "Roboto_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  avatarEmail: {
    fontFamily: "Roboto_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
