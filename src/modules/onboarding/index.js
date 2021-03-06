import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Button,
  Thumbnail,
  Right,
  Card,
  CardItem,
  Body,
  Tab,
  Tabs,
  TabHeading,
  View,
  Title,
  Segment,
} from "native-base";
import styles from "../../assets/styles/general/style";
import style from "../../assets/styles/general/style";
import { TouchableOpacity } from "react-native";

export class Onboarding extends Component {
  render() {
    const onRouteChange = this.props.onRouteChange;

    return (
      <Container>
        <Content style={style.container}>
          <View>
            <Thumbnail
              square
              source={require("../../assets/logos/logo.png")}
              style={style.top_logo}
            />
            <Text style={style.heading}>Welcome 👋🏾</Text>
            <Text style={style.heading_text}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor.{" "}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#E9F4FF",
              borderRadius: 6,
              paddingHorizontal: 15,
              paddingVertical: 17,
              marginBottom: "10%",
            }}
          >
            <TouchableOpacity onPress={() => onRouteChange("user")}>
              <Grid>
                <Row>
                  <Col size={1}>
                    <Thumbnail
                      square
                      source={require("../../assets/icons/send.png")}
                      style={{ height: 40, width: 40 }}
                    />
                  </Col>
                  <Col size={3}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        marginBottom: 10,
                      }}
                    >
                      Send parcels
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#494949",
                        marginBottom: 10,
                      }}
                    >
                      For Customers.
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#FFE9DD",
              borderRadius: 6,
              paddingHorizontal: 15,
              paddingVertical: 17,
              marginBottom: "10%",
            }}
          >
            <TouchableOpacity onPress={() => onRouteChange("business")}>
              <Grid>
                <Row>
                  <Col size={1}>
                    <Thumbnail
                      square
                      source={require("../../assets/icons/suitcase.png")}
                      style={{ height: 40, width: 40 }}
                    />
                  </Col>
                  <Col size={3}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        marginBottom: 10,
                      }}
                    >
                      Register your ride
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#494949",
                        marginBottom: 10,
                      }}
                    >
                      For Businesses.
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#0BE05C1A",
              borderRadius: 6,
              paddingHorizontal: 15,
              paddingVertical: 17,
              marginBottom: "10%",
            }}
          >
            <TouchableOpacity onPress={() => onRouteChange("rider")}>
              <Grid>
                <Row>
                  <Col size={1}>
                    <Thumbnail
                      square
                      source={require("../../assets/icons/bike.png")}
                      style={{ height: 40, width: 40 }}
                    />
                  </Col>
                  <Col size={3}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        marginBottom: 10,
                        color: "#000000",
                      }}
                    >
                      See Available Orders
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#494949",
                        marginBottom: 10,
                      }}
                    >
                      For Riders.
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Onboarding;
