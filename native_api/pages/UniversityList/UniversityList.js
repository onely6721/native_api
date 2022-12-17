import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ScrollView, Text} from "react-native";

const API_URL = 'http://universities.hipolabs.com/search'

const UniversityList = ({navigation}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(API_URL)
            setData(result?.data.filter((univ) => univ.country === 'Ukraine'))
        }

        getData().then()
    }, [])

    const onUniversityPress = (university) => {
        navigation.navigate('UniversityDetail', {university})
    }

    return (
        <ScrollView>
            {data?.map((university) =>
                <Text
                    onPress={() => onUniversityPress(university)}
                >
                    {university.name}
                </Text>
            )}

        </ScrollView>
    );
};

export default UniversityList;