import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={props.onSelect}
            >
                <Card
                    containerStyle={{ ...styles.card, ...{ backgroundColor: props.bgColor } }}
                    dividerStyle={styles.divider}
                    title={props.title}>
                </Card>
            </TouchableCmp>
        </View>

    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    card: {
        height: 150,
        borderRadius: 10,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10
    },
    divider: {
        display: "none"
    }
})

export default CategoryGridTile;