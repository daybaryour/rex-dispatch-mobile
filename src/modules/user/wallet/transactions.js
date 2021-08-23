import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Image, Divider, useToast } from "native-base";
import Spinner from "react-native-spinkit";
import moment from "moment";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//redux
import { useDispatch } from "react-redux";
import { getTransactions } from "../../../redux/general/transactions/transactionActions";

const Transactions = () => {
  const source = [1, 2, 3, 4, 5];
  const [pageLoading, setPageLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getTransactions("customer"))
      .then((res) => {
        setTransactions(res);
        setPageLoading(false);
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

  return (
    <View style={[style.container, { marginTop: 30, flex: 1 }]}>
      <Text
        style={[style.text, { color: colors.text_ash, marginBottom: "5%" }]}
      >
        Transactions History
      </Text>

      {pageLoading && !transactions.length ? (
        <View
          style={{
            // display: "flex",
            flex: 0.8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Spinner
              isVisible={true}
              size={60}
              type="ThreeBounce"
              color={colors.navy_blue}
            />
          </View>
        </View>
      ) : !transactions.length ? (
        <View
          style={{
            // display: "flex",
            flex: 0.8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <MaterialIcons
              style={{
                color: colors.text_ash,
                fontSize: 60,
                textAlign: "center",
              }}
              name={"payments"}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                marginTop: 10,
                color: colors.text_ash,
              }}
            >
              No Transaction history
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {transactions.map((data) => {
              return (
                <Grid style={{ marginBottom: "5%" }}>
                  <Row>
                    <Col size={0.8}>
                      <Image
                        style={{
                          marginTop: "15%",
                          height: 10,
                          width: 10,
                        }}
                        source={require("../../../assets/icons/credit_arrow.png")}
                        alt="Alternate Text"
                        size={"sm"}
                      />
                    </Col>
                    <Col size={6}>
                      <Text style={[style.text, { marginBottom: "5%" }]}>
                        {data.narration}
                      </Text>
                      <Text
                        style={[
                          style.text_12,
                          { color: colors.text_grey, marginBottom: "5%" },
                        ]}
                      >
                        {moment(data.createdAt).format("MMMM Do YYYY, h:mm")}
                      </Text>
                    </Col>
                    <Col size={2}>
                      <Text style={[style.text]}>
                        ₦{new Intl.NumberFormat().format(data.amount)}
                      </Text>
                    </Col>
                  </Row>
                  <Divider />
                </Grid>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Transactions;
