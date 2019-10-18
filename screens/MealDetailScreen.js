import React from 'react';
import { View, Text, StyleSheet } from "react-native";

import { Button } from 'react-native-elements';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Button title="Go Back to Categories" type="outline" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen;