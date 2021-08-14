import React, { useState } from "react";
import { View, Text, ScrollView, Platform } from "react-native";

import { Button } from "react-native-elements";
import { Radio, TextArea, FormControl, useToast } from "native-base";
import { useForm, Controller } from "react-hook-form";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cancelParcel } from "../../../redux/user/dispatch/dispatchActions";

const CancelRequest = (props) => {
  const [loading, toggle_loading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const toast = useToast();

  //   const [value, setValue] = React.useState("one");

  const onSubmit = (data) => {
    toggle_loading(true);

    dispatch(cancelParcel(props.route.params.id, data))
      .then((resp) => {
        toggle_loading(false);
        props.navigation.navigate("dispatch", {
          screen: "createDispatch",
        });
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and try again",
          status: "error",
          placement: "top",
        });
        toggle_loading(false);
      });
  };

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Cancel Request"}
        navigation={props.navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <Text style={[style.text_20, { marginTop: 20 }]}>
          Please select the reason for cancellation:
        </Text>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl isInvalid={errors.reason ? true : false}>
                <Radio.Group
                  name="myRadioGroup"
                  aria-label="t2"
                  value={value}
                  accessibilityLabel="please select payment"
                  onChange={(nextValue) => {
                    onChange(nextValue);
                  }}
                >
                  <Radio
                    aria-label="t2"
                    value="delivery not needed"
                    colorScheme="green"
                    _text={{
                      color: colors.text_black,
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                    //     icon={
                    //       <Icon
                    //         style={{
                    //           backgroundColor: colors.white,
                    //           color: colors.lemon,
                    //           fontSize: 13,
                    //           borderRadius: 50,
                    //         }}
                    //         name={"check"}
                    //       />
                    // }
                    my={1.5}
                  >
                    Delivery not needed
                  </Radio>
                  <Radio
                    aria-label="t2"
                    value="delivery time"
                    colorScheme="green"
                    _text={{
                      color: colors.text_black,
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                    my={1.5}
                  >
                    Delivery Time
                  </Radio>
                  <Radio
                    aria-label="t2"
                    value="not going again"
                    colorScheme="green"
                    _text={{
                      color: colors.text_black,
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                    my={1.5}
                  >
                    Not going again
                  </Radio>
                  <Radio
                    aria-label="t2"
                    value="too expensive"
                    colorScheme="green"
                    _text={{
                      color: colors.text_black,
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                    my={1.5}
                  >
                    Too expensive
                  </Radio>
                  <Radio
                    aria-label="t2"
                    value="others"
                    colorScheme="green"
                    _text={{
                      color: colors.text_black,
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                    my={1.5}
                  >
                    Others
                  </Radio>
                </Radio.Group>{" "}
              </FormControl>
            )}
            name={"reason"}
            defaultValue=""
          />
          {errors.reason && (
            <Text style={style.error_text}>
              Reason for cancellation is required.
            </Text>
          )}

          <View style={{ marginTop: "5%", marginBottom: 30 }}>
            {/* come back  make sure focus works */}
            <Controller
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <FormControl
                  isInvalid={errors.additional_information ? true : false}
                >
                  <TextArea
                    aria-label="t1"
                    {...style.form_control}
                    borderWidth={0}
                    backgroundColor={"rgba(186, 199, 206, 0.2)"}
                    h={106}
                    _focus={{ borderColor: colors.border_black }}
                    numberOfLines={6}
                    value={value}
                    onChangeText={(val) => onChange(val)}
                    placeholder="Additional comments..."
                  />
                </FormControl>
              )}
              name={"additional_information"}
              defaultValue=""
            />
          </View>

          <Button
            block
            title="Cancel Delivery"
            buttonStyle={[style.btn_success]}
            titleStyle={style.btn_text}
            loading={loading}
            disabled={loading}
            disabledStyle={[style.btn_success_disabled, , { opacity: 0.8 }]}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CancelRequest;
