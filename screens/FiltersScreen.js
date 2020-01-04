import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegetarian: isVegetarian,
            vegan: isVegan
        }

        console.log(appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan])

    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <ListItem
                title='Gluten-free'
                switch={{ value: isGlutenFree, onValueChange: newValue => { setIsGlutenFree(newValue) } }}
            />
            <ListItem
                title='Vegan'
                switch={{ value: isVegan, onValueChange: newValue => { setIsVegan(newValue) } }}
            />
            <ListItem
                title='Vegetarian'
                switch={{ value: isVegetarian, onValueChange: newValue => { setIsVegetarian(newValue) } }}
            />
            <ListItem
                title='Lactose-free'
                switch={{ value: isLactoseFree, onValueChange: newValue => { setIsLactoseFree(newValue) } }}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='menu' style={styles.headerBtn} onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save' iconName='save' style={styles.headerBtn} onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
    },
    headerBtn: {
        paddingHorizontal: 15
    }
})

export default FiltersScreen;