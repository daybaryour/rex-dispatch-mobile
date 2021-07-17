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
    marginTop: "30%",
    marginBottom: "5%",
  },
  heading: {
    // fontFamily: "CircularStdFont-Medium",
    // fontFamily: "Avenir-Roman",
    fontSize: 20,
    fontWeight: Platform === "ios" ? "600" : "bold",
    marginBottom: "2%",
    color: "#1F1F1F",
  },
  heading_text: {
    fontSize: 14,
    fontWeight: Platform === "ios" ? "500" : "bold",
    color: "#1F1F1F",
    marginBottom: "10%",
    lineHeight: 17.17,
  },
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
    marginTop: "7%",
    marginBottom: "4%",
  },
  btn_success: {
    backgroundColor: colors.lemon,
    borderRadius: 3,
    padding: "5%",
    marginBottom: "10%",
  },
  sub_heading: {
    fontWeight: "600",
    fontSize: 16,
    color: colors.black,
  },
  btn_text: {
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "500",
  },
  text_white: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "500",
  },
  text_16: {
    fontSize: 16,
    color: colors.black,
    fontWeight: Platform === "ios" ? "500" : "bold",
  },
});
