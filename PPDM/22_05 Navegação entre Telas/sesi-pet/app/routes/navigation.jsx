import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Páginas
import Login from '../pages/login';
import Registro from '../pages/registro';
import Atendimentos from '../pages/atendimentos';
import Profissionais from '../pages/profissionais';

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
            <Tab.Screen name="Atendimentos" component={Atendimentos} />
            <Tab.Screen name="Profissionais" component={Profissionais} />
        </Tab.Navigator>
    );
}

function MenuSuperior() {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                drawerActiveTintColor: 'blue',
                drawerInactiveTintColor: 'gray',
                drawerIcon: ({ color, size, focused }) => {
                    let iconName = 'ellipse-outline';

                    if (route.name === 'Início') {
                        iconName = focused ? 'paw' : 'paw-outline';
                    }

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
            <Drawer.Screen name="Início" component={Tabs} />
            <Drawer.Screen name="Atendimentos" component={Atendimentos} />
            <Drawer.Screen name="Profissionais" component={Profissionais} />
        </Drawer.Navigator>
    );
}

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} screenOptions={{ headerShown: false }} />
            <Stack.Screen name='Registro' component={Registro} screenOptions={{ headerShown: false }} />
            <Stack.Screen name='Principal' component={MenuSuperior} screenOptions={{ headerShown: false }} />
        </Stack.Navigator>
    )
}