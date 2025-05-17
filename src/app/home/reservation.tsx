import Home from "@/modules/book/Home";
import { Text, View } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
export default function Reservation() {
    const { loading, isAuthenticated } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.replace('/');
        }
    }, [loading, isAuthenticated]);
    return (
        <View className="flex flex-1 ">
            <Home />
        </View>
    );
}
