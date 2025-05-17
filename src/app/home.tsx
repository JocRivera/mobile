import Home from "@/modules/book/Home";
import { Text, View } from "react-native";
export default function HomePage() {
    return (
        <View className="items-center justify-center flex-1">
            <Text className="text-2xl font-bold">Home</Text>
            <Home />
        </View>
    );
}
