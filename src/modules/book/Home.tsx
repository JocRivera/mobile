import { View } from "react-native";
import { Text } from "react-native";
import Header from "@/layout/Header";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
export default function Home() {
    const { loading, isAuthenticated } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.replace('/');
        }
    }, [loading, isAuthenticated]);

    return (
        <View >
            <Header />
        </View>
    );
}