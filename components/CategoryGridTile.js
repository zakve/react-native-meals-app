import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}
        >
            <Card
                containerStyle={{ ...styles.card, ...{ backgroundColor: props.bgColor } }}
                dividerStyle={styles.divider}
                title={props.title}>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1
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