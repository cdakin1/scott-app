import React from 'react';
import { Image } from "react-native";
import { Header as H } from "react-native-elements";
import COLORS from "../../lib/constants";

const Header = (props) => (
    <H
        leftComponent={
            <Image
                source={require("../../Images/logo.png")}
                style={{ top: 10, width: 35, height: 45 }}
            />
        }
        centerComponent={{ text: props.title, style: { color: COLORS.BLUE } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor={COLORS.GREY}
    />
);

export default Header;