import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
export default function Header() {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: top }}>
            <View className="flex flex-row items-center justify-between px-4 lg:px-6 h-14 ">
                <Link className="items-center justify-center flex-1 font-bold" href="/">
                    ACME
                </Link>
                <View className="flex flex-row gap-4 sm:gap-6">
                    <Link
                        className="font-medium text-md hover:underline web:underline-offset-4"
                        href="/"
                    >
                        About
                    </Link>
                    <Link
                        className="font-medium text-md hover:underline web:underline-offset-4"
                        href="/"
                    >
                        Product
                    </Link>
                    <Link
                        className="font-medium text-md hover:underline web:underline-offset-4"
                        href="/"
                    >
                        Pricing
                    </Link>
                </View>
            </View>
        </View>
    )
}   