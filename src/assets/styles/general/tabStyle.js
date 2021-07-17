import { StyleSheet } from "react-native";
import colors from "../../../helpers/color";

export default StyleSheet.create({
  container: {
    marginHorizontal: "10%",
  },
  top_logo: {
    height: 45,
    width: 80,
    marginTop: "20%",
    marginBottom: "5%",
  },
  heading: {
    // fontFamily: "CircularStdFont-Medium",
    // fontFamily: "Avenir-Roman",
    fontSize: 35,
    fontWeight: "600",
    marginBottom: "2%",
    color: "#1F1F1F",
  },
  heading_text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#1F1F1F",
    marginBottom: "10%",
    // lineHeight: 17.17,
  },
  form_control: {
    borderWidth: 1,
    borderColor: colors.border_black,
    borderRadius: 3,
    width: "100%",
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
  },
  sub_heading: {
    fontWeight: "600",
    fontSize: 16,
    color: colors.black,
  },
  btn_text: {
    fontSize: 14,
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
});
