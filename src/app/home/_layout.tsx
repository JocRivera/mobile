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
            <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
            <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
        </Tabs>
    );
}
