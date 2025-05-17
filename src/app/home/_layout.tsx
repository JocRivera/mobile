import { Tabs } from 'expo-router';

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <Tabs.Screen name="reservation" options={{ title: 'Reservas' }} />
            <Tabs.Screen name="accomodation" options={{ title: 'Alojamientos' }} />
        </Tabs>
    );
}
