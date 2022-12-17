import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import storage from '../../storage/Storage';

const API_URL = 'http://universities.hipolabs.com/search';

const UniversityList = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(API_URL);
      if (result.data.length > 0) {
        const ukUniversity = result?.data.filter(
          univ => univ.country === 'Ukraine',
        );
        setData(ukUniversity);
        storage.save({
          key: 'University',
          data: {
            ukUniversity,
          },
          expires: 1000 * 3600,
        });
      } else {
        storage
          .load({
            key: 'University',
            autoSync: true,
            syncInBackground: true,
            syncParams: {
              someFlag: true,
            },
          })
          .then(res => {
            setData(res);
          });
      }
    };

    getData().then();
  }, []);

  const onUniversityPress = university => {
    navigation.navigate('UniversityDetail', {university});
  };

  return (
    <ScrollView>
      {data?.map(university => (
        <View style={styles.text} key={university.name}>
          <Text onPress={() => onUniversityPress(university)}>
            {university.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    borderRadius: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderTopColor: 'white',
  },
});

export default UniversityList;
