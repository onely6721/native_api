import React from 'react';
import { Text, View} from "react-native";

const UniversityDetail = ({route}) => {

    const {university} = route.params

    return (
        <View>
          <Text>Name: {university.name}</Text>
          <Text>Alpha two code: {university.alpha_two_code}</Text>
          <Text>Country: {university.country}</Text>
          <Text>Domains: {university.domains.toString()}</Text>
          <Text>Web pages: {university.web_pages.toString()}</Text>

        </View>
    );
};

export default UniversityDetail;