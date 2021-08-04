import React, { useRef, useState } from "react";
import { Text, Input, Select, CheckIcon } from "native-base";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import DocumentPicker from "react-native-document-picker";
import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { CheckBox } from "react-native-elements";
import authStyle from "../../../assets/styles/general/authStyle";
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";
import { Grid, Row, Col } from "react-native-easy-grid";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//partials
import Header from "../../partials/header";
import env from "../../../helpers/constants";

const Register = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);
  const [icon_checked, toggle_icon_checked] = useState(false);

  const phoneInput = useRef() < PhoneInput > null;

  const pickImage = async () => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <View style={style.body}>
      <Header
        icon={"menu"}
        title={"Business Registration"}
        navigation={props.navigation}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View>
          <Text
            style={{
              color: colors.text_black,
              marginTop: 20,
              marginBottom: 10,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Please fill in the necessary information to begin using Rex Dispatch{" "}
          </Text>
        </View>
        <View>
          <Text style={style.form_label}>Business Name</Text>

          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="First Name"
          />

          <Text style={style.form_label}>Location</Text>
          <Select
            //   selectedValue={language}
            minWidth={200}
            accessibilityLabel="Select Package Type"
            placeholder="please select"
            {...style.form_control}
            //   onValueChange={(itemValue) => setLanguage(itemValue)}
            _selectedItem={{
              bg: colors.lemon,
              _text: {
                color: colors.black,
                fontWeight: "bold",
              },
              endIcon: <CheckIcon size={4} />,
            }}
          >
            {env.nigerian_states.map((state) => {
              return (
                <Select.Item
                  label={`${state}`}
                  value={`${state}`}
                  key={`${state}`}
                />
              );
            })}
          </Select>

          <Text style={style.form_label}>Phone Number</Text>
          <PhoneInput
            containerStyle={style.phone_container}
            textContainerStyle={style.phone_text_container}
            textInputStyle={[style.no_margin, style.no_padding]}
            //   ref={phoneInput}
            defaultCode="NG"
            layout="first"
            //   onChangeText={(text) => {
            //     setValue(text);
            //   }}
            //   onChangeFormattedText={(text) => {
            //     setFormattedValue(text);
            //   }}
          />

          <Text style={style.form_label}>Address</Text>
          <View style={[style.form_control, { height: "auto" }]}>
            <GooglePlacesAutocomplete
              placeholder="Please Enter"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: env.GOOGLE_API_KEY,
                language: "en",
                components: "country:ng",
              }}
            />
          </View>

          <Text style={style.form_label}>Attach License</Text>

          <Input
            placeholder="Please Attach"
            {...style.form_control}
            _focus={colors.border_black}
            isDisabled={true}
            _disabled={{ opacity: 1, bg: colors.white }}
            InputRightElement={
              <Button
                block
                title="Select"
                buttonStyle={[
                  {
                    marginRight: 6,
                    backgroundColor: colors.navy_blue,
                    paddingHorizontal: 24,
                  },
                ]}
                titleStyle={style.btn_text}
                onPress={() => pickImage()}
              />
            }
          />
          <Text style={{ fontSize: 14, color: colors.pure_ash, marginTop: 7 }}>
            (png, jpeg format only)
          </Text>

          <Text style={style.form_label}>Create a Password</Text>

          <Input
            placeholder="Enter password"
            {...style.form_control}
            type={!hide_password ? "text" : "password"}
            _focus={colors.border_black}
            InputRightElement={
              <Icon
                style={{ marginHorizontal: 15 }}
                name={hide_password ? "eye" : "eye-slash"}
                onPress={() => {
                  toggle_hide_password(!hide_password);
                }}
              />
            }
          />

          <Grid style={{ marginVertical: 30 }}>
            <Row>
              <Col size={0.4}>
                <CheckBox
                  checked={icon_checked}
                  onPress={() => toggle_icon_checked(!icon_checked)}
                  checkedColor="#494949"
                  titleProps={() => props.navigation.navigate("terms")}
                  containerStyle={{
                    backgroundColor: "#fff",
                    borderWidth: 0,
                    marginLeft: -5,
                    marginTop: "18%",
                  }}
                />
              </Col>
              <Col size={3}>
                <Text
                  style={[
                    authStyle.sm_text,
                    {
                      color: colors.text_black,
                      textDecorationLine: "none",
                    },
                  ]}
                >
                  I have read and agreed to the{" "}
                  <Text
                    style={authStyle.sm_text}
                    onPress={() => props.navigation.navigate("terms")}
                  >
                    terms and conditions
                  </Text>{" "}
                  and{" "}
                  <Text
                    style={authStyle.sm_text}
                    onPress={() => props.navigation.navigate("terms")}
                  >
                    privacy policy
                  </Text>
                </Text>
              </Col>
            </Row>
          </Grid>

          <Button
            block
            title="Register Account"
            buttonStyle={[style.btn_success, { marginTop: 0 }]}
            titleStyle={style.btn_text}
            onPress={() => props.navigation.navigate("verification")}
          />

          <Text style={{ fontSize: 14, marginBottom: 42 }}>
            Have an account?{" "}
            <Text
              style={{ color: colors.lemon }}
              onPress={() => props.navigation.navigate("login")}
            >
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
