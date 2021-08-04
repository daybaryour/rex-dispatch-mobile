import React, { useState } from "react";
import { View } from "react-native";
import { Tab, TabView } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/businessFooter";
import PendingBids from "./pendingBids";
import AcceptedBids from "./acceptedBids";
import DeclinedBids from "./declinedBids";

const Bids = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <View style={style.body}>
      <Header title={"All Bids"} />

      <Tab
        value={tab}
        onChange={setTab}
        indicatorStyle={{ backgroundColor: colors.lemon }}
      >
        <Tab.Item
          title="Pending"
          buttonStyle={{ backgroundColor: colors.ash_bg }}
          type="solid"
          titleStyle={{
            fontSize: 16,
            color: colors.black,
            textTransform: "capitalize",
          }}
        />
        <Tab.Item
          title="Accepted"
          buttonStyle={{ backgroundColor: colors.ash_bg }}
          type="clear"
          titleStyle={{
            fontSize: 16,
            color: colors.black,
            textTransform: "capitalize",
          }}
        />
        <Tab.Item
          buttonStyle={{ backgroundColor: colors.ash_bg }}
          title="Declined"
          titleStyle={{
            fontSize: 16,
            color: colors.black,
            textTransform: "capitalize",
          }}
        />
      </Tab>
      <TabView value={tab} onChange={setTab}>
        <TabView.Item style={{ width: "100%" }}>
          <PendingBids navigation={props.navigation} />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <AcceptedBids navigation={props.navigation} />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <DeclinedBids navigation={props.navigation} />
        </TabView.Item>
      </TabView>
      <Footer location={"bids"} navigation={props.navigation} />
    </View>
  );
};

export default Bids;
