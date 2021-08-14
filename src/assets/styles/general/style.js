import { StyleSheet } from "react-native";
import colors from "../../../helpers/color";
import { Platform } from "react-native";

export default StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    marginHorizontal: "6%",
  },
  no_padding: {
    padding: 0,
  },
  no_margin: {
    margin: 0,
  },
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top_logo: {
    height: 45,
    width: 80,
    marginTop: 120,
    marginBottom: 20,
  },

  //buttons
  btn_success: {
    backgroundColor: colors.lemon,
    borderRadius: 3,
    padding: 15,
    marginBottom: 40,
    marginTop: 50,
  },

  btn_success_disabled: {
    backgroundColor: colors.lemon_disabled,
    borderRadius: 3,
    padding: 15,
    marginBottom: 40,
    marginTop: 50,
  },

  // form elements
  form_control: {
    borderWidth: 1.2,
    borderColor: colors.border_black,
    borderRadius: 3,
    width: "100%",
    // height: "13%",
    fontSize: 16,
    height: 55,
  },

  form_label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 28,
    marginBottom: 12,
  },

  //   react-native-phone-number-input styling
  phone_container: {
    padding: 0,
    borderWidth: 1.2,
    width: "100%",
    borderRadius: 3,
  },
  phone_container_error: {
    padding: 0,
    borderWidth: 1.2,
    width: "100%",
    borderRadius: 3,
    borderColor: "red",
  },
  phone_text_container: {
    backgroundColor: "#fff",
    maxHeight: 55,
    margin: 0,
    padding: 0,
  },

  //   Headings
  heading: {
    // fontFamily: "CircularStdFont-Medium",
    // fontFamily: "Avenir-Roman",
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
    marginBottom: 8,
    color: "#1F1F1F",
  },
  heading_text: {
    fontSize: 14,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    color: "#1F1F1F",
    marginBottom: 20,
    lineHeight: 17.17,
  },
  sub_heading: {
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
    fontSize: 16,
    color: colors.black,
  },

  //texts
  btn_text: {
    fontSize: 16,
    fontWeight: "normal",
  },
  text: {
    fontSize: 14,
    color: colors.black,
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
  },
  text_white: {
    fontSize: 14,
    color: colors.white,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
  },
  error_text: {
    marginTop: 5,
    fontSize: 12,
    color: "red",
  },
  text_12: {
    fontSize: 12,
    color: colors.black,
  },
  text_16: {
    fontSize: 16,
    color: colors.black,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
  },
  text_16_normal: {
    fontSize: 16,
    color: colors.black,
  },
  text_18: {
    fontSize: 16,
    color: colors.black,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
  },
  text_20: {
    fontSize: 20,
    color: colors.black,
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
  },

  //   modals
  modalContent: {
    backgroundColor: colors.white,
    paddingVertical: 48,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
