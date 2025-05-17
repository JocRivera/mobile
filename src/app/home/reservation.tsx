import { Text, View, ScrollView } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import SearchComponent from "@/components/Search";
import Filter from "@/components/Filter";
import Group from "@/components/Group";
export default function Reservation() {
    const { loading, isAuthenticated } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.replace('/');
        }
    }, [loading, isAuthenticated]);
    return (
        <ScrollView>
            <View className="flex flex-1 ">
                <View className="mx-w-[700px] mx-h-[700px] bg-white rounded-lg shadow-md p-4 z-10">
                    <SearchComponent />
                </View>
                <View>
                    <Group />
                </View>
            </View>
        </ScrollView>
    );
}
