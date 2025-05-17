import { Text, View } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import SearchComponent from "@/components/Search";
import Filter from "@/components/Filter";
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
            <View className="mx-w-[700px] mx-h-[700px] bg-white rounded-lg shadow-md p-4">
                <SearchComponent />
            </View>
            <View className="flex-1 px-4 py-6 md:px-6 ">
                <Filter />
            </View>
        </View>
    );
}
