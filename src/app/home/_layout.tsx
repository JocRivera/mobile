import { Tabs } from 'expo-router';
import { Home, CalendarDays } from 'lucide-react-native'; // importa los íconos

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <Tabs.Screen name="reservation" options={{
                title: 'Reservas',
                tabBarIcon: ({ color, size }) => (
                    <CalendarDays color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="accomodation" options={{ title: 'Alojamientos' }} />
        </Tabs>
    );
}
