import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        // headerTitle: 'A screen'
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator
    },
    Favorites: FavoritesScreen
}, {
    tabBarOptions: {
    }
})

export default createAppContainer(MealsFavTabNavigator);