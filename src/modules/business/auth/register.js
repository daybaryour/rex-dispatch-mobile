import React, { useRef, useState } from "react";
import {
  Text,
  Input,
  Select,
  CheckIcon,
  useToast,
  FormControl,
} from "native-base";
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
import { useForm, Controller } from "react-hook-form";

//partials
import Header from "../../partials/header";
import env from "../../../helpers/constants";

//redux
import { register } from "../../../redux/general/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const Register = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);
  const [icon_checked, toggle_icon_checked] = useState(false);
  const [isLoading, toggle_isLoading] = useState(false);

  const phoneInput = useRef() < PhoneInput > null;

  const ref = useRef();

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

  const dispatch = useDispatch();
  const toast = useToast();
  const { message } = useSelector((state) => state.message);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const MyInput = ({ name, placeholder, required }) => {
    return (
      <>
        <Controller
          control={control}
          rules={{
            required: required,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl isInvalid={errors[name] ? true : false}>
              <Input
                {...style.form_control}
                _focus={colors.border_black}
                placeholder={placeholder}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            </FormControl>
          )}
          name={name}
          defaultValue=""
        />
        {errors[name] && (
          <Text style={style.error_text}>{placeholder} is required.</Text>
        )}
      </>
    );
  };

  const onSubmit = (data) => {
    toggle_isLoading(true);
    // data.phone = data.phone.substring(1);
    // console.log(data);
    dispatch(register(data, "business"))
      .then(() => {
        toggle_isLoading(false);

        props.navigation.navigate("auth", {
          screen: "verification",
          params: { phone: data.phone },
        });

        //     props.navigation.dispatch(
        //       CommonActions.reset({
        //         index: 1,
        //         routes: [
        //           {
        //             name: "auth",
        //             screen: "verification",
        //           },
        //         ],
        //       })
        //     );
      })
      .catch(() => {
        toast.show({
          title: message
            ? message
            : "something went wrong, please check your internet connection",
          status: "error",
          placement: "top",
        });
        toggle_isLoading(false);
      });
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

          <MyInput
            name="business_name"
            placeholder="Business name here"
            required={true}
          />

          <Text style={style.form_label}>Email</Text>
          <MyInput name="email" placeholder="Email" required={true} />

          <Text style={style.form_label}>Location</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                //   selectedValue={language}
                minWidth={200}
                accessibilityLabel="Select Location"
                placeholder="please select"
                {...style.form_control}
                onValueChange={(itemValue) => onChange(itemValue)}
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
            )}
            name={"location"}
            defaultValue=""
          />
          {errors.phone && (
            <Text style={style.error_text}>Location is required.</Text>
          )}

          <Text style={style.form_label}>Phone Number</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <PhoneInput
                containerStyle={
                  errors.phone
                    ? style.phone_container_error
                    : style.phone_container
                }
                textContainerStyle={style.phone_text_container}
                textInputStyle={[style.no_margin, style.no_padding]}
                //   ref={phoneInput}
                defaultCode="NG"
                layout="first"
                // onChangeText={(text) => {
                //   onChange(text);
                // }}
                onChangeFormattedText={(text) => {
                  onChange(text);
                }}
              />
            )}
            name={"phone"}
            defaultValue=""
          />
          {errors.phone && (
            <Text style={style.error_text}>Phone number is required.</Text>
          )}

          <Text style={style.form_label}>Address</Text>
          <View style={[style.form_control, { height: "auto" }]}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <GooglePlacesAutocomplete
                  ref={ref}
                  placeholder="Please enter your address"
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    text = ref.current?.getAddressText();
                    onChange(text);
                  }}
                  query={{
                    key: env.GOOGLE_API_KEY,
                    language: "en",
                    components: "country:ng",
                  }}
                />
              )}
              name={"address"}
              defaultValue=""
            />
            {errors.phone && (
              <Text style={style.error_text}>
                Address is required, please enter a valid one.
              </Text>
            )}
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

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormControl isInvalid={errors.password ? true : false}>
                <Input
                  placeholder="Enter password"
                  {...style.form_control}
                  type={!hide_password ? "text" : "password"}
                  _focus={colors.border_black}
                  onChangeText={(val) => onChange(val)}
                  value={value}
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
              </FormControl>
            )}
            name={"password"}
            defaultValue=""
          />
          {errors.password && (
            <Text style={style.error_text}>Password is required.</Text>
          )}

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
            loading={isLoading}
            disabled={isLoading}
            disabledStyle={[style.btn_success, { marginTop: 0, opacity: 0.8 }]}
            onPress={handleSubmit(onSubmit)}
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
