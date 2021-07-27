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
    padding: 20,
    marginBottom: 40,
    marginTop: 50,
  },

  // form elements
  form_control: {
    borderWidth: 1.1,
    borderColor: colors.border_black,
    borderRadius: 3,
    width: "100%",
    // height: "13%",
    fontSize: 16,
    height: 50,
  },

  form_label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 28,
    marginBottom: 12,
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
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
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
