import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import { Input, useToast, FormControl, Select, CheckIcon } from "native-base";
import { useForm, Controller } from "react-hook-form";
import Spinner from "react-native-spinkit";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

//redux
import { useDispatch } from "react-redux";
import { getFleet } from "../../../redux/business/fleet/fleetActions";
import { placeBid } from "../../../redux/business/bids/bidActions";

const BidModal = (props) => {
  const [fleet, setFleet] = useState([]);
  const [fleetLoading, setFleetLoading] = useState(true);
  const [loading, toggleLoading] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getFleet())
      .then((res) => {
        setFleet(res);

        setFleetLoading(false);
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
      });
  }, []);

  const onSubmit = (data) => {
    toggleLoading(true);
    data.parcel_id = props.route.params.parcel_id;
    dispatch(placeBid(data))
      .then((res) => {
        toggleLoading(false);
        props.navigation.navigate("bidSuccess");
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
      });
  };

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Make A Bid"}
        navigation={props.navigation}
      />
      {/* <Modal
        isVisible={props.showModal}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        onBackdropPress={() => props.toggle_showModal(false)}
      >
        <View style={[style.modalContent, { borderRadius: 3 }]}> */}

      <View style={style.container}>
        {/* <Text style={[style.text_18, { textAlign: "center" }]}>Make a Bid</Text> */}
        <Text style={style.form_label}>Amount</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <FormControl isInvalid={errors["price"] ? true : false}>
              <Input
                {...style.form_control}
                _focus={colors.border_black}
                type="numeric"
                keyboardType="numeric"
                placeholder="Please enter amount"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            </FormControl>
          )}
          name={"price"}
          defaultValue=""
        />
        {errors["price"] && (
          <Text style={style.error_text}>Amount is required.</Text>
        )}

        <Text style={style.form_label}>Choose rider</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <FormControl isInvalid={errors["rider_id"] ? true : false}>
              <Select
                // selectedValue={user.rider_id}
                minWidth={200}
                accessibilityLabel="Select rider"
                placeholder={
                  !fleet.length
                    ? "Please add riders in the fleet section"
                    : "Please select rider"
                }
                {...style.select_form_control}
                isDisabled={fleetLoading || !fleet.length ? true : false}
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
                {fleet.map((rider) => {
                  return (
                    <Select.Item
                      label={`${rider.firstname} ${rider.lastname}`}
                      value={rider._id}
                      key={rider._id}
                    />
                  );
                })}
              </Select>
            </FormControl>
          )}
          name={"rider_id"}
          defaultValue=""
        />
        {errors["rider_id"] && (
          <Text style={style.error_text}>please select a rider.</Text>
        )}

        <Button
          block
          title={fleetLoading ? "fetching riders..." : "place bid"}
          buttonStyle={[style.btn_success]}
          loading={loading}
          disabled={loading || fleetLoading || !fleet.length}
          disabledStyle={[style.btn_success_disabled]}
          disabledTitleStyle={{ color: colors.white }}
          titleStyle={style.btn_text}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      {/* </View>
      </Modal> */}
    </View>
  );
};

export default BidModal;
