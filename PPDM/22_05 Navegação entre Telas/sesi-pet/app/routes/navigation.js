import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Páginas

// Navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName = 'ellipse-outline';

                    if (route.name === 'Atendimentos') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }

                    if (route.name === 'Profissionais') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
        >
        </Tab.Navigator>
    );
}

export default Tabs;