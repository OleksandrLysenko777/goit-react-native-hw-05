import * as DocumentPicker from "expo-document-picker";
import { Text, View, Image } from "react-native";
import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/img/background.jpg";
import { TouchableOpacity } from "react-native";
import CirclePlus from "../../assets/svg/CirclePlus";
import { useState } from "react";
import {
  container,
  bgContainer,
  contentWrapper,
  title,
} from "../Authorization/AuthPagesStyles";
import {
  avatarWrapper,
  avatar,
  btnAddAvatar,
  btnAddAvatarLoad,
  btnAddAvatarSvg,
  btnAddAvatarSvgLoad,
  logOut,
} from "../Authorization/RegistrationScreen/RegistrationScreen.styled";
import LogOut from "../../assets/svg/LogOut";

const ProfileScreen = ({ navigation }) => {
  const [isAvatar, setAvatar] = useState(null);
  const onLoadAvatar = async () => {
    const avatarImg = await DocumentPicker.getDocumentAsync({
      type: "image/*",
    });
    if (avatarImg.type === "cancel") return setAvatar(null);
    setAvatar(avatarImg);
  };
  return (
    <View style={container}>
      <ImageBackground source={backgroundImg} style={bgContainer}>
        <View style={{ ...contentWrapper, minHeight: "61%", maxHeight: "80%" }}>
          <View style={avatarWrapper}>
            <Image style={avatar} />
            <TouchableOpacity
              style={isAvatar ? btnAddAvatarLoad : btnAddAvatar}
              onPress={onLoadAvatar}
            >
              <CirclePlus
                style={isAvatar ? btnAddAvatarSvgLoad : btnAddAvatarSvg}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Login")}
                style={{ logOut, marginLeft: 190, marginTop: -24}}
              >
                <LogOut />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...title,
              fontFamily: "Roboto_500Medium",
              marginTop: 92,
            }}
          >
            Natali Romanova
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
