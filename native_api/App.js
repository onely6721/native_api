import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import UniversityList from "./pages/UniversityList/UniversityList";
import UniversityDetail from "./pages/UniversityDetail/UniversityDetail";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UniversityList" component={UniversityList} />
                <Stack.Screen name="UniversityDetail" component={UniversityDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;
